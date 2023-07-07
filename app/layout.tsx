import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({
    weight: ["900", "400", "300"],
    subsets: ["latin"],
    variable: "--font-primary",
});
export const metadata: Metadata = {
    title: "Talko - Waitlist",
    description: "Made by the Talko team.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={lato.className}>{children}</body>
        </html>
    );
}
