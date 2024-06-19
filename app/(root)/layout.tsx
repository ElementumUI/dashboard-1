"use client";

import { ReactNode, useState } from "react";

import { Header } from "@/components/common/header";
import { Sidebar } from "@/components/common/sidebar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      <section>
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={() => setShowSidebar(false)}
        />
      </section>
      <section className="flex-1">
        <div className="h-[10vh]">
          <Header setShowSidebar={() => setShowSidebar(true)} />
        </div>
        <main className="h-[90vh] overflow-y-auto p-8">{children}</main>
      </section>
    </div>
  );
};

export default MainLayout;
