import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteDescription =
  "Village360 is a growing movement of communities choosing collaborative, relationship-centered support before families reach crisis.";

export const metadata: Metadata = {
  title: {
    default: "Village360 — Join the Movement",
    template: "%s · Village360",
  },
  description: siteDescription,
  metadataBase: new URL("https://joinvillage360.com"),
  applicationName: "Village360",
  authors: [{ name: "Village360" }],
  creator: "Village360",
  publisher: "Village360",
  keywords: [
    "Village360",
    "foster care prevention",
    "community support",
    "family strengthening",
    "kinship care",
    "community collaboration",
    "joinvillage360",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joinvillage360.com",
    siteName: "Village360",
    title: "Village360 — Join the Movement",
    description: siteDescription,
    images: [
      {
        url: "/hero.jpg",
        width: 2400,
        height: 1260,
        alt: "Village360 — every family needs a village",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Village360 — Join the Movement",
    description: siteDescription,
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Village360",
  url: "https://joinvillage360.com",
  logo: "https://joinvillage360.com/logo.png",
  email: "hello@joinvillage360.com",
  description: siteDescription,
  founder: {
    "@type": "Person",
    name: "Kourtney Bolton",
    url: "https://kourtneylynn.com",
  },
  sameAs: [] as string[],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
