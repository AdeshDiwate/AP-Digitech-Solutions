import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.apdigitechsolutions.in";
const SITE_NAME = "AP Digitech Solutions";
const SITE_TITLE = "AP Digitech Solutions | Custom Software & Digital Solutions";
const SITE_DESCRIPTION =
  "AP Digitech Solutions builds modern websites, scalable software systems, AI-powered solutions, and end-to-end digital experiences for ambitious businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | AP Digitech Solutions",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "AP Digitech Solutions",
    "Custom Software Development",
    "Website Development",
    "AI Solutions",
    "UI/UX Design",
    "Digital Product Development",
    "Scalable Business Systems",
    "Software Company India",
    "Web Development Agency",
    "Product Engineering",
  ],
  authors: [{ name: "AP Digitech Solutions", url: SITE_URL }],
  creator: "AP Digitech Solutions",
  publisher: "AP Digitech Solutions",
  category: "Technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AP Digitech Solutions — Custom Software & Digital Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@APDigitechSolutions",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "AP Digitech Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/Raveblue-logo.jpg`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "AP Digitech Solutions is a custom software and digital solutions company building websites, AI-powered products, and scalable digital systems for modern businesses.",
  foundingDate: "2024",
  slogan: "Engineering ambitious digital products.",
  sameAs: [
    "https://www.linkedin.com/company/apdigitechsolutions",

  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hr@apdigitechsolutions.in",
      url: `${SITE_URL}/#contact`,
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: `${SITE_URL}/Raveblue-logo.jpg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
