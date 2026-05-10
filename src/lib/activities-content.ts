export const activitiesContent = {
  en: {
    pageTitle: "Skills Acquisition Portfolio",
    pageDescription: "Explore my journey. Remember: a maximum of 10 hours is validated per theme for the official degree requirement.",
    targetHoursLabel: "Academic Objective",
    remainingLabel: "hours to validate",
    objectiveReached: "Objective reached! 🎉",
    progressValidated: "Validated progress",
    realizedHours: "hours realized",
    validatedHours: "hours validated",
    frameworkTitle: "Activity Framework",
    analysisTitle: "Reflective Analysis & Learnings",
    proofLabel: "Proofs",
    backToHub: "← Back to Hub",

    themes: [
      {
        id: "t1",
        title: "Cybersecurity & Challenges",
        description: "Competitions and technical challenges in the field of security.",
        activities: [
          {
            id: "a1", title: "CTF Ephec", type: "Hackathon", hours: 1, date: "13/05/2025", 
            proofs: [{ type: "link", label: "Attestation PDF", url: "/proofs/CTF_EPHEC.pdf" }],
            context: "Security competition organized within the school involving web and network challenges.",
            learnings: "Discovery of real-world vulnerabilities and introduction to ethical hacking tools."
          },
          {
            id: "a2", title: "CyberSecurity Challenge 2025", type: "Hackathon", hours: 4, date: "2025", 
            proofs: [{ type: "image", label: "CSC 2025 Badge/Result", url: "/proofs/cyber_2025.png" }],
            context: "National competition for Belgian students involving various security categories.",
            learnings: "Practice in digital forensics, cryptanalysis, and penetration testing in a competitive environment."
          },
          {
            id: "a3", title: "Cybersecurity Challenge 2026", type: "Hackathon", hours: 6, date: "2026", 
            proofs: [{ type: "image", label: "Cyber 2026 Registration", url: "/proofs/cyber_2026.png" }],
            context: "Advanced participation in the national challenge to sharpen technical defensive and offensive skills.",
            learnings: "Advanced forensics techniques and team collaboration under pressure."
          }
        ]
      },
      {
        id: "t2",
        title: "Tutoring & Academic Support",
        description: "Academic assistance and peer-to-peer coaching within the EPHEC community.",
        activities: [
          {
            id: "a15", 
            title: "EPHEC Tutoring", 
            type: "Coaching", 
            hours: 40, 
            date: "2024-2025", 
            proofs: [
              { type: "link", label: "Tutoring Certificate 2024", url: "/proofs/AttestationTutorat_2024.pdf" },
              { type: "link", label: "Tutoring Certificate 2025", url: "/proofs/AttestationTutorat_2025.pdf" }
            ],
            context: "Providing academic support to first-year students struggling with core subjects such as Mathematics, Networking, and English.",
            learnings: "Reinforcing technical fundamentals through teaching, developing patience, and adapting communication to different learning styles."
          }
        ]
      },
      {
        id: "t3",
        title: "IT Student Jobs",
        description: "Professional experiences and technical coaching during my studies.",
        activities: [
          {
            id: "a4", title: "IT Educator @ Logiscool Wavre", type: "Job", hours: 200, date: "2023-2026", 
            proofs: [{ type: "image", label: "Employment Document", url: "/proofs/logiscool_etudiant.png" }],
            context: "Teaching programming (Python, Unity, Godot) to children and teenagers during the school year.",
            learnings: "Developing pedagogical skills and the ability to simplify complex technical concepts for a non-expert audience."
          },
          {
            id: "a5", title: "IT Stage Coach @ Promosport", type: "Job", hours: 200, date: "2023-2025", 
            proofs: [{ type: "image", label: "Work Certificate", url: "/proofs/stage_etudiant.png" }],
            context: "Leading IT workshops and intensive stages focusing on robotics and game design in Louvain-la-Neuve.",
            learnings: "Management of young groups, event technical logistics, and project-based learning animation."
          },
          {
            id: "a6", title: "Junior Internal System Engineer @ EASI", type: "Job", hours: 30, date: "05/2026-present", 
            proofs: [{ type: "image", label: "EASI Student Contract", url: "/proofs/job-etudiant_easi.png" }],
            context: "Assisting the internal IT team at EASI in managing infrastructure, deployments, and user support.",
            learnings: "Immersion in a high-level professional environment and mastering modern system administration tools."
          }
        ]
      },
      {
        id: "t4",
        title: "Freelance & Client Projects",
        description: "Development of production-ready web solutions for various clients.",
        activities: [
          {
            id: "a7", title: "Kristel-art", type: "Project", hours: 13, date: "2025", 
            proofs: [
              { type: "link", label: "Visit Live Website", url: "https://kristel-art.be" }, // Nouveau lien direct
              { type: "github", label: "View Source Code", url: "https://github.com/NathanColson/kristel_art" }
            ],
            context: "End-to-end development of a showcase and sales platform for a professional painter.",
            learnings: "Full-stack development, SEO optimization, and handling client requirements from scratch."
          },
          {
            id: "a8", title: "Cielpied", type: "Project", hours: 15, date: "2026", 
            proofs: [
              { type: "link", label: "Visit Live Website", url: "https://cielpied.be" }, // Nouveau lien direct
              { type: "github", label: "View Source Code", url: "https://github.com/NathanColson/ciel-pied" }
            ],
            context: "Complete website for a reflexology salon including product management and online visibility.",
            learnings: "User experience (UX) design for health services and secure online store management."
          },
          {
            id: "a9", title: "The Beauty Corner", type: "Project", hours: 6, date: "In Dev", 
            proofs: [
              { type: "github", label: "GitHub Repo (In Dev)", url: "https://github.com/NathanColson/The-Beauty-Corner" }
            ],
            context: "Ongoing development of a modern appointment-booking and showcase site for an aesthetic salon.",
            learnings: "Implementing complex scheduling systems and responsive UI design."
          }
        ]
      },
      {
        id: "t5",
        title: "Artificial Intelligence",
        description: "Monitoring and training on LLMs and conversational agents.",
        activities: [
          {
            id: "a10", title: "Hugging Face LLM Formation", type: "Formation", hours: 8, date: "2026", 
            proofs: [{ type: "image", label: "Online Certificate", url: "/proofs/LLM-Formation.webp" }],
            context: "In-depth online training on Large Language Models (LLMs) and their industrial implementation.",
            learnings: "Understanding the underlying architecture of modern AIs and ethical usage of generative tools."
          },
          {
            id: "a11", title: "UCLouvain AI Conference", type: "Conference", hours: 2.5, date: "2026", 
            proofs: [
              { type: "image", label: "Conference Hall", url: "/proofs/conferance.jpeg" },
              { type: "image", label: "Proof of attendance", url: "/proofs/me_conferance.jpeg" }
            ],
            context: "Expert conference at UCLouvain focusing on the social and technical impact of conversational AIs.",
            learnings: "Critical analysis of AI integration in the workplace and future industry trends."
          }
        ]
      },
      {
        id: "t6",
        title: "Professional Immersion & Conferences",
        description: "Exploration of the IT ecosystem, corporate cultures, and specialized technical seminars.",
        activities: [
          {
            id: "a16", 
            title: "Odoo Corporate Visit", 
            type: "Immersion", 
            hours: 3, 
            date: "Summer 2025", 
            proofs: [
              { type: "image", label: "Visit Photo / Invitation", url: "/proofs/visite_odoo.png" }
            ],
            context: "Private visit to Odoo's headquarters at 'Les Fermes de Ramillies'. Presentation of the ERP ecosystem and discovery of the infrastructure and unique corporate culture.",
            learnings: "Discovery of a world-leading software company's growth model and modern workspace management."
          },
          {
            id: "a17", 
            title: "Microsoft Cloud & Azure Conference", 
            type: "Conference", 
            hours: 2, 
            date: "03/11/2025", 
            proofs: [
              { type: "image", label: "Participation Certificate", url: "/proofs/microsoft_conf.png" }
            ],
            context: "Technical conference on 'Cloud with M365 and Azure Infrastructure' given by Kevin Keurvels (Axentys) at EPHEC.",
            learnings: "Deepening knowledge of Azure hybrid infrastructure, M365 ecosystem management, and professional IT support services."
          }
        ]
      },
      {
        id: "t7",
        title: "Sport & Esport",
        description: "Teamwork and personal discipline through competition and running.",
        activities: [
          {
            id: "a12", title: "LAN & Esport (LoL)", type: "Project", hours: 20, date: "2024-2025", 
            proofs: [{ type: "image", label: "Event Photo", url: "/proofs/lan_lol.jpeg" }],
            context: "Organizing and participating in League of Legends tournaments (Mons/Charleroi).",
            learnings: "Team communication, technical event setup, and strategic leadership under pressure."
          },
          {
            id: "a13", title: "Running (Liège & Visé)", type: "Sport", hours: 15, date: "2026", 
            proofs: [
              { type: "image", label: "15km of Liège", url: "/proofs/me_liege_15km.jpeg" },
              { type: "image", label: "10km of Visé", url: "/proofs/vise_10km.jpeg" }
            ],
            context: "Participation in the 15km of Liège and the 10km of Visé races.",
            learnings: "Developing mental resilience, self-discipline, and physical endurance."
          }
        ]
      },
      {
        id: "t8",
        title: "Soft Skills",
        description: "Autonomy and manual skills.",
        activities: [
          {
            id: "a14", title: "Studio Renovation", type: "Project", hours: 100, date: "Summer 2025", 
            proofs: [{ type: "image", label: "Renovation Progress", url: "/proofs/renovation.jpg" }],
            context: "Complete refurbishment and modernization of a studio apartment.",
            learnings: "Project planning, budgeting, manual technical problem solving, and time management."
          }
        ]
      }
    ]
  },
  fr: {
    pageTitle: "Portfolio d'Acquisition de Compétences",
    pageDescription: "Explorez mon parcours. Rappel : un maximum de 10 heures est validé par thème pour le bachelier.",
    targetHoursLabel: "Objectif Scolaire",
    remainingLabel: "heures à valider",
    objectiveReached: "Objectif atteint ! 🎉",
    progressValidated: "Progression validée",
    realizedHours: "heures réalisées",
    validatedHours: "heures validées",
    frameworkTitle: "Cadre de l'activité",
    analysisTitle: "Analyse Réflexive & Apprentissages",
    proofLabel: "Preuves",
    backToHub: "← Retour au Hub",

    themes: [
      {
        id: "t1",
        title: "Cybersécurité & Challenges",
        description: "Compétitions et défis techniques dans le domaine de la sécurité.",
        activities: [
          {
            id: "a1", title: "CTF Ephec", type: "Hackathon", hours: 1, date: "13/05/2025", 
            proofs: [{ type: "link", label: "Attestation PDF", url: "/proofs/CTF_EPHEC.pdf" }],
            context: "Compétition de sécurité organisée au sein de l'école (web, réseau, crypto).",
            learnings: "Découverte de vulnérabilités réelles et initiation aux outils de hacking éthique."
          },
          {
            id: "a2", title: "CyberSecurity Challenge 2025", type: "Hackathon", hours: 4, date: "2025", 
            proofs: [{ type: "image", label: "Badge/Résultat CSC 2025", url: "/proofs/cyber_2025.png" }],
            context: "Compétition nationale belge pour étudiants, couvrant diverses catégories de sécurité.",
            learnings: "Pratique de la forensics, cryptanalyse et tests d'intrusion en environnement compétitif."
          },
          {
            id: "a3", title: "Cybersecurity Challenge 2026", type: "Hackathon", hours: 6, date: "2026", 
            proofs: [{ type: "image", label: "Inscription Cyber 2026", url: "/proofs/cyber_2026.png" }],
            context: "Participation avancée au challenge national pour affiner les compétences techniques défensives et offensives.",
            learnings: "Techniques avancées de forensics et collaboration d'équipe sous pression."
          }
        ]
      },
      {
        id: "t2",
        title: "Tutorat & Soutien Académique",
        description: "Accompagnement et coaching entre pairs au sein de la communauté EPHEC.",
        activities: [
          {
            id: "a15", 
            title: "Tutorat EPHEC", 
            type: "Coaching", 
            hours: 40, 
            date: "2024-2025", 
            proofs: [
              { type: "link", label: "Tutoring Certificate 2024", url: "/proofs/AttestationTutorat_2024.pdf" },
              { type: "link", label: "Tutoring Certificate 2025", url: "/proofs/AttestationTutorat_2025.pdf" }
            ],
            context: "Soutien scolaire aux étudiants de première année en difficulté dans des matières clés : Mathématiques, Réseaux et Anglais.",
            learnings: "Consolidation des bases techniques par l'enseignement, patience, et adaptation de la communication pour favoriser la réussite d'autrui."
          }
        ]
      },
      {
        id: "t3",
        title: "Jobs Étudiants IT",
        description: "Expériences professionnelles et coaching technique durant mes études.",
        activities: [
          {
            id: "a4", title: "Formateur IT @ Logiscool Wavre", type: "Job", hours: 200, date: "2023-2026", 
            proofs: [{ type: "image", label: "Heure réalisé", url: "/proofs/logiscool_etudiant.png" }],
            context: "Enseignement de la programmation (Python, Unity, Godot) aux enfants et adolescents.",
            learnings: "Développement des compétences pédagogiques et capacité à vulgariser des concepts techniques complexes."
          },
          {
            id: "a5", title: "Coach Stages IT @ Promosport", type: "Job", hours: 200, date: "2023-2025", 
            proofs: [{ type: "image", label: "Attestation de travail", url: "/proofs/stage_etudiant.png" }],
            context: "Animation d'ateliers et stages intensifs de robotique et game design à Louvain-la-Neuve.",
            learnings: "Gestion de groupes de jeunes, logistique technique d'événements et animation par projet."
          },
          {
            id: "a6", title: "Junior Internal System Engineer @ EASI", type: "Job", hours: 30, date: "05/2026-présent", 
            proofs: [{ type: "image", label: "Contrat Étudiant EASI", url: "/proofs/job-etudiant_easi.png" }],
            context: "Assistance à l'équipe IT interne d'EASI pour la gestion d'infrastructure, déploiements et support utilisateur.",
            learnings: "Immersion dans un environnement professionnel exigeant et maîtrise des outils d'administration système modernes."
          }
        ]
      },
      {
        id: "t4",
        title: "Projets Freelance & Clients",
        description: "Développement de solutions web professionnelles pour divers clients.",
        activities: [
          {
            id: "a7", title: "Kristel-art", type: "Projet", hours: 13, date: "2025", 
            proofs: [
              { type: "link", label: "Voir le site en ligne", url: "https://kristel-art.be" },
              { type: "github", label: "Voir le code source", url: "https://github.com/NathanColson/kristel_art" }
            ],
            context: "Développement de bout en bout d'une plateforme vitrine et de vente pour une artiste peintre.",
            learnings: "Développement Full-stack, optimisation SEO et gestion des besoins client de A à Z."
          },
          {
            id: "a8", title: "Cielpied", type: "Projet", hours: 15, date: "2026", 
            proofs: [
              { type: "link", label: "Voir le site en ligne", url: "https://cielpied.be" },
              { type: "github", label: "Voir le code source", url: "https://github.com/NathanColson/ciel-pied" }
            ],
            context: "Site web complet pour un salon de réflexologie incluant gestion de catalogue et visibilité en ligne.",
            learnings: "Design d'expérience utilisateur (UX) pour les services de santé et gestion de boutique sécurisée."
          },
          {
            id: "a9", title: "The Beauty Corner", type: "Projet", hours: 6, date: "En dév", 
            proofs: [
              { type: "github", label: "Dépôt GitHub (En dév)", url: "https://github.com/NathanColson/The-Beauty-Corner" }
            ],
            context: "Développement en cours d'un site moderne de prise de rendez-vous et vitrine pour un salon esthétique.",
            learnings: "Implémentation de systèmes d'agenda complexes et design d'interface responsive."
          }
        ]
      },
      {
        id: "t5",
        title: "Intelligence Artificielle",
        description: "Veille et formation sur les LLM et agents conversationnels.",
        activities: [
          {
            id: "a10", title: "Formation Smiling Face (Hugging Face)", type: "Formation", hours: 10, date: "2025", 
            proofs: [{ type: "image", label: "Certificat en ligne", url: "/proofs/LLM-Formation.webp" }],
            context: "Formation approfondie sur les Large Language Models (LLMs) et leur implémentation industrielle.",
            learnings: "Compréhension de l'architecture des IA modernes et usage éthique des outils génératifs."
          },
          {
            id: "a11", title: "Conférence IA à l'UCLouvain", type: "Conférence", hours: 3, date: "2026", 
            proofs: [
              { type: "image", label: "Salle de conférence", url: "/proofs/conferance.jpeg" },
              { type: "image", label: "Photo sur place", url: "/proofs/me_conferance.jpeg" }
            ],
            context: "Conférence d'experts à l'UCLouvain sur l'impact social et technique des IA conversationnelles.",
            learnings: "Analyse critique de l'intégration de l'IA dans le milieu professionnel et tendances futures."
          }
        ]
      },
      {
        id: "t6",
        title: "Immersion Pro & Conférences",
        description: "Exploration de l'écosystème IT, des cultures d'entreprise et séminaires techniques spécialisés.",
        activities: [
          {
            id: "a16", 
            title: "Visite d'entreprise chez Odoo", 
            type: "Immersion", 
            hours: 3, 
            date: "Été 2025", 
            proofs: [
              { type: "image", label: "Photo de visite / Invitation", url: "/proofs/viste_odoo.png" }
            ],
            context: "Visite privée des quartiers généraux d'Odoo (Les Fermes de Ramillies). Présentation de l'écosystème ERP et découverte de l'infrastructure et de la culture d'entreprise.",
            learnings: "Découverte du modèle de croissance d'un leader mondial du logiciel et de la gestion d'espaces de travail modernes."
          },
          {
            id: "a17", 
            title: "Conférence Cloud Microsoft & Azure", 
            type: "Conférence", 
            hours: 2, 
            date: "03/11/2025", 
            proofs: [
              { type: "image", label: "Preuve de participation", url: "/proofs/microsoft_conf.png" }
            ],
            context: "Conférence technique 'Cloud avec M365 et Azure Infrastructure' donnée par Kevin Keurvels (Axentys) à l'EPHEC.",
            learnings: "Approfondissement des connaissances sur les infrastructures hybrides Azure, la gestion de l'écosystème M365 et les services de support informatique pro."
          }
        ]
      },
      {
        id: "t7",
        title: "Sport & Esport",
        description: "Travail d'équipe et discipline personnelle via la compétition et la course.",
        activities: [
          {
            id: "a12", title: "LAN & Esport (LoL)", type: "Projet", hours: 20, date: "2024-2025", 
            proofs: [{ type: "image", label: "Photo de l'événement", url: "/proofs/lan_lol.jpeg" }],
            context: "Organisation et participation à des tournois League of Legends (Mons/Charleroi).",
            learnings: "Communication d'équipe, gestion technique d'événement et leadership stratégique sous pression."
          },
          {
            id: "a13", title: "Course à pied (Liège & Visé)", type: "Sport", hours: 15, date: "2026", 
            proofs: [
              { type: "image", label: "15km de Liège", url: "/proofs/me_liege_15km.jpeg" },
              { type: "image", label: "10km de Visé", url: "/proofs/vise_10km.jpeg" }
            ],
            context: "Participation officielle aux courses des 15km de Liège et des 10km de Visé.",
            learnings: "Développement de la résilience mentale, autodiscipline et endurance physique."
          }
        ]
      },
      {
        id: "t8",
        title: "Soft Skills",
        description: "Autonomie et compétences manuelles.",
        activities: [
          {
            id: "a14", title: "Rénovation de Studio", type: "Projet", hours: 100, date: "Été 2025", 
            proofs: [{ type: "image", label: "Suivi des travaux", url: "/proofs/renovation.jpg" }],
            context: "Rénovation complète et modernisation d'un studio (peinture, sol, électricité).",
            learnings: "Planification de projet, gestion de budget, résolution de problèmes techniques manuels et gestion du temps."
          }
        ]
      }
    ]
  }
};