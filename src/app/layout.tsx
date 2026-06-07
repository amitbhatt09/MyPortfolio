import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amit Bhatt — AI Engineer & Full Stack Developer",
  description:
    "Software Engineer specializing in AI-powered applications, enterprise software development, cloud technologies, and automation solutions. Based in Noida, India.",
  keywords: [
    "Amit Bhatt",
    "AI Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "LangChain",
    "ASP.NET Core",
    "Azure",
    "React",
    "Enterprise Software",
    "AI Agents",
    "Noida India",
  ],
  authors: [{ name: "Amit Bhatt", url: "https://github.com/amitbhatt09" }],
  creator: "Amit Bhatt",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Amit Bhatt — AI Engineer & Full Stack Developer",
    description:
      "Building intelligent software & AI solutions that scale. Enterprise applications, AI agents, cloud solutions.",
    siteName: "Amit Bhatt Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Bhatt — AI Engineer & Full Stack Developer",
    description:
      "Building intelligent software & AI solutions that scale.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
