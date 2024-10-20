import DashBoardNav from "@/components/dashboard/shared/navbar/DashBoardNav";
import React, { ReactNode } from "react";


const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-background  flex h-full">
            <div className="sticky top-10 h-screen z-50">
                <DashBoardNav />
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
};

export default layout;
