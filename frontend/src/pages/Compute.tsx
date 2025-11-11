import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Uploader from "@/components/Uploader";
const Compute = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Uploader/>
      </main>
      <Footer />
    </div>
  );
};

export default Compute;
