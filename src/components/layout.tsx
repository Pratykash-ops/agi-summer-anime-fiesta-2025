"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from "./navbar";
export function Layout({ children }: { children: React.ReactNode }) {
  // const router = useRouter()
  // const [progress, setProgress] = useState(0);
  useEffect(() => {

  }, [])

  return <>
    <ThemeProvider>

      <Navbar />
      {children}
    </ThemeProvider>
  </>
}

export default Layout;
