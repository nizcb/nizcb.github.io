export const translations = {
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      education: 'Formation',
      experience: 'Expérience',
      skills: 'Compétences',
      contact: 'Contact'
    },
    
    // Hero
    hero: {
      title: 'Élève-ingénieur Réseaux, Cybersécurité & IoT',
      subtitle: 'Orienté R&D • Passionné par la cybersécurité, le cloud, les réseaux mobiles de nouvelle génération et l\'intelligence artificielle',
      contactBtn: 'Me contacter',
      scrollText: 'Découvrir mon parcours'
    },
    
    // About
    about: {
      title: 'À propos de moi',
      description: 'Élève-ingénieur à l\'ENSEIRB-MATMECA, spécialisé en réseaux, cybersécurité & IoT. Passionné par la cybersécurité, le cloud, les réseaux mobiles de nouvelle génération (5G/6G), l\'intelligence artificielle et la sécurité informatique.',
      description2: 'Fortement orienté R&D, j\'aime transformer la recherche en solutions concrètes et reste ouvert à toute collaboration pour repousser les limites de la technologie.',
      interests: 'Domaines d\'intérêt',
      interestsList: ['Cloud', '5G/6G', 'IA/ML', 'Cybersécurité', 'DevSecOps']
    },
    
    // Projects
    projects: {
      title: 'Mes Projets',
      subtitle: 'Une sélection de projets menés durant ma formation d\'ingénieur (merci de me contacter pour discuter plus en détails de ces projets et d\'autres non listés ici)',
      viewPost: 'Voir le post'
    },
    
    // Education
    education: {
      title: 'Formation',
      ongoing: 'En cours',
      completed: 'Complété'
    },
    
    // Experience
    experience: {
      title: 'Expérience Professionnelle',
      ongoing: 'Stage en cours',
      internship: 'Stage',
      partTime: 'Temps partiel',
      publication: 'Publication scientifique'
    },
    
    // Skills
    skills: {
      title: 'Compétences Techniques',
      categories: {
        networks: 'Réseaux mobiles',
        programming: 'Langages de programmation',
        security: 'Cybersécurité',
        ai: 'IA & Machine Learning',
        cloud: 'Cloud & DevOps'
      }
    },
    
    // Contact
    contact: {
      title: 'Me Contacter',
      subtitle: 'Intéressé par une collaboration ? Une opportunité ? N\'hésitez pas à me contacter !',
      form: {
        title: 'Envoyez-moi un message',
        subtitle: 'Remplissez le formulaire ci-dessous et je vous répondrai rapidement.',
        name: 'Nom complet',
        namePlaceholder: 'Votre nom',
        email: 'Email',
        emailPlaceholder: 'votre.email@exemple.com',
        subject: 'Sujet',
        subjectPlaceholder: 'Sujet de votre message',
        message: 'Message',
        messagePlaceholder: 'Votre message...',
        send: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès !',
        successDesc: 'Je vous répondrai dans les plus brefs délais.',
        error: 'Erreur lors de l\'envoi',
        errorDesc: 'Veuillez réessayer ou me contacter directement par LinkedIn.'
      },
      validation: {
        nameMin: 'Le nom doit contenir au moins 2 caractères',
        emailInvalid: 'Adresse email invalide',
        subjectMin: 'Le sujet doit contenir au moins 5 caractères',
        messageMin: 'Le message doit contenir au moins 10 caractères'
      }
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact'
    },
    
    // Hero
    hero: {
      title: 'Engineering Student in Networks, Cybersecurity & IoT',
      subtitle: 'R&D-oriented • Passionate about cybersecurity, cloud, next-generation mobile networks and artificial intelligence',
      contactBtn: 'Contact me',
      scrollText: 'Discover my journey'
    },
    
    // About
    about: {
      title: 'About me',
      description: 'Engineering student at ENSEIRB-MATMECA, specialized in networks, cybersecurity & IoT. Passionate about cybersecurity, cloud, next-generation mobile networks (5G/6G), artificial intelligence and information security.',
      description2: 'Strongly R&D-oriented, I enjoy transforming research into concrete solutions and remain open to any collaboration to push the boundaries of technology.',
      interests: 'Areas of interest',
      interestsList: ['Cloud', '5G/6G', 'AI/ML', 'Cybersecurity', 'DevSecOps']
    },
    
    // Projects
    projects: {
      title: 'My Projects',
      subtitle: 'A selection of projects carried out during my engineering studies (please contact me to discuss these projects and others not listed here in more detail)',
      viewPost: 'View post'
    },
    
    // Education
    education: {
      title: 'Education',
      ongoing: 'Ongoing',
      completed: 'Completed'
    },
    
    // Experience
    experience: {
      title: 'Professional Experience',
      ongoing: 'Ongoing internship',
      internship: 'Internship',
      partTime: 'Part-time',
      publication: 'Scientific publication'
    },
    
    // Skills
    skills: {
      title: 'Technical Skills',
      categories: {
        networks: 'Mobile networks',
        programming: 'Programming languages',
        security: 'Cybersecurity',
        ai: 'AI & Machine Learning',
        cloud: 'Cloud & DevOps'
      }
    },
    
    // Contact
    contact: {
      title: 'Contact Me',
      subtitle: 'Interested in a collaboration? An opportunity? Feel free to contact me!',
      form: {
        title: 'Send me a message',
        subtitle: 'Fill out the form below and I will respond quickly.',
        name: 'Full name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your.email@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'Subject of your message',
        message: 'Message',
        messagePlaceholder: 'Your message...',
        send: 'Send message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        successDesc: 'I will respond as soon as possible.',
        error: 'Error sending message',
        errorDesc: 'Please try again or contact me directly via LinkedIn.'
      },
      validation: {
        nameMin: 'Name must contain at least 2 characters',
        emailInvalid: 'Invalid email address',
        subjectMin: 'Subject must contain at least 5 characters',
        messageMin: 'Message must contain at least 10 characters'
      }
    }
  }
};

export type Language = 'fr' | 'en';
export type TranslationKey = keyof typeof translations.fr;