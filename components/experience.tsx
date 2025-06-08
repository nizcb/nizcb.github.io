'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

const experienceData = {
  fr: [
    {
      period: '02/2025 – 08/2025',
      title: 'Cloud Security Research Intern',
      company: 'IRT SystemX',
      location: 'Palaiseau, France',
      description: 'Sécurisation d\'une plateforme de jumeaux numériques industriels (JNI1) en y déployant une architecture zero trust (ZTA) et évaluation des performances et scalabilité de la plateforme.',
      projectLink: 'https://www.irt-systemx.fr/projets/jni1-construction-assistee-et-outillee-des-jumeaux-numeriques-des-systemes-industriels-incluant-les-aspects-cybersecurity-by-design/',
      type: 'Stage en cours',
      technologies: ['Zero-Trust', 'Cloud Security', 'Digital Twins'],
    },
    {
      period: '06/2024 – 09/2024',
      title: 'Research Assistant – Cybersecurity',
      company: 'ETS Montréal',
      location: 'Montréal, Canada',
      description: 'Architected, designed, and deployed a 5G network infrastructure for V2X communications using srsRAN and OpenAirInterface (OAI). Integrated and optimized the LUCID (Lightweight Usable CNN in DDoS Detection) deep learning model to detect DDoS attacks. Developed xApps to mitigate attacks via resource management. – Internship funded by Mitacs Globalink.',
      publicationLink: 'https://ieeexplore.ieee.org/document/10757133',
      type: 'Stage',
      technologies: ['5G', 'V2X', 'Machine Learning', 'srsRAN', 'OpenAirInterface'],
    },
    {
      period: '06/2023 – 09/2023',
      title: 'Full-Stack Developer',
      company: 'Leoblue',
      location: 'Bordeaux, France',
      description: 'Contributed to the development of an iOS application for communication with low-Earth-orbit satellites, and created the company\'s website.',
      type: 'Stage',
      technologies: ['iOS', 'Satellite Communication', 'Web Development'],
    },
    {
      period: '01/2024 – présent',
      title: 'Tuteur en Mathématiques & Physique-Chimie',
      company: 'Région Nouvelle Aquitaine',
      location: 'Bordeaux, France',
      description: 'Tutorat pour les lycéens de la Région Nouvelle Aquitaine en collaboration avec la Mairie de Bordeaux. Développement de méthodes pédagogiques adaptées et suivi personnalisé.',
      type: 'Temps partiel',
      technologies: ['Pédagogie', 'Mathématiques', 'Physique'],
    },
  ],
  en: [
    {
      period: '02/2025 – 08/2025',
      title: 'Cloud Security Research Intern',
      company: 'IRT SystemX',
      location: 'Palaiseau, France',
      description: 'Securing an industrial digital twins platform (JNI1) by deploying a zero trust architecture (ZTA) and evaluating platform performance and scalability.',
      projectLink: 'https://www.irt-systemx.fr/projets/jni1-construction-assistee-et-outillee-des-jumeaux-numeriques-des-systemes-industriels-incluant-les-aspects-cybersecurity-by-design/',
      type: 'Ongoing internship',
      technologies: ['Zero-Trust', 'Cloud Security', 'Digital Twins'],
    },
    {
      period: '06/2024 – 09/2024',
      title: 'Research Assistant – Cybersecurity',
      company: 'ETS Montréal',
      location: 'Montréal, Canada',
      description: 'Architected, designed, and deployed a 5G network infrastructure for V2X communications using srsRAN and OpenAirInterface (OAI). Integrated and optimized the LUCID (Lightweight Usable CNN in DDoS Detection) deep learning model to detect DDoS attacks. Developed xApps to mitigate attacks via resource management. – Internship funded by Mitacs Globalink.',
      publicationLink: 'https://ieeexplore.ieee.org/document/10757133',
      type: 'Internship',
      technologies: ['5G', 'V2X', 'Machine Learning', 'srsRAN', 'OpenAirInterface'],
    },
    {
      period: '06/2023 – 09/2023',
      title: 'Full-Stack Developer',
      company: 'Leoblue',
      location: 'Bordeaux, France',
      description: 'Contributed to the development of an iOS application for communication with low-Earth-orbit satellites, and created the company\'s website.',
      type: 'Internship',
      technologies: ['iOS', 'Satellite Communication', 'Web Development'],
    },
    {
      period: '01/2024 – present',
      title: 'Mathematics & Physics-Chemistry Tutor',
      company: 'Nouvelle Aquitaine Region',
      location: 'Bordeaux, France',
      description: 'Tutoring for high school students in the Nouvelle Aquitaine Region in collaboration with the City of Bordeaux. Development of adapted pedagogical methods and personalized follow-up.',
      type: 'Part-time',
      technologies: ['Pedagogy', 'Mathematics', 'Physics'],
    },
  ]
};

export default function Experience() {
  const { language, t } = useLanguage();
  const experiences = experienceData[language];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {t.experience.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />

                {/* Content */}
                <div className="ml-16 bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex items-center gap-2 mb-2 sm:mb-0">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{experience.period}</span>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      experience.type === 'Stage en cours' || experience.type === 'Ongoing internship'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        : experience.type === 'Temps partiel' || experience.type === 'Part-time'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {experience.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    {experience.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-3">
                    <p className="text-primary font-medium">{experience.company}</p>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">{experience.description}</p>

                  {(experience.projectLink || experience.publicationLink) && (
                    <div className="flex gap-2 mb-4">
                      {experience.projectLink && (
                        <a
                          href={experience.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Projet JNI1
                        </a>
                      )}
                      {experience.publicationLink && (
                        <a
                          href={experience.publicationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {t.experience.publication}
                        </a>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}