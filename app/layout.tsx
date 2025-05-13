import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GPA Calculator",
  description: "Calculate and track your GPA",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen items-center justify-center bg-black p-4">
            <div className="relative mx-auto w-full max-w-[390px] overflow-hidden rounded-[40px] bg-white shadow-xl">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
