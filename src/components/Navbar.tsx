'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Budget-Friendly Healing
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-text hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-text hover:text-primary">
              About
            </Link>
            <Link href="/books" className="text-text hover:text-primary">
              Books
            </Link>
            <Link href="/testimonials" className="text-text hover:text-primary">
              Testimonials
            </Link>
            <Link href="/contact" className="text-text hover:text-primary">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-text hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-text hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/books"
                className="block px-3 py-2 text-text hover:text-primary"
              >
                Books
              </Link>
              <Link
                href="/testimonials"
                className="block px-3 py-2 text-text hover:text-primary"
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-text hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 