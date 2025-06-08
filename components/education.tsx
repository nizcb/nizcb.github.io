'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

const educationData = {
  fr: [
    {
      period: '2022-2025',
      title: 'Cycle ingénieur Télécommunications, Réseaux, Sécurité & IoT',
      institution: 'ENSEIRB-MATMECA (Bordeaux-INP)',
      description: 'Formation d\'ingénieur spécialisée en réseaux, cybersécurité et IoT.',
      link: 'https://enseirb-matmeca.bordeaux-inp.fr/fr',
      status: 'En cours',
    },
    {
      period: '2020-2022',
      title: 'Classes préparatoires MPSI-MP',
      institution: 'Lycée Moulay Youssef, Rabat, Maroc',
      description: 'Formation intensive en mathématiques et physique, développement de méthodes de travail rigoureuses et de capacités d\'analyse.',
      status: 'Complété',
    },
    {
      period: '2019-2020',
      title: 'Baccalauréat Sciences Mathématiques',
      institution: 'Lycée CSKA, Salé',
      description: 'Option Sciences de l\'ingénieur, Baccalauréat international option Français. Mention Très Bien.',
      status: 'Complété',
    },
  ],
  en: [
    {
      period: '2022-2025',
      title: 'Engineering Degree in Telecommunications, Networks, Security & IoT',
      institution: 'ENSEIRB-MATMECA (Bordeaux-INP)',
      description: 'Engineering program specialized in networks, cybersecurity and IoT.',
      link: 'https://enseirb-matmeca.bordeaux-inp.fr/fr',
      status: 'Ongoing',
    },
    {
      period: '2020-2022',
      title: 'Preparatory Classes MPSI-MP',
      institution: 'Lycée Moulay Youssef, Rabat, Morocco',
      description: 'Intensive training in mathematics and physics, development of rigorous work methods and analytical skills.',
      status: 'Completed',
    },
    {
      period: '2019-2020',
      title: 'Mathematical Sciences Baccalaureate',
      institution: 'Lycée CSKA, Salé',
      description: 'Engineering Sciences option, International Baccalaureate French option. Highest honors.',
      status: 'Completed',
    },
  ]
};

export default function Education() {
  const { language, t } = useLanguage();
  const educationItems = educationData[language];

  return (
    <div className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {t.education.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

            {educationItems.map((item, index) => (
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
                      <span className="text-sm font-medium text-primary">{item.period}</span>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'En cours' || item.status === 'Ongoing'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-primary font-medium">{item.institution}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}