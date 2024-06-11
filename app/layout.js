import { Inter, IBM_Plex_Sans_Arabic } from 'next/font/google';
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '700'] });

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} ${ibmPlexSansArabic.className} flex min-h-screen flex-col items-center justify-between`}>
        <Header/>
        <main className="flex-1 flex content-center items-center">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
