import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KCut.in - Professional URL Shortener | Free Link Shortening Service',
  description: 'Transform long URLs into short, professional links. Fast, secure, and reliable URL shortener with custom slugs, analytics, and enterprise-grade performance. Trusted by thousands worldwide.',
  keywords: 'URL shortener, link shortener, short links, custom URLs, link management, QR codes, analytics, branded links',
  authors: [{ name: 'KCut.in Team' }],
  creator: 'KCut.in',
  publisher: 'KCut.in',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kcut.in',
    siteName: 'KCut.in',
    title: 'KCut.in - Professional URL Shortener',
    description: 'Transform long URLs into short, professional links. Fast, secure, and reliable URL shortener with custom slugs and analytics.',
    images: [
      {
        url: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'KCut.in URL Shortener',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KCut.in - Professional URL Shortener',
    description: 'Transform long URLs into short, professional links. Fast, secure, and reliable.',
    images: ['https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://kcut.in',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "KCut.in",
              "description": "Professional URL shortener service",
              "url": "https://kcut.in",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "KCut.in"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-right" />
        <noscript>
          <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f3f4f6' }}>
            This application requires JavaScript to function properly. Please enable JavaScript in your browser.
          </div>
        </noscript>
      </body>
    </html>
  );
}