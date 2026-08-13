import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { DolarBlueProvider } from "@/components/DolarBlueProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soluciones Online — Celulares al mejor precio",
  description:
    "Xiaomi, Motorola, iPhone y Samsung al mejor precio en Argentina. Venta minorista y mayorista, envíos a todo el país, atención inmediata.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <DolarBlueProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatWidget />
        </DolarBlueProvider>
      </body>
    </html>
  );
}
