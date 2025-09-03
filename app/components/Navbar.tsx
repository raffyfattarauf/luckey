'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // Adjust this value based on your navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className={`text-xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Luckey
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Fitur
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Produk
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Harga
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              FAQ
            </button>
            <Link
              href="/articles"
              className={`transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Artikel
            </Link>
            <button 
              onClick={() => scrollToSection('form')}
              className={`px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors`}
            >
              Minta Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md inline-flex items-center justify-center ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-black/50 backdrop-blur-md'
        }`}>
          <button
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              isScrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => {
              scrollToSection('features');
              setIsMobileMenuOpen(false);
            }}
          >
            Fitur
          </button>
          <button
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              isScrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => {
              scrollToSection('products');
              setIsMobileMenuOpen(false);
            }}
          >
            Produk
          </button>
          <button
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              isScrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => {
              scrollToSection('pricing');
              setIsMobileMenuOpen(false);
            }}
          >
            Harga
          </button>
          <button
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              isScrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => {
              scrollToSection('faq');
              setIsMobileMenuOpen(false);
            }}
          >
            FAQ
          </button>
          <Link
            href="/articles"
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              isScrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Artikel
          </Link>
          <button
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-green-500 text-white hover:bg-green-600"
            onClick={() => {
              scrollToSection('form');
              setIsMobileMenuOpen(false);
            }}
          >
            Minta Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
