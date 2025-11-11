import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WorkflowEditor from "@/components/WorkflowEditor";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import Docs from "@/components/Docs";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import StyleSheet from "styled-components/dist/sheet";
import Animation from "@/components/Animation";
const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Form />
        <Animation/>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
