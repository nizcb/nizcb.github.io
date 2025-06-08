'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { 
  Radio, 
  Code, 
  Shield, 
  Brain, 
  Cloud
} from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

const skillsData = {
  fr: [
    {
      title: 'Réseaux mobiles',
      icon: Radio,
      skills: ['RAN 5G/6G', 'O-RAN', 'srsRAN', 'OpenAirInterface', 'V2X', 'Network Slicing'],
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    },
    {
      title: 'Langages de programmation',
      icon: Code,
      skills: ['Python', 'C/C++', 'JavaScript/TypeScript', 'Java', 'Solidity'],
      color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    },
    {
      title: 'Cybersécurité',
      icon: Shield,
      skills: ['IAM', 'Cryptographie', 'Zero-Trust', 'Sécurité réseaux', 'Blockchain', 'ZK-proofs'],
      color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    },
    {
      title: 'IA & Machine Learning',
      icon: Brain,
      skills: ['CNN', 'XGBoost', 'PyTorch', 'Scikit-Learn', 'Keras', 'Federated Learning', 'Reinforcement Learning'],
      color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD'],
      color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
    },
  ],
  en: [
    {
      title: 'Mobile networks',
      icon: Radio,
      skills: ['RAN 5G/6G', 'O-RAN', 'srsRAN', 'OpenAirInterface', 'V2X', 'Network Slicing'],
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    },
    {
      title: 'Programming languages',
      icon: Code,
      skills: ['Python', 'C/C++', 'JavaScript/TypeScript', 'Java', 'Solidity'],
      color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      skills: ['IAM', 'Cryptography', 'Zero-Trust', 'Network Security', 'Blockchain', 'ZK-proofs'],
      color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['CNN', 'XGBoost', 'PyTorch', 'Scikit-Learn', 'Keras', 'Federated Learning', 'Reinforcement Learning'],
      color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD'],
      color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
    },
  ]
};

export default function Skills() {
  const { language, t } = useLanguage();
  const skillCategories = skillsData[language];

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
            {t.skills.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      className={`${category.color} w-full justify-center py-2 text-sm font-medium hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}