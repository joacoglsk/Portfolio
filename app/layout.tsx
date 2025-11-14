import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Noto_Sans_Georgian } from 'next/font/google'

// Initialize the font
const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Include the weights you need
  variable: '--font-noto-sans-georgian',
})


export const metadata = {
  title: "Developer Portfolio",
  description: "Professional portfolio for a software developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-black font-mono antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
  return (
    <html lang="en" className={`${notoSansGeorgian.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        {/* ... */}
      </body>
    </html>
  )
}
