// src/app/layout.tsx
import { ReactNode } from 'react';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <aside className="bg-blue-800 text-white w-1/4 p-4">
            <ul>
              <li className="py-2"><a href="/" className="text-pink-500">Home</a></li>
              <li className="py-2"><a href="/products">Products</a></li>
              <li className="py-2"><a href="/services">Services</a></li>
              <li className="py-2"><a href="/contact">Contact</a></li>
              <li className="py-2"><a href="/other">Other</a></li>
            </ul>
          </aside>
          <main className="bg-gray-100 w-3/4 p-4">
            <h1 className="text-center text-2xl font-bold mb-4">Sistema Web con React</h1>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
