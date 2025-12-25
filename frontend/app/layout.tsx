import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AIAssistant from "./components/AIAssistant";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brilligo — Learn • Build • Grow",
  description:
    "Brilligo is an all-in-one platform for learning, career growth, finance, freelancing, and AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100`}
      >
        <ThemeProvider>
          <UserProvider>
            {children}
            <AIAssistant />
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
