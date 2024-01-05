"use client";
import AuthProvider from "@/components/AuthProvider"
export default function Layout({ children }) {
    return (
      <>
        <html lang="en">
        <body>
            <main>
            {children}
          </main>
        </body>
        </html>
      </>
    )
  }