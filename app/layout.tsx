import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


import {Source_Sans_3} from 'next/font/google'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-source-sans',
})

import {Alegreya} from 'next/font/google'

const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-alegreya',
})


export const metadata: Metadata = {
  title: "Buena Buena, Creatividad Orgánica",
  description: "Buena Buena es un colectivo de creativos que valoran el trabajo honesto y la colaboración real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sourceSans.variable} ${alegreya.variable} font-normal`}>
        {children}
      </body>
    </html>
  );
}


