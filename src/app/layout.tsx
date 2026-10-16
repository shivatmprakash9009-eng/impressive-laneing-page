import type { Metadata, Viewport } from "next";
import { DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const dmMono = DM_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-dm-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Anurag — Front-End Developer",
  description: "Anurag is a front-end developer crafting thoughtful digital experiences, interfaces, and web applications.",
  applicationName: "Anurag Portfolio",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Anurag — Front-End Developer", description: "Digital experiences with precision and personality.", type: "website" },
};

export const viewport: Viewport = { themeColor: "#070314", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${plusJakarta.variable} ${dmMono.variable}`}>{children}</body></html>;
}
