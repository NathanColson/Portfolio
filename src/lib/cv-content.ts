// src/lib/cv-content.ts

export const cvContent = {
  en: {
    title: "Curriculum Vitae",
    downloadBtn: "Download PDF",
    cvFile: "/Colson-Nathan-CV-2025.pdf",
    contactTitle: "Contact Information",
    educationTitle: "Education",
    experienceTitle: "Professional Experience",
    skillsTitle: "Technical Skills",
    languagesTitle: "Languages",
    
    // Expériences (Ordre chronologique inverse)[cite: 10]
    experiences: [
      {
        date: "2026 - Present",
        role: "Junior Internal System Engineer",
        company: "Easi",
        description: "Managing internal systems, ensuring high availability and technical support for internal teams."
      },
      {
        date: "2026 (3 months)",
        role: "Internal System Engineer (Internship)",
        company: "Easi",
        description: "Internship focused on managing and optimizing internal infrastructure and systems, working with Microsoft Cloud solutions."
      },
      {
        date: "2024 - 2026",
        role: "IT Educator",
        company: "Logiscool",
        description: "Teaching children the basics of programming (Scratch, Python) and developing pedagogical skills."
      },
      {
        date: "2023",
        role: "IT Event Participant",
        company: "Odoo",
        description: "Hands-on IT challenges and collaboration with professionals during a tech weekend."
      }
    ],

    // Formations[cite: 10]
    education: [
      {
        date: "2023 - Present",
        degree: "Bachelor's Degree in Computer Technology",
        school: "EPHEC Louvain-la-Neuve",
        description: "Focus on networking, system administration, development, and electronics."
      },
      {
        date: "2021 - 2023",
        degree: "Bachelor's Degree in Management Engineering",
        school: "UCLouvain",
        description: "Completed two years before reorienting towards IT."
      }
    ],

    // Compétences regroupées[cite: 10]
    skillGroups: [
      {
        name: "Software Development",
        skills: "JavaScript, React, Tailwind CSS, Python, Django, SQL Oracle"
      },
      {
        name: "Systems & Cloud",
        skills: "Linux (Ubuntu, Debian), Docker, Microsoft Cloud"
      }
    ],

    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "B2" },
      { name: "Dutch", level: "B2" }
    ]
  },
  fr: {
    title: "Curriculum Vitae",
    downloadBtn: "Télécharger PDF",
    cvFile: "/Nathan-Colson-CV-Fr.pdf",
    contactTitle: "Coordonnées",
    educationTitle: "Formation",
    experienceTitle: "Expérience Professionnelle",
    skillsTitle: "Compétences Techniques",
    languagesTitle: "Langues",

    experiences: [
      {
        date: "2026 - Aujourd'hui",
        role: "Junior Internal System Engineer",
        company: "Easi",
        description: "Gestion des systèmes internes, garantie de la haute disponibilité et support technique pour les équipes."
      },
      {
        date: "2026 (3 mois)",
        role: "Internal System Engineer (Stage)",
        company: "Easi",
        description: "Stage concentré sur la gestion et l'optimisation des infrastructures, avec un focus sur les solutions Microsoft Cloud."
      },
      {
        date: "2024 - 2026",
        role: "Formateur IT",
        company: "Logiscool",
        description: "Enseignement des bases de la programmation (Scratch, Python) aux enfants et développement de compétences pédagogiques."
      },
      {
        date: "2023",
        role: "Participant Événement IT",
        company: "Odoo",
        description: "Défis techniques et collaboration avec des professionnels lors d'un week-end technologique."
      }
    ],

    education: [
      {
        date: "2023 - Présent",
        degree: "Bachelier en Technologies de l'Informatique",
        school: "EPHEC Louvain-la-Neuve",
        description: "Focus sur les réseaux, l'administration système, le développement et l'électronique."
      },
      {
        date: "2021 - 2023",
        degree: "Bachelier en Ingénieur de Gestion",
        school: "UCLouvain",
        description: "Deux années complétées avant réorientation vers l'informatique."
      }
    ],

    skillGroups: [
      {
        name: "Développement Logiciel",
        skills: "JavaScript, React, Tailwind CSS, Python, Django, SQL Oracle"
      },
      {
        name: "Systèmes & Cloud",
        skills: "Linux (Ubuntu, Debian), Docker, Microsoft Cloud"
      }
    ],

    languages: [
      { name: "Français", level: "Langue maternelle" },
      { name: "Anglais", level: "B2" },
      { name: "Néerlandais", level: "B2" }
    ]
  }
};