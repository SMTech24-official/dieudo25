import React, { ReactNode } from "react";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-background overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
