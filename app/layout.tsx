import type { Metadata } from "next";
import { motion } from "framer-motion";
import "./globals.css";

import FloatingButton from "@/components/floatingButton";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
                <Navbar></Navbar>
                {children}
                <FloatingButton></FloatingButton>
                <Footer></Footer>
            </body>
        </html>
    );
}
