import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { LanguageProvider } from "@/context/language-context";
import { ThemeProvider } from "@/components/theme-provider"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Colson - Portfolio",
  description: "Nathan Colson - Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning> 
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* On enveloppe tout avec le LanguageProvider pour que la traduction marche partout */}
          <LanguageProvider>
            {/* On place le Header ici pour qu'il soit visible sur toutes les pages */}
            <Header />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}