import { Inter, IBM_Plex_Sans_Arabic } from 'next/font/google';
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '700'] });

export const metadata = {
  title: "KhalidBI",
  description: "Salam 👋",
  openGraph: {
    title: 'KhalidBI',
    description: 'مرحبًا بك',
    url: 'https://khalidbi.pro',
    images: [
      {
        url: '/home-og-image.png',
        width: 1200,
        height: 630,
        alt: 'salam banner'
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} ${ibmPlexSansArabic.className} flex min-h-screen flex-col items-center justify-between`}>
        <Header />
        <main className="flex-1 flex content-center items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
