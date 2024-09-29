import React, { ReactNode } from "react";
import TopBar from "../components/shared/navbar/TopBar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
};

export default layout;
