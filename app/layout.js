import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Removed TypeScript type annotations
export const metadata = {
  title: "Naijaleakhub",
  description: "Best leaked video platform",
  icons: {
    icon: '/Favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          src="//stoolsymphony.com/9f/3a/db/9f3adb53ae9324b611de693d6bf93ffa.js"
          async
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-P2H5LD1362" />
      </body>
    </html>
  );
}
