import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Gerenciador de contatos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-emerald-100" >{children}</body>
    </html>
  );
}