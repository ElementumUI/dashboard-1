import { ReactNode } from "react";

import { Header } from "@/components/common/header";
import { Sidebar } from "@/components/common/sidebar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <section>
        <Sidebar />
      </section>
      <section>
        <Header />
        <main>{children}</main>
      </section>
    </div>
  );
};

export default MainLayout;
