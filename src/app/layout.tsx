'use client'
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";
import { Analytics } from "@vercel/analytics/next"
import NextTopLoader from "nextjs-toploader";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta name="author" content="Anime Group India" />
        <meta property="og:title" content="Summer Anime Fiesta 2025" />
        <meta property="og:description" content="Celebrate anime culture in Delhi this summer — cosplay, screenings, food, friends, and fun. Limited seats, register now!" />
        <meta property="og:image" content="/static/og-image.png" />
        <meta property="og:url" content="/static/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={roboto.className + ' '}>
        <NextTopLoader color="#2299DD"
 initialPosition={0.08}
 crawlSpeed={200}
 height={3}
 crawl={true}
 showSpinner={true}
 easing="ease"
 speed={200}
 shadow="0 0 10px #2299DD,0 0 5px #2299DD" />
        <Analytics />
          <Layout>
            {children}
          </Layout>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
