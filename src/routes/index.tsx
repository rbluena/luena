import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Expertise } from "@/components/expertise";
import { Experience } from "@/components/experience";
import { About } from "@/components/about";
import { Principles } from "@/components/principles";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const title = "Rabii Luena — Frontend Engineer & Product Builder";
const description =
  "Frontend engineer building AI-native products, browser experiences, and scalable web applications.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rabii Luena",
          jobTitle: "Frontend Engineer",
          email: "mailto:rbluena@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
          knowsAbout: ["Frontend Engineering", "AI Products", "Browser Extensions"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Principles />
        <SelectedWork />
        <Expertise />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
