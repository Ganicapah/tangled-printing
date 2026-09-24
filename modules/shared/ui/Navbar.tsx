"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-xl font-black tracking-tighter text-neutral-900"
            >
              Tangled<span className="text-blue-600">Printing</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-sm font-semibold text-neutral-900 hover:text-blue-600 transition-colors"
            >
              Katalog
            </Link>
            <Link
              href="/custom"
              className="text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Custom Desain
            </Link>
            <Link
              href="/tracking"
              className="text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Lacak Pesanan
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-bold text-neutral-900 px-4 py-2 border border-neutral-200 rounded-full hover:bg-neutral-50 transition-colors">
              Masuk
            </button>
            <button className="text-sm font-bold text-white bg-neutral-900 px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors">
              Keranjang (0)
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-900 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-semibold text-neutral-900 hover:bg-neutral-50"
          >
            Katalog
          </Link>
          <Link
            href="/custom"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
          >
            Custom Desain
          </Link>
          <Link
            href="/tracking"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
          >
            Lacak Pesanan
          </Link>
        </div>
      )}
    </nav>
  );
}
