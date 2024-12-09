import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import "@/app/_styles/globals.css";
import PageTransition from "./_components/PageTransition";
import StairTransition from "./_components/StairTransition";
import { Toaster } from "react-hot-toast";

const Josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Makha Diakhate | Web Developer",
  description:
    "Web development, UI/UX design, and SEO expertise by Makha Diakhate. Helping brands grow with custom solutions.",
  keywords:
    "web development, UI/UX design, SEO, frontend development, Makha Diakhate",
  openGraph: {
    title: "Makha Diakhate | Web Developer",
    description:
      "Explore web development services, UI/UX design, and SEO solutions by Makha Diakhate.",
    url: "https://makha.vercel.app/",
    siteName: "Makha Diakhate",
    images: [
      {
        url: "https://makha.vercel.app/og-image.jpg", // Replace with your own image
        width: 1200,
        height: 630,
        alt: "Makha Diakhate Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Makha Diakhate | Web Developer",
    description:
      "Professional web development and UI/UX design services by Makha Diakhate.",
    image: "https://www.makhadiakhate.com/twitter-card-image.jpg", // Replace with your own image
  },
  robots: "index, follow",
  author: "Makha Diakhate",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
