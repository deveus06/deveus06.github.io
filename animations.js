// Three.js Animation for Esports Website
document.addEventListener('DOMContentLoaded', () => {
    // Get the container for Three.js
    const container = document.getElementById('three-container');
    
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true,
        powerPreference: 'low-power'
    });
    
    // Set renderer size and add to container
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(1);
    container.appendChild(renderer.domElement);
    
    // Create two particle systems for layered effect
    const createParticleSystem = (count, size, spread, speed) => {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        const speeds = new Float32Array(count);
        
        for (let i = 0; i < count; i++) {
            // Position
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * spread;
            positions[i3 + 1] = (Math.random() - 0.5) * spread;
            positions[i3 + 2] = (Math.random() - 0.5) * (spread / 2);
            
            // Color - cyberpunk gradient
            const hue = Math.random() * 0.1 + 0.5; // Blue to cyan range
            const saturation = 0.8;
            const lightness = 0.6;
            const color = new THREE.Color().setHSL(hue, saturation, lightness);
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
            
            // Size with variation
            sizes[i] = Math.random() * size;
            
            // Individual particle speed
            speeds[i] = (Math.random() + 0.5) * speed;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));
        
        const material = new THREE.PointsMaterial({
            size: size,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });
        
        return new THREE.Points(geometry, material);
    };
    
    // Create two layers of particles
    const backgroundParticles = createParticleSystem(800, 0.05, 15, 0.00003);
    const foregroundParticles = createParticleSystem(200, 0.08, 10, 0.00005);
    
    scene.add(backgroundParticles);
    scene.add(foregroundParticles);
    
    // Position camera
    camera.position.z = 5;
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    // Throttle mousemove event
    let lastTime = 0;
    const throttleInterval = 100;
    
    document.addEventListener('mousemove', (event) => {
        const currentTime = Date.now();
        if (currentTime - lastTime >= throttleInterval) {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            lastTime = currentTime;
        }
    });
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }, 250);
    });
    
    // Animation loop with particle behavior
    let lastFrameTime = 0;
    const animate = (currentTime) => {
        requestAnimationFrame(animate);
        
        const deltaTime = currentTime - lastFrameTime;
        lastFrameTime = currentTime;
        
        // Smooth mouse movement
        targetX += (mouseX * 2 - targetX) * 0.02;
        targetY += (mouseY * 2 - targetY) * 0.02;
        
        // Update particle positions
        const time = Date.now() * 0.0005;
        
        // Animate background particles
        const bgPositions = backgroundParticles.geometry.attributes.position;
        const bgSpeeds = backgroundParticles.geometry.attributes.speed;
        for (let i = 0; i < bgPositions.count; i++) {
            const i3 = i * 3;
            bgPositions.array[i3 + 1] -= bgSpeeds.array[i];
            
            // Reset particles that fall below view
            if (bgPositions.array[i3 + 1] < -7.5) {
                bgPositions.array[i3 + 1] = 7.5;
            }
        }
        bgPositions.needsUpdate = true;
        
        // Animate foreground particles with more dynamic movement
        const fgPositions = foregroundParticles.geometry.attributes.position;
        const fgSpeeds = foregroundParticles.geometry.attributes.speed;
        for (let i = 0; i < fgPositions.count; i++) {
            const i3 = i * 3;
            fgPositions.array[i3] += Math.sin(time + i) * 0.01;
            fgPositions.array[i3 + 1] -= fgSpeeds.array[i] * 1.5;
            
            if (fgPositions.array[i3 + 1] < -5) {
                fgPositions.array[i3 + 1] = 5;
            }
        }
        fgPositions.needsUpdate = true;
        
        // Rotate particle systems
        backgroundParticles.rotation.x = targetY * 0.2;
        backgroundParticles.rotation.y = targetX * 0.2;
        foregroundParticles.rotation.x = targetY * 0.3;
        foregroundParticles.rotation.y = targetX * 0.3;
        
        renderer.render(scene, camera);
    };
    
    // Start animation
    animate(0);
    
    // Card Pack and Card Interaction Logic
    const packButtons = document.querySelectorAll('.open-pack-btn');
    
    // Pack opening functionality
    packButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const pack = this.closest('.card-pack');
            const cards = pack.querySelectorAll('.player-card');
            
            // Close any other open packs
            document.querySelectorAll('.card-pack.opened').forEach(openPack => {
                if (openPack !== pack) {
                    openPack.classList.remove('opened');
                    // Reset all cards in other packs
                    openPack.querySelectorAll('.player-card').forEach(card => {
                        card.classList.remove('flipped');
                    });
                }
            });
            
            // Open this pack
            pack.classList.add('opened');
            
            // Reveal cards with staggered animation
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });
    });

    // Individual card flip functionality
    const cards = document.querySelectorAll('.player-card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const pack = this.closest('.card-pack');
            if (pack.classList.contains('opened')) {
                this.classList.toggle('flipped');
            }
        });
    });

    // Close pack when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.card-pack')) {
            document.querySelectorAll('.card-pack.opened').forEach(pack => {
                pack.classList.remove('opened');
                // Reset all cards
                pack.querySelectorAll('.player-card').forEach(card => {
                    card.classList.remove('flipped');
                });
            });
        }
    });

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Handle dropdowns on mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.main-nav')) {
            navLinks.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('.nav-links a, .dropdown-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Calculate the offset to account for the fixed header
                    const headerOffset = 70;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu after clicking
                    navLinks.classList.remove('active');
                    dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
                }
            }
        });
    });
}); 