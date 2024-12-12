"use client";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import "@/app/_styles/globals.css";
import PageTransition from "./_components/PageTransition";
import StairTransition from "./_components/StairTransition";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

const Josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

const pageTitles = {
  "/": "Home - Welcome to My Website",
  "/services": "Services",
  "/resume": "Resume",
  "/projects": "Projects",
  "/contact": "Get in Touch",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const formattedPath =
    pathname === "/" ? pathname : `/${pathname.replace(/^\/+/, "")}`;

  const dynamicTitle = pageTitles[formattedPath]
    ? `Makha Diakhate | ${pageTitles[formattedPath]}`
    : "Makha Diakhate | Web Developer";

  const dynamicDescription =
    "Explore professional web development, UI/UX design, and SEO solutions with Makha Diakhate.";

  useEffect(() => {
    document.title = dynamicTitle;
  }, [dynamicTitle]);

  return (
    <html lang="en">
      <Head>
        <title>{dynamicTitle}</title>
        <meta name="description" content={dynamicDescription} />
        <meta
          name="keywords"
          content="web development, UI/UX design, SEO, frontend development, Makha Diakhate"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Makha Diakhate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={dynamicTitle} />
        <meta property="og:description" content={dynamicDescription} />
        <meta property="og:url" content="https://makha.vercel.app/" />
        <meta property="og:site_name" content="Makha Diakhate" />
        <meta
          property="og:image"
          content="https://makha.vercel.app/og-image.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={dynamicTitle} />
        <meta name="twitter:description" content={dynamicDescription} />
        <meta
          name="twitter:image"
          content="https://makha.vercel.app/og-image.jpg"
        />

        {/* SEO Meta Tag: JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Makha Diakhate",
            url: "https://makha.vercel.app/",
            description: dynamicDescription,
            author: {
              "@type": "Person",
              name: "Makha Diakhate",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://makha.vercel.app/?q={search_term}",
              "query-input": "required name=search_term",
            },
          })}
        </script>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* Google Tag Manager Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-F2MBJF124J"
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F2MBJF124J');
        `}
      </Script>

      <body
        className={`${Josefin.className} h-screen bg-primary-950 text-primary-100 flex flex-col antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransition className="w-full">{children}</PageTransition>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 5000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500",
              padding: "16px 24px",
              backgroundColor: "#C69963",
              color: "#141C24",
            },
          }}
        />
      </body>
    </html>
  );
}
