"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

// Theme provider component for dark mode support.
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
