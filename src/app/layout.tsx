import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Anurag — Front-End Developer",
  description: "Anurag is a front-end developer crafting thoughtful digital experiences, interfaces, and web applications.",
  applicationName: "Anurag Portfolio",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Anurag — Front-End Developer", description: "Digital experiences with precision and personality.", type: "website" },
};

export const viewport: Viewport = { themeColor: "#070314", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${plusJakarta.variable} ${inter.variable}`}>{children}</body></html>;
}
