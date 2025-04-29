import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

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
        <script id="aclib" type="text/javascript" src="//acscdn.com/script/aclib.js"></script>
        <Script
          id="aclib-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              aclib.runAutoTag({
                zoneId: '4u7qqvaiw',
              });
            `
          }}
        />
        <Script id="custom-external-script" strategy="afterInteractive">
          {`
            (function(skvp){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = skvp || {};
              s.src = "//trainedbus.com/blX/VpsPd.GPlG0HYSW-cX/Rexmx9/ueZYUEltkJPcTMYTzCM/DVQv2HN/jGIVtXNJj/MiwdNsDFYl2TMrwf";
              s.async = true;
              s.referrerPolicy = 'no-referrer-when-downgrade';
              l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
        <Script id="popunder-script" strategy="beforeInteractive">
          {`
            (function(dbmep){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = dbmep || {};
              s.src = "//ruralhistorian.com/c.D/9/6VbG2J5tlFSBW/QD9INBj/MZwENZDdYSxkOMCr0g2zMozyA/0MNIjnEf5J";
              s.async = true;
              s.referrerPolicy = 'no-referrer-when-downgrade';
              l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
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
