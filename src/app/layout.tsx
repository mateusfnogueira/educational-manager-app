import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { InstallProviders } from "@providers/install-providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Espaço Dança Rafaela Nogueira",
  description: "Developed by Mateus Nogueira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InstallProviders>
        {children}
        </InstallProviders>
        </body>
    </html>
  );
}
