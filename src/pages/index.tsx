import { usersProgress } from "@/lib/data";
import { Link } from "@/router";

export default function Index() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* header */}
      <header className="w-full max-w-7xl mx-auto px-4 border-b border-gray-300 py-4">
        <Link to="/" className="font-medium">
          User Progress Demo
        </Link>
      </header>

      {/* main content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4">
        Replace me! Your code goes here. Use the users from "src/lib/data.ts"
      </main>

      {/* footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 flex items-start py-4 text-gray-500 text-sm">
        <div className="flex-1"></div>
        <div className="flex-1 text-center">
          <p>&copy; The Adpharm</p>
        </div>
        <div className="flex-1"></div>
      </footer>
    </div>
  );
}
