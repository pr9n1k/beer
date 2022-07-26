import * as React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="wrapper">
      <Header />
      <div className="main container">{children}</div>
      <Footer />
    </div>
  );
}
