"use client";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import "@/app/_styles/globals.css";
import PageTransition from "./_components/PageTransition";
import StairTransition from "./_components/StairTransition";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

const Josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

const pageTitles = {
  "/": "Home - Welcome to My Website",
  "/services": "Services - Explore Our Services",
  "/resume": "Resume - My Professional Journey",
  "/projects": "Projects - Explore My Work",
  "/contact": "Contact - Get in Touch",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const dynamicTitle = pageTitles[pathname] || "Makha Diakhate | Web Developer";

  return (
    <html lang="en">
      <head>
        <title>{dynamicTitle}</title>
        <meta
          name="description"
          content="Web development, UI/UX design, and SEO expertise by Makha Diakhate. Helping brands grow with custom solutions."
        />
        <meta
          name="keywords"
          content="web development, UI/UX design, SEO, frontend development, Makha Diakhate"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Makha Diakhate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph */}
        <meta property="og:title" content="Makha Diakhate | Web Developer" />
        <meta
          property="og:description"
          content="Explore web development services, UI/UX design, and SEO solutions by Makha Diakhate."
        />
        <meta property="og:url" content="https://makha.vercel.app/" />
        <meta property="og:site_name" content="Makha Diakhate" />
        <meta
          property="og:image"
          content="https://makha.vercel.app/og-image.jpg"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Makha Diakhate | Web Developer" />
        <meta
          name="twitter:description"
          content="Professional web development and UI/UX design services by Makha Diakhate."
        />
        <meta
          name="twitter:image"
          content="https://www.makhadiakhate.com/twitter-card-image.jpg"
        />
      </head>
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
