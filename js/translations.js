class TranslationService {
    constructor() {
        this.currentLang = 'fr';
        this.translations = {
            'fr': {
                "nav": {
                    "about": "À propos",
                    "team": "Équipes",
                    "league": "Ligue collégiale",
                    "achievements": "Réalisations",
                    "events": "Événements",
                    "esport": "Esport",
                    "contact": "Contact",
                    "join": "Rejoins-nous"
                },
                "hero": {
                    "title": "Les Legionnaires",
                    "subtitle": "Équipe d'esport du Cégep de Sainte-Foy"
                },
                "league": {
                    "title": "LIGUE COLLÉGIALE DE SPORTS ÉLECTRONIQUES",
                    "championship": "Championnat",
                    "championship2024": "Championnat 2024",
                    "championship2023": "Championnat 2023",
                    "championship2022": "Championnat 2022",
                    "first_place": "1ère place",
                    "second_place": "2e place",
                    "third_place": "3e place",
                    "division": "division",
                    "press_conference": "Conférence de presse - 2023"
                },
                "about": {
                    "title": "À propos de nous",
                    "description": "Les Legionnaires est l'équipe officielle d'esport du Cégep de Sainte-Foy. Notre mission est de promouvoir l'esport collégial et de développer les talents de nos étudiants.",
                    "achievements": "Nos Réalisations",
                    "league": "Ligue collégiale de sports électroniques",
                    "championship": "Championnat",
                    "place": "place",
                    "team": "Notre Staff",
                    "overwatch": "Overwatch",
                    "valorant": "Valorant",
                    "accompaniment": "Accompagnateurs",
                    "training": "Encadrement et formation",
                    "competitive_teams": "Nos Équipes Compétitives",
                    "competitive_description": "Notre équipe participe à diverses compétitions collégiales et représente fièrement notre établissement dans les ligues suivantes:",
                    "training_description": "Tout au long de l'année, nous offrons des ateliers et conférences avec des experts sur des sujets clés comme l'hygiène de vie, la prévention de la cyberdépendance, l'ergonomie, et la place des femmes dans le sport électronique. Ces initiatives visent à assurer le bien-être de nos joueurs et joueuses tout en favorisant leur succès dans un environnement sain et inclusif."
                },
                "team": {
                    "title": "Nos équipes",
                    "description": "Rencontrez nos joueurs talentueux qui participent à divers tournois.",
                    "games": {
                        "lol": "League of Legends",
                        "valorant": "Valorant",
                        "rocket": "Rocket League",
                        "overwatch": "Overwatch"
                    },
                    "view": "Voir",
                    "coach": "Entraîneur",
                    "assistant_coach": "Assistant entraîneur",
                    "coordinator": "Coordonnatrice",
                    "mental_coach": "Préparateur mental",
                    "recreation_tech": "Technicien en loisirs",
                    "physical_trainer": "Entraîneur physique",
                    "manager": "Gestionnaire",
                    "pedagogical_aid": "Aide pédagogique",
                    "since": "Légionnaire depuis",
                    "division_1": "division 1",
                    "division_2": "division 2",
                    "division_3": "division 3",
                    "division_4": "division 4"
                },
                "events": {
                    "title": "Prochains Evenements",
                    "description": "Le LAN CSF revient pour une deuxième édition, offrant une expérience de sports électroniques unique en son genre dans la région de Québec. Cet événement immersif, convivial et ouvert au public est l'occasion pour les personnes passionnées de jeux vidéo de se rencontrer, de partager leur passion et de vivre l'intensité de la compétition en personne, au cœur de notre établissement.",
                    "lan_title": "LAN CSF 3e édition",
                    "lan_date": "16 au 18 janvier 2026"
                },
                "esport": {
                    "title": "Qu'est-ce que l'Esport ?",
                    "description": "L'esport est une forme de compétition organisée où les joueurs s'affrontent dans des jeux vidéo. C'est un phénomène mondial qui attire des millions de spectateurs.",
                    "electronic_sport": "Sport Électronique",
                    "electronic_sport_desc": "L'esport est une compétition organisée de jeux vidéo où les joueurs s'affrontent dans des tournois professionnels, avec des règles strictes et une structure similaire aux sports traditionnels.",
                    "professional_competition": "Compétition Professionnelle",
                    "professional_competition_desc": "Les joueurs professionnels s'entraînent quotidiennement, développent des stratégies complexes et participent à des tournois internationaux avec des prix pouvant atteindre des millions de dollars.",
                    "global_community": "Communauté Mondiale",
                    "global_community_desc": "Avec des millions de spectateurs en ligne et des stades remplis, l'esport crée une communauté mondiale passionnée, unissant les joueurs et les fans à travers le monde.",
                    "academic_recognition": "Reconnaissance Académique",
                    "academic_recognition_desc": "De plus en plus d'établissements d'enseignement reconnaissent l'esport comme une discipline à part entière, offrant des bourses et des programmes dédiés aux joueurs talentueux.",
                    "global_viewers": "Spectateurs Mondiaux",
                    "global_market": "Marché Global",
                    "participating_countries": "Pays Participants"
                },
                "media": {
                    "title": "Media & Contact",
                    "contact_us": "Contactez-nous",
                    "office": "Bureau",
                    "general_contact": "General Contact",
                    "location": "Local",
                    "phone": "poste"
                },
                "social": {
                    "twitch": "Regardez nos streams en direct",
                    "discord": "Rejoignez notre communauté",
                    "instagram": "Suivez notre parcours",
                    "facebook": "Restez informés"
                },
                "staff": {
                    "coach": "Entraîneur",
                    "head_coach": "Entraîneur en chef",
                    "assistant_coach": "Assistant entraîneur",
                    "coordinator": "Coordonnatrice",
                    "mental_coach": "Préparateur mental",
                    "recreation_tech": "Technicien en loisirs",
                    "physical_trainer": "Entraîneur physique",
                    "manager": "Gestionnaire",
                    "pedagogical_aid": "Aide pédagogique",
                    "division_1": "division 1",
                    "division_2": "division 2",
                    "division_3": "division 3",
                    "division_4": "division 4"
                },
                "join": {
                    "title": "Les sélections",
                    "registrations": "Inscriptions",
                    "selection_dates": "Du 13 au 27 janvier 2025",
                    "selection_night": "Soirée de sélection",
                    "overwatch_date": "Overwatch II : Lundi 27 janvier, 18h30",
                    "lol_date": "League of Legends : Jeudi 30 janvier, 18h30",
                    "valorant_date": "Valorant : Mardi 28 janvier, 18h30",
                    "costs": "Coûts",
                    "costs_fall": "À l'automne : 20$ + taxes pour les sélections (non-remboursable), 305$ + taxes pour l'année (total = 325$ + taxes)",
                    "costs_winter": "À l'hiver : 20$ + taxes pour les sélections (non-remboursable), 142,50$ + taxes pour la session (total = 162,50$ + taxes)",
                    "more_info": "Plus d'info :",
                    "contact": "Maxime Turcotte",
                    "office": "Bureau C-130",
                    "email": "maxturcotte@csfoy.ca",
                    "practices": "Pratiques",
                    "match": "Match",
                    "register": "Inscris-toi à",
                    "monday_practice": "Lundis 18h30 à 21h30, à distance",
                    "wednesday_practice": "Mercredis 18h30 à 21h30, en présence",
                    "thursday_practice": "Jeudis 18h30 à 21h30, à distance",
                    "monday_match": "Lundis 19h, à distance",
                    "tuesday_match": "Mardis 19h, à distance",
                    "thursday_match": "Jeudis 19h, à distance",
                    "in_person": "en présence",
                    "remote": "à distance"
                }
            },
            'en': {
                "nav": {
                    "about": "About",
                    "team": "Teams",
                    "league": "Collegiate League",
                    "achievements": "Achievements",
                    "events": "Events",
                    "esport": "Esports",
                    "contact": "Contact",
                    "join": "Join Us"
                },
                "hero": {
                    "title": "The Legionnaires",
                    "subtitle": "Cégep de Sainte-Foy Esports Team"
                },
                "league": {
                    "title": "COLLEGIATE ESPORTS LEAGUE",
                    "championship": "Championship",
                    "championship2024": "Championship 2024",
                    "championship2023": "Championship 2023",
                    "championship2022": "Championship 2022",
                    "first_place": "1st place",
                    "second_place": "2nd place",
                    "third_place": "3rd place",
                    "division": "division",
                    "press_conference": "Press Conference - 2023"
                },
                "about": {
                    "title": "About Us",
                    "description": "The Legionnaires is the official esports team of Cégep de Sainte-Foy. Our mission is to promote collegiate esports and develop our students' talents.",
                    "achievements": "Our Achievements",
                    "league": "Collegiate Esports League",
                    "championship": "Championship",
                    "place": "place",
                    "team": "Our Staff",
                    "overwatch": "Overwatch",
                    "valorant": "Valorant",
                    "accompaniment": "Accompaniment",
                    "training": "Training and Support",
                    "competitive_teams": "Our Competitive Teams",
                    "competitive_description": "Our team participates in various collegiate competitions and proudly represents our institution in the following leagues:",
                    "training_description": "Throughout the year, we offer workshops and conferences with experts on key topics such as lifestyle, cyberdependence prevention, ergonomics, and the place of women in esports. These initiatives aim to ensure the well-being of our players while promoting their success in a healthy and inclusive environment."
                },
                "team": {
                    "title": "Our Teams",
                    "description": "Meet our talented players who participate in various tournaments.",
                    "games": {
                        "lol": "League of Legends",
                        "valorant": "Valorant",
                        "rocket": "Rocket League",
                        "overwatch": "Overwatch"
                    },
                    "view": "View",
                    "coach": "Coach",
                    "assistant_coach": "Assistant Coach",
                    "coordinator": "Coordinator",
                    "mental_coach": "Mental Coach",
                    "recreation_tech": "Recreation Technician",
                    "physical_trainer": "Physical Trainer",
                    "manager": "Manager",
                    "pedagogical_aid": "Pedagogical Aid",
                    "since": "Legionnaire since",
                    "division_1": "division 1",
                    "division_2": "division 2",
                    "division_3": "division 3",
                    "division_4": "division 4"
                },
                "events": {
                    "title": "Upcoming Events",
                    "description": "The LAN CSF returns for its second edition, offering a unique esports experience in the Quebec region. This immersive, friendly, and public event is an opportunity for video game enthusiasts to meet, share their passion, and experience the intensity of competition in person, at the heart of our institution.",
                    "lan_title": "CSF LAN 3rd Edition",
                    "lan_date": "January 16-18, 2026"
                },
                "esport": {
                    "title": "What is Esports?",
                    "description": "Esports is a form of organized competition where players compete in video games. It's a global phenomenon that attracts millions of viewers.",
                    "electronic_sport": "Electronic Sport",
                    "electronic_sport_desc": "Esports is an organized video game competition where players compete in professional tournaments, with strict rules and a structure similar to traditional sports.",
                    "professional_competition": "Professional Competition",
                    "professional_competition_desc": "Professional players train daily, develop complex strategies, and participate in international tournaments with prizes reaching millions of dollars.",
                    "global_community": "Global Community",
                    "global_community_desc": "With millions of online viewers and filled stadiums, esports creates a passionate global community, uniting players and fans around the world.",
                    "academic_recognition": "Academic Recognition",
                    "academic_recognition_desc": "More and more educational institutions recognize esports as a full-fledged discipline, offering scholarships and dedicated programs for talented players.",
                    "global_viewers": "Global Viewers",
                    "global_market": "Global Market",
                    "participating_countries": "Participating Countries"
                },
                "media": {
                    "title": "Media & Contact",
                    "contact_us": "Contact Us",
                    "office": "Office",
                    "general_contact": "General Contact",
                    "location": "Location",
                    "phone": "extension"
                },
                "social": {
                    "twitch": "Watch our live streams",
                    "discord": "Join our community",
                    "instagram": "Follow our journey",
                    "facebook": "Stay updated"
                },
                "staff": {
                    "coach": "Coach",
                    "head_coach": "Head Coach",
                    "assistant_coach": "Assistant Coach",
                    "coordinator": "Coordinator",
                    "mental_coach": "Mental Coach",
                    "recreation_tech": "Recreation Technician",
                    "physical_trainer": "Physical Trainer",
                    "manager": "Manager",
                    "pedagogical_aid": "Pedagogical Aid",
                    "division_1": "division 1",
                    "division_2": "division 2",
                    "division_3": "division 3",
                    "division_4": "division 4"
                },
                "join": {
                    "title": "Team Selections",
                    "registrations": "Registration",
                    "selection_dates": "January 13-27, 2025",
                    "selection_night": "Selection Night",
                    "overwatch_date": "Overwatch II: Monday, January 27, 6:30 PM",
                    "lol_date": "League of Legends: Thursday, January 30, 6:30 PM",
                    "valorant_date": "Valorant: Tuesday, January 28, 6:30 PM",
                    "costs": "Costs",
                    "costs_fall": "Fall semester: $20 + taxes for selections (non-refundable), $305 + taxes for the year (total = $325 + taxes)",
                    "costs_winter": "Winter semester: $20 + taxes for selections (non-refundable), $142.50 + taxes for the session (total = $162.50 + taxes)",
                    "more_info": "More information:",
                    "contact": "Maxime Turcotte",
                    "office": "Office C-130",
                    "email": "maxturcotte@csfoy.ca",
                    "practices": "Practices",
                    "match": "Match",
                    "register": "Register for",
                    "monday_practice": "Mondays 6:30 PM to 9:30 PM, remote",
                    "wednesday_practice": "Wednesdays 6:30 PM to 9:30 PM, in person",
                    "thursday_practice": "Thursdays 6:30 PM to 9:30 PM, remote",
                    "monday_match": "Mondays 7:00 PM, remote",
                    "tuesday_match": "Tuesdays 7:00 PM, remote",
                    "thursday_match": "Thursdays 7:00 PM, remote",
                    "in_person": "in person",
                    "remote": "remote"
                }
            }
        };
        this.translationElements = document.querySelectorAll('[data-translate]');
        this.initialize();
    }

    async initialize() {
        try {
            // Load user's preferred language
            this.loadLanguagePreference();
            
            // Add language switcher to the page
            this.addLanguageSwitcher();
            
            // Initial update of content
            this.updatePageContent();
        } catch (error) {
            console.error('Failed to initialize translation service:', error);
        }
    }

    async switchLanguage(lang) {
        if (this.currentLang === lang) return;
        
        try {
            this.currentLang = lang;
            this.updatePageContent();
            this.saveLanguagePreference();
            
            // Update active button state
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });
        } catch (error) {
            console.error('Failed to switch language:', error);
        }
    }

    updatePageContent() {
        this.translationElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            
            if (translation) {
                // Special handling for championship titles
                if (key === 'about.championship') {
                    // Get the year from the parent achievement-item's ID
                    const achievementItem = element.closest('.achievement-item');
                    const year = element.textContent.match(/\d{4}/)?.[0] || '';
                    element.textContent = `${translation} ${year}`;
                } else {
                    element.textContent = translation;
                }
            } else {
                console.warn(`Translation not found for key: ${key}`);
            }
        });
    }

    getTranslation(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                console.warn(`Translation not found for key: ${key}`);
                return null;
            }
        }
        
        return translation;
    }

    saveLanguagePreference() {
        localStorage.setItem('preferredLanguage', this.currentLang);
    }

    loadLanguagePreference() {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        }
    }

    addLanguageSwitcher() {
        const header = document.querySelector('header');
        if (!header) return;

        const languageSwitcher = document.createElement('div');
        languageSwitcher.className = 'language-switcher';
        languageSwitcher.innerHTML = `
            <button class="lang-btn ${this.currentLang === 'fr' ? 'active' : ''}" data-lang="fr">FR</button>
            <button class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
        `;
        header.appendChild(languageSwitcher);

        // Add event listeners for language buttons
        document.querySelectorAll('.lang-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = button.getAttribute('data-lang');
                this.switchLanguage(lang);
            });
        });
    }
}

// Create and initialize the translation service
const translationService = new TranslationService(); 