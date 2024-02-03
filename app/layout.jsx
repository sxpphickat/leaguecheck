import "./globals.css";
import { Inter } from 'next/font/google'
import DarkModeToggle from "@/components/DarkModeToggle";
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'league check',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className={`${inter.className}`}>
        <body className="dark:text-white dark:bg-neutral-950 bg-white h-screen w-scree transition-all duration-500 
    ">
          <header className="p-2 h-12 flex justify-start items-center">
            <p>LEAGUE CHECK</p>
            <span className="ml-auto ">
              <DarkModeToggle />
            </span>
          </header>
            <div className="min-h-[700px] h-[90%] border-y-2 dark:border-y-neutral-700 transition-all">
              {children}
            </div>
          <footer className="flex justify-center items-center p-2 h-12">
            <p>Made with ❤️ by <a className="text-blue-600" target="_blank" href="https://github.com/sxpphickat">@sxpphickat</a></p>
          </footer>
        </body>
      </html>
    </>
  );
}
