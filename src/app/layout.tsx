import "./global.css";
import { FaBars } from "react-icons/fa";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="flex justify-between p-4 items-center mb-2">
          <h1 className="text-xl font-mono">Another Todo App</h1>
          <nav className="flex gap-4 font-mono">
            <button className="rounded-xl p-2 hover:bg-black hover:text-white hover:transition-colors md:hidden">
              <FaBars className="text-lg" />
            </button>
            <a className="self-center hidden md:inline-block">Sing in</a>
            <button className="border-2 border-black rounded-xl p-2 hover:bg-black hover:text-white hover:transition-colors hidden md:inline-block">
              Sing up
            </button>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
