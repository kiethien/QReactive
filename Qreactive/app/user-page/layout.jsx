"use client";
import AuthProvider from "@/components/AuthProvider"
export default function Layout({ children }) {
    return (
      <>
        <html lang="en">
      <body>
        <AuthProvider>
            <main className="relative overflow-hidden">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
      </>
    )
  }