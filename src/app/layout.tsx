import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: {
    default: "Northstar Academy | Discover Your Potential",
    template: "%s | Northstar Academy",
  },
  description:
    "An inspiring learning community where curiosity grows, potential is discovered, and tomorrow's leaders are prepared.",
  keywords: [
    "Northstar Academy",
    "school",
    "education",
    "academics",
    "admissions",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f3ed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}