import "@/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Nav         from "./_navbar/page";
import Hero        from "./_hero/page";
import AboutMe     from "./_aboutme/page";
import Experience  from "./_experience/page";
import Skills      from "./_skills/page";
import Projects    from "./_projects/page";
import Certifications from "./_certifications/page";
import ContactMe   from "./_ContactMe/page";
import Footer      from "./_navbar/footer";

export const metadata: Metadata = {
  title: { default: "Akshay Kapoor", template: "%s · Akshay Kapoor" },
  description: "Full Stack Developer & AI Engineer — building scalable intelligent systems.",
  icons: { icon: "/Favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <Providers>
          <Nav />
          <main>
            <Hero />
            <AboutMe />
            <Experience />
            <Skills />
            <Projects />
            <Certifications />
            <ContactMe />
            <Footer />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
