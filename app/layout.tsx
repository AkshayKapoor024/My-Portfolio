import "@/styles/globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";

import { Toaster, toast } from 'sonner';

import Hero from "./_hero/page";
import Nav from "./_navbar/page";
import AboutMe from "./_aboutme/page";
import Skills from "./_skills/page";
import Projects from "./_projects/page"
import Achievements from "./_achievements/page";
import { Plus_Jakarta_Sans } from "next/font/google";
import Certifications from "./_certifications/page";
import FutureGoals from "./_futuregoals/page";
import ContactMe from "./_ContactMe/page";
import Footer from "./_navbar/footer";
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800"],
  variable: "--font-plus-jakarta-sans", // define a CSS variable name
});

export const metadata: Metadata = {
  title: {
    default: "Akshay's Portfolio",
    template: `%s - ${siteConfig.name}`,
  },
  description:"Portfolio website to show skills and achievements.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head >
        
      </head>
      <body className={`${plusJakarta.variable} font-jakarta`}>
        <Providers>
          <Nav></Nav>
          <main>
            <Hero></Hero>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Achievements/>
            <Certifications/>
            <FutureGoals/>
            <ContactMe/>
            <Footer/>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
