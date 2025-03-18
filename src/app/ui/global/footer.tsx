'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faTiktok,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null)

  useEffect(() => {
    // Only set currentYear on the client side
    setCurrentYear(new Date().getFullYear())
  }, [])

  if (currentYear === null) {
    return null // Prevent rendering until the year is set
  }

  return (
    <footer className="text-white py-8 mt-16">
      {/* Top Divider */}
      <div className="mb-8 border-t-2 border-white/20"></div>

      {/* Footer Content */}
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Left Section */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-6">Stay Connected</h2>
          <p className="text-sm">
            © {currentYear}{' '}
            <Link
              href="https://eduardferre.dev/"
              target="_blank"
              className="hover:underline text-[#c99e46]"
            >
              eduardferre
            </Link>
          </p>
        </div>

        {/* Center Section: Footer Links */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-x-6 text-sm font-medium">
            <li>
              <Link
                href="/terms-and-conditions"
                className="hover:text-[#c08e3a] transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-[#c08e3a] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#c08e3a] transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-[#c08e3a] transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Media */}
        <div className="text-center">
          <h3 className="font-bold text-xl mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            {/* Instagram */}
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-[#c08e3a] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Link>
            {/* TikTok */}
            <Link
              href="https://tiktok.com"
              target="_blank"
              className="hover:text-[#c08e3a] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </Link>
            {/* X (formerly Twitter) */}
            <Link
              href="https://x.com"
              target="_blank"
              className="hover:text-[#c08e3a] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-8 border-t-2 border-white/20"></div>

      {/* Footer Bottom Section */}
      <div className="mt-4 text-center text-sm text-white/80">
        <p>All rights reserved. eGym © {currentYear}</p>
      </div>
    </footer>
  )
}
