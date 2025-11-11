import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Form_rent from "@/components/Form_rent";
import Animation2 from "@/components/Animation2";
const Rent = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Form_rent/>
        <Animation2/>
      </main>
      <Footer />
    </div>
  );
};

export default Rent;
