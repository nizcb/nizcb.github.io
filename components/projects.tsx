'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';

const projectsData = {
  fr: [
    {
      title: 'Blockchain-Secured Federated Learning System',
      description: 'Système de federated learning sécurisé par blockchain pour préserver la confidentialité des données tout en permettant l\'entraînement collaboratif de modèles IA.',
      technologies: ['Solidity', 'Web3', 'Federated Learning', 'Docker', 'Chainlink'],
      featured: false,
    },
    {
      title: 'IdentityGuard',
      description: 'Solution de vérification d\'identité basée sur la cryptographie zero-knowledge, permettant une authentification sécurisée sans révéler d\'informations personnelles.',
      technologies: ['ZoKrates', 'Docker-compose', 'Node.js', 'SSL', 'Blockchain'],
      linkedinPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7197552631530029056/',
      award: 'Thales Jury Prize',
      featured: true,
    },
    {
      title: 'Malware Detection System',
      description: 'Système de détection de malware utilisant des techniques d\'apprentissage automatique avancées pour identifier les menaces en temps réel.',
      technologies: ['XGBoost', 'Keras', 'Scikit-Learn', 'PyTorch'],
      featured: false,
    },
    {
      title: '5G-V2X DDoS Detection & Mitigation xApps',
      description: 'Applications xApps pour la détection et l\'atténuation des attaques DDoS dans les réseaux 5G Vehicle-to-Everything (V2X).',
      technologies: ['srsRAN', 'OpenAirInterface', 'CNN', 'C', 'Python'],
      featured: true,
    },
    {
      title: 'C-Chat',
      description: 'Application de messagerie développée en C avec sockets TCP/IP, gestion multi-clients et partage de fichiers entre clients.',
      technologies: ['C', 'TCP/IP', 'Sockets', 'Multi-threading', 'File Sharing'],
      featured: false,
    },
  ],
  en: [
    {
      title: 'Blockchain-Secured Federated Learning System',
      description: 'Blockchain-secured federated learning system to preserve data confidentiality while enabling collaborative AI model training.',
      technologies: ['Solidity', 'Web3', 'Federated Learning', 'Docker', 'Chainlink'],
      featured: false,
    },
    {
      title: 'IdentityGuard',
      description: 'Identity verification solution based on zero-knowledge cryptography, enabling secure authentication without revealing personal information.',
      technologies: ['ZoKrates', 'Docker-compose', 'Node.js', 'SSL', 'Blockchain'],
      linkedinPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7197552631530029056/',
      award: 'Thales Jury Prize',
      featured: true,
    },
    {
      title: 'Malware Detection System',
      description: 'Malware detection system using advanced machine learning techniques to identify threats in real-time.',
      technologies: ['XGBoost', 'Keras', 'Scikit-Learn', 'PyTorch'],
      featured: false,
    },
    {
      title: '5G-V2X DDoS Detection & Mitigation xApps',
      description: 'xApps applications for detecting and mitigating DDoS attacks in 5G Vehicle-to-Everything (V2X) networks.',
      technologies: ['srsRAN', 'OpenAirInterface', 'CNN', 'C', 'Python'],
      featured: true,
    },
    {
      title: 'C-Chat',
      description: 'Messaging application developed in C with TCP/IP sockets, multi-client management and file sharing between clients.',
      technologies: ['C', 'TCP/IP', 'Sockets', 'Multi-threading', 'File Sharing'],
      featured: false,
    },
  ]
};

export default function Projects() {
  const { language, t } = useLanguage();
  const projects = projectsData[language];

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
            {t.projects.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="h-full bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold text-foreground line-clamp-2">
                      {project.title}
                    </CardTitle>
                    {project.award && (
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 flex items-center gap-1 shrink-0 ml-2">
                        <Award className="w-3 h-3" />
                        {project.award}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {project.linkedinPost && (
                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <a
                          href={project.linkedinPost}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t.projects.viewPost}
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}