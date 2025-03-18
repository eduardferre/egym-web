'use client'

import { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import styles from './global.module.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false) // State for mobile menu
  const [isMounted, setIsMounted] = useState(false) // State for initial render

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <header className="sticky top-4 z-50 flex justify-center items-center w-full mx-auto pb-6 px-6 sm:px-6 md:px-8">
      <nav
        className={`${styles.navigation} flex items-center justify-between w-full md:gap-x-4 lg:gap-x-10 md:w-3xl lg:w-4xl rounded-md md:text-sm lg:text-md text-gray-100 font-medium px-4 py-2 md:py-4`}
      >
        {/* Mobile Company Name */}
        <Link href="/" className="sm:hidden">
          <Image
            src="/eGym_written_logo.png"
            alt="eGym"
            width={100}
            height={100}
            className="w-auto h-auto max-w-[80px] sm:hidden"
          />
        </Link>

        {/* Logo */}
        <Link href="/" className="sm:flex-shrink-0">
          <Image
            src="/logo_secondary.webp"
            alt="eGym"
            width={100}
            height={100}
            className="w-auto h-auto max-w-[70px] sm:max-w-[80px] md:max-w-[90px] transition-all hover:scale-110 hover:-translate-y-0.5"
          />
        </Link>

        {/* Navigation Links (hidden on mobile) */}
        <div className="hidden sm:flex items-center gap-x-2 sm:gap-x-4 lg:gap-x-6 text-xs sm:text-sm md:text-md">
          <Link
            className="relative block px-2 py-2 sm:px-4 transition hover:text-[#c08e3a] hover:scale-105"
            aria-label="guide"
            href="/guide"
          >
            Guide
          </Link>
          <Link
            className="relative block px-2 py-2 sm:px-4 transition hover:text-[#c08e3a] hover:scale-105"
            aria-label="examples"
            href="/examples"
          >
            Examples
          </Link>
          <Link
            href="/#about-us"
            className="relative block px-2 py-2 sm:px-4 text-white transition hover:text-[#c08e3a] hover:scale-105"
            aria-label="about us"
          >
            About Us
          </Link>
        </div>

        {/* Divider (hidden on mobile) */}
        <span className="hidden md:block px-6 text-lg">|</span>

        {/* CTA Buttons (hidden on mobile) */}
        <div className="hidden sm:flex items-center gap-x-2 sm:gap-x-4 lg:gap-x-6">
          <button
            className={`${styles.register} px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border border-[#c99e46] bg-[#c08e3a] rounded-lg transition hover:text-white hover:border hover:bg-transparent hover:scale-105 hover:-translate-y-0.5 cursor-pointer`}
          >
            Get Started
          </button>
          <button
            className={`${styles.login} px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border border-[#c99e46] rounded-lg transition hover:text-white hover:border-[#c08e3a] hover:bg-[#c08e3a] hover:scale-105 hover:-translate-y-0.5 cursor-pointer`}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay with Transition */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white text-lg z-50 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
      >
        <button
          className="absolute top-6 right-6 p-2 cursor-pointer"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>
        <Link
          href="/guide"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#c08e3a]"
        >
          Guide
        </Link>
        <Link
          href="/examples"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#c08e3a]"
        >
          Examples
        </Link>
        <Link
          href="/#about-us"
          onClick={() => setIsOpen(false)}
          className="hover:text-[#c08e3a]"
        >
          About Us
        </Link>
        <button
          className="border border-[#c99e46] bg-[#c08e3a] px-6 py-2 rounded-lg hover:bg-transparent cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Get Started
        </button>
        <button
          className="border border-[#c99e46] px-6 py-2 rounded-lg hover:bg-[#c08e3a] cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Login
        </button>
      </div>
    </header>
  )
}
