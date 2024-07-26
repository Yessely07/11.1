// src/components/Layout.js
export default function Layout({ children }) {
    return (
      <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-800 text-white p-6">
          <nav>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">Home</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">Products</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">Services</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">Contact</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">Other</a>
          </nav>
          <div className="mt-6 text-center">
            <img src="/path-to-avatar.png" alt="User Avatar" className="w-24 h-24 mx-auto rounded-full" />
            <p className="mt-2">User Current: first name</p>
          </div>
        </aside>
        <main className="flex-1 bg-gray-100 p-6">
          <header className="bg-blue-900 text-white text-center py-4">
            <h1 className="text-2xl">Sistema Web con React</h1>
          </header>
          <div className="mt-6">
            {children}
          </div>
        </main>
      </div>
    );
  }
  