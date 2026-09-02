import { Hero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { PricingSection } from "@/components/PricingSection";
import { StreamingFeatures } from "@/components/StreamingFeatures";
import { Testimonials } from "@/components/Testimonials";
import { TrustSplit } from "@/components/TrustSplit";
import { BlogTeaser } from "@/components/BlogTeaser";
import { Referral } from "@/components/Referral";
import { SetupSection } from "@/components/SetupSection";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";
import { JsonLd } from "@/components/JsonLd";
import { faqLd, productLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[productLd(), faqLd()]} />
      <Hero />
      <StatsBand />
      <PricingSection />
      <StreamingFeatures />
      <Testimonials />
      <TrustSplit />
      <BlogTeaser />
      <Referral />
      <SetupSection />
      <FAQ limit={6} moreHref="/faq" />
      <ContactSection />
    </>
  );
}
