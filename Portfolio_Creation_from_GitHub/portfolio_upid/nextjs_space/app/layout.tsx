
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Up iD - Up Inteligência Digital | Growth Marketing & Transformação Digital',
  description: 'Especialistas em Growth Marketing e Transformação Digital. 30+ empresas atendidas, 8+ segmentos, resultados comprovados em consultoria empresarial e implementação de sistemas.',
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Up iD - Up Inteligência Digital',
    description: 'Transformação Digital e Growth Marketing para seu negócio',
    url: '/',
    siteName: 'Up iD - Up Inteligência Digital',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Up iD - Up Inteligência Digital',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Up iD - Up Inteligência Digital',
    description: 'Transformação Digital e Growth Marketing para seu negócio',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} font-poppins antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
