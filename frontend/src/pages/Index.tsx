import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WorkflowEditor from "@/components/WorkflowEditor";
import IntegrationsScrollVelocity from "@/components/IntegrationsScrollVelocity";
import Pricing from "@/components/Pricing";
import Docs from "@/components/Docs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <WorkflowEditor />
        <IntegrationsScrollVelocity
          texts={[
            "GitHub Slack Gmail Stripe AWS PostgreSQL MongoDB",
            "Shopify Notion Discord Twilio OpenAI Docker Redis Zapier",
          ]}
          velocity={120}
          numCopies={6}
          className="text-black"
        />

        <Pricing />
        <Docs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
