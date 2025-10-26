"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

// Ce composant "wrapper" permet d'utiliser le provider de next-themes
// (qui est un Client Component) dans notre Layout (qui est un Server Component)
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
