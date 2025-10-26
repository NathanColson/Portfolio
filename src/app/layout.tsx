import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { LanguageProvider } from "@/context/language-context";
// 1. Importer le nouveau ThemeProvider
import { ThemeProvider } from "@/components/theme-provider"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio de Nathan",
  description: "Mon portfolio de développeur Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 'suppressHydrationWarning' est important pour next-themes
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        {/* 2. Enrouler TOUT avec le ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header />
            <main>{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}