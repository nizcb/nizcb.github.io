# Portfolio Nizar Choubik

Portfolio professionnel de Nizar Choubik, élève-ingénieur à l'ENSEIRB-MATMECA spécialisé en réseaux, cybersécurité et IoT.

## 🚀 Technologies utilisées

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Theme**: next-themes (mode sombre/clair)
- **Déploiement**: GitHub Pages

## 📦 Installation

1. Clonez le repository :
```bash
git clone https://github.com/nizarchoubik/portfolio.git
cd portfolio
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Structure du projet

```
├── app/                    # Pages Next.js App Router
├── components/            # Composants React réutilisables
│   ├── ui/               # Composants UI (shadcn/ui)
│   ├── hero.tsx          # Section Hero
│   ├── about.tsx         # Section À propos
│   ├── projects.tsx      # Section Projets
│   ├── education.tsx     # Section Formation
│   ├── experience.tsx    # Section Expérience
│   ├── skills.tsx        # Section Compétences
│   └── contact.tsx       # Section Contact
├── public/               # Assets statiques
│   └── assets/           # Images et autres fichiers
├── lib/                  # Utilitaires
└── .github/workflows/    # GitHub Actions
```

## 🎨 Personnalisation

### Couleurs
Le portfolio utilise une palette sobre avec :
- **Primary**: #0E76A8 (LinkedIn blue)
- **Secondary**: #14B8A6 (Teal)
- Mode sombre automatique basé sur les préférences système

### Contenu
Pour modifier le contenu :

1. **Informations personnelles** : Éditez les composants dans `/components/`
2. **Projets** : Modifiez le tableau `projects` dans `components/projects.tsx`
3. **Expérience** : Modifiez le tableau `experiences` dans `components/experience.tsx`
4. **Compétences** : Modifiez le tableau `skillCategories` dans `components/skills.tsx`

### Photo de profil
Remplacez le fichier `public/assets/headshot.jpg` par votre photo.

## 📧 Configuration du formulaire de contact

Le formulaire de contact est configuré pour utiliser Formspree. Pour l'activer :

1. Créez un compte sur [Formspree](https://formspree.io)
2. Créez un nouveau formulaire
3. Remplacez l'URL dans `components/contact.tsx` :
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ...
});
```

Alternatively, vous pouvez utiliser d'autres services comme :
- EmailJS
- Netlify Forms
- Votre propre API

## 🚀 Déploiement sur GitHub Pages

1. **Configurez GitHub Pages** :
   - Allez dans Settings > Pages de votre repository
   - Source : GitHub Actions

2. **Poussez votre code** :
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. **Le workflow GitHub Actions** se lancera automatiquement et déploiera votre site.

## 📱 Fonctionnalités

- ✅ Design responsive (mobile-first)
- ✅ Mode sombre/clair automatique
- ✅ Animations fluides avec Framer Motion
- ✅ Navigation avec scroll automatique
- ✅ Formulaire de contact avec validation
- ✅ SEO optimisé
- ✅ PWA ready
- ✅ Performance optimisée
- ✅ Accessibilité WCAG 2.1 AA

## 🛠️ Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build de production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et le modifier selon vos besoins.

## 📞 Contact

- **Email**: nchoubik@gmail.com
- **LinkedIn**: [linkedin.com/in/nizarcbk](https://www.linkedin.com/in/nizarcbk)
- **Portfolio**: [nizarchoubik.github.io](https://nizarchoubik.github.io)