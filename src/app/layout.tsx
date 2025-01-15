'use client'
import { Inter } from "next/font/google";
import { ThemeProvider } from "./providers/theme-provider";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { usePathname } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboardPage = pathname.startsWith("/dashboard");
  

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            {!isDashboardPage && <Navbar isSticky={true} />}
            <main className="flex-grow">{children}</main>
            {!isDashboardPage && <Footer />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
