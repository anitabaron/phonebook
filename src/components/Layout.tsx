import Navigation from "./Navigation";
import { Suspense } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>loading fallback...</p>}>{children}</Suspense>
    </div>
  );
}
