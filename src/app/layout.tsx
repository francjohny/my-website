import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import styles from "./styles.module.css";
import TitleChanger from "./components/TitleChanger";
import { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francis Johny",
  description:
    "Francis Johny is Chief Algorithmist at BCG and Co-Founder & CTO of Vyfrakens. He blends deep technical expertise with strategic insight to drive impactful, scalable tech solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${spaceGrotesk.className} ${styles.main} bg-white text-gray-900 relative pt-28 sm:pt-36`}
      >
        <TitleChanger />
        {/* Content wrapper */}
        <div className="relative max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
