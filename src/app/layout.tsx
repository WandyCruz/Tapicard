import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tapicard - Tapizado Automotriz en San Francisco RD",
  description:
    "Tapicard ofrece servicios profesionales de tapizado automotriz en San Francisco RD. Calidad y compromiso garantizados para tu vehículo.",
  keywords: [
    "tapizado automotriz",
    "tapicería vehículos",
    "restauración autos",
    "San Francisco RD",
  ],
  authors: [{ name: "Tapicard" }],
  openGraph: {
    title: "Tapicard - Tapizado Automotriz en San Francisco RD",
    description:
      "Calidad y compromiso en servicios de tapizado automotriz para San Francisco RD. Contáctanos al 809 637 3335.",
    url: "https://tapicard.com",
    siteName: "Tapicard",
    images: [
      {
        url: "https://tapicard.com/preview-image.jpg",
        width: 800,
        height: 600,
        alt: "Tapicard - Tapizado Automotriz",
      },
    ],
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tapicard - Tapizado Automotriz en San Francisco RD",
    description:
      "Servicios profesionales de tapizado automotriz con calidad y compromiso. Llámanos: 809 637 3335.",
    images: ["https://tapicard.com/preview-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <html lang="es">
        <body>{children}</body>
      </html>
    </>
  );
}
