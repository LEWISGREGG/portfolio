'use client'

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

function Providers({children} : {children: ReactNode}) {
  return  <ThemeProvider attribute="class">{children}</ThemeProvider>
    
  
}

export default Providers