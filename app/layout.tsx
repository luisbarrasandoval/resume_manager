import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnalizaMiCV - Optimiza tu Currículum con IA",
  description: "AnalizaMiCV te ayuda a optimizar tu currículum, identificando fortalezas y áreas de mejora. Sube tu CV y recibe un análisis detallado para destacar en el mercado laboral. Potencia tus oportunidades de empleo hoy mismo.",
  keywords: "optimización de CV, análisis de currículum, inteligencia artificial, oportunidades de empleo, mejorar CV, fortalezas de currículum, áreas de mejora, mercado laboral",
  authors: [{
    name:"Luis Barra Sandoval",
    url:"http://luisbarra.cl"
  }],
  openGraph: {
    title: "AnalizaMiCV - Optimiza tu Currículum con IA",
    description: "Sube tu CV y recibe un análisis detallado para destacar en el mercado laboral. Potencia tus oportunidades de empleo hoy mismo.",
    url: "https://cv.luisbarra.cl",
    type: "website",
    images: [
      {
        url: "https://www.cv.luisbarra.cl/og-image.jpg",
        width: 800,
        height: 600,
        alt: "AnalizaMiCV - Optimiza tu Currículum con IA"
      }
    ]
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
