import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const robo = Roboto({
    weight: ["400", "500", "700", "900"],
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Pokemon",
    description: "Gotta catch em all",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${robo.className} antialiased`}>
        <ThemeProvider attribute="class"
                       defaultTheme="system"
                       enableSystem
                       disableTransitionOnChange>
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}
