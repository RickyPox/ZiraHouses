import type { Metadata } from "next";

import "./globals.css";

import FloatingButton from "@/components/floatingButton";

export const metadata: Metadata = {
    title: "Zira Houses",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
                <FloatingButton></FloatingButton>
            </body>
        </html>
    );
}
