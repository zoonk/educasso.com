import { LanguageParams } from "@/types";
import type { Metadata, Viewport } from "next";
import colors from "tailwindcss/colors";

import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlausibleProvider from "next-plausible";

type RootLayoutProps = {
  children: React.ReactNode;
  params: LanguageParams;
};

export const viewport: Viewport = {
  themeColor: colors.teal[400],
  colorScheme: "light",
};

export const metadata: Metadata = {
  manifest: "/site.webmanifest",
  category: "education",
  metadataBase: new URL("https://educasso.com"),
};

export async function generateStaticParams(): Promise<LanguageParams[]> {
  return [{ lang: "en" }, { lang: "pt" }];
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html
      lang={params.lang}
      className="h-full scroll-smooth bg-white antialiased"
    >
      <head>
        <PlausibleProvider domain="educasso.com" />
      </head>

      <body className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <Header locale={params.lang} />
        {children}
        <Footer locale={params.lang} />
      </body>
    </html>
  );
}
