import React, { ReactNode } from "react";
import Navbar from "../components/shared/navbar/Navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-background">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
