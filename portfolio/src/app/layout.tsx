import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import styles from "./styles.module.css";
import TitleChanger from "./components/TitleChanger";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <TitleChanger />
      </head>
      <body
        className={`${spaceGrotesk.className} ${styles.main} bg-white text-gray-900 relative pt-28 sm:pt-36`}
      >
        {/* Content wrapper */}
        <div className="relative max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
