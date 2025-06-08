'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Cloud, Zap, Brain, Shield, Cog } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

const interestIcons = [Cloud, Zap, Brain, Shield, Cog];

export default function About() {
  const { t } = useLanguage();

  const interests = t.about.interestsList.map((interest, index) => ({
    name: interest,
    icon: interestIcons[index]
  }));

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
            {t.about.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-8 shadow-lg border border-border mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t.about.description}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{t.about.description2.split(',')[0]}</strong>
              {t.about.description2.substring(t.about.description2.indexOf(','))}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              {t.about.interests}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Badge 
                    variant="secondary" 
                    className="px-6 py-3 text-base font-medium bg-background border-2 border-border hover:border-primary transition-all duration-300 cursor-default"
                  >
                    <interest.icon className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                    {interest.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}