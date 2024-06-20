import type { Metadata } from "next";
import { Inter, Vazirmatn, Open_Sans } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const vazir = Vazirmatn({
  subsets: ["arabic"],
});
const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jobinja",
  description: "rebuilding jobinja website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={vazir.className}>{children}</body>
    </html>
  );
}
