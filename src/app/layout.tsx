import type { Metadata, Viewport } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Anand",
  description:
    "I'm a UI developer exploring how advanced tech enhances design. I blend creativity and logic to craft intuitive, engaging interfaces.",
  creator: "Anand",
  metadataBase: new URL("https://anandhex.github.io"),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#2c3333" },
    { media: "(prefers-color-scheme: light)", color: "#2c3333" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const firebaseConfig = {
    apiKey: "AIzaSyDT8ynIROJl3AnZ_TQii-wN48QGkEcgGdc",
    authDomain: "contact-form-portfolio-20552.firebaseapp.com",
    projectId: "contact-form-portfolio-20552",
    storageBucket: "contact-form-portfolio-20552.firebasestorage.app",
    messagingSenderId: "768901717572",
    appId: "1:768901717572:web:73bc35d1e00e4077e3e611",
    measurementId: "G-8HLJYE7JDT",
  };
  const app = initializeApp(firebaseConfig);

  const analytics =
    app.name && typeof window !== "undefined" ? getAnalytics(app) : null;

  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
