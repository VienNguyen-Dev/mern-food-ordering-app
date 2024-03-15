import React from "react";
import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />

      <div className=" container py-10 mx-auto flex-1">{children}</div>
    </div>
  );
}

export default Layout;
