import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/contexts/language-context';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nizar Choubik - Élève-ingénieur Réseaux, Cybersécurité & IoT',
  description: 'Portfolio de Nizar Choubik, élève-ingénieur à l\'ENSEIRB-MATMECA spécialisé en réseaux, cybersécurité et IoT. Passionné par la cybersécurité, le cloud, la 5G/6G, l\'IA et la sécurité informatique.',
  keywords: ['Nizar Choubik', 'cybersécurité', 'réseaux', 'IoT', '5G', '6G', 'IA', 'machine learning', 'cloud'],
  authors: [{ name: 'Nizar Choubik' }],
  creator: 'Nizar Choubik',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://nizarchoubik.github.io',
    title: 'Nizar Choubik - Portfolio',
    description: 'Portfolio de Nizar Choubik, élève-ingénieur spécialisé en cybersécurité et réseaux',
    siteName: 'Nizar Choubik Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nizar Choubik - Portfolio',
    description: 'Élève-ingénieur Réseaux, Cybersécurité & IoT',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}