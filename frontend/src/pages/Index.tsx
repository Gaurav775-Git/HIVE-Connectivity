import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WorkflowEditor from "@/components/WorkflowEditor";
import Integrations from "@/components/Integrations";
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
        <Integrations />
        <Pricing />
        <Docs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
