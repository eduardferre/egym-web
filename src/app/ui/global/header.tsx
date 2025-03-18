import Image from 'next/image'
import Link from 'next/link'
import styles from './global.module.css'

export default function Header() {
  return (
    <header className="sticky top-4 z-50 flex justify-center items-center w-full mx-auto pb-4 px-4 sm:px-6 md:px-8">
      <nav
        className={`${styles.navigation} flex items-center justify-between w-full max-w-[75rem] rounded-md text-gray-100 font-medium px-4 py-2 sm:py-3 md:py-4`}
      >
        {/* Logo (Hidden on Mobile) */}
        <Link href="/" className="hidden sm:block flex-shrink-0">
          <Image
            src="/logo_secondary.svg"
            alt="eGym"
            width={80}
            height={80}
            className="w-auto h-auto max-w-[80px] md:max-w-[100px] transition-all hover:scale-110 hover:-translate-y-0.5"
          />
        </Link>

        {/* Navigation Links (Always Visible) */}
        <div className="flex items-center gap-x-3 sm:gap-x-4 lg:gap-x-6 text-xs sm:text-sm md:text-md">
          <Link
            className="px-2 py-1 transition hover:text-[#c08e3a] hover:scale-105"
            aria-label="guide"
            href="/guide"
          >
            Guide
          </Link>
          <Link
            className="px-2 py-1 transition hover:text-[#c08e3a] hover:scale-105"
            aria-label="examples"
            href="/examples"
          >
            Examples
          </Link>
          <Link
            href="/#about-us"
            className="px-2 py-1 text-white transition hover:text-[#c08e3a] hover:scale-105"
            aria-label="about us"
          >
            About Us
          </Link>
        </div>

        {/* Divider */}
        <span className=" md:block px-6 text-lg">|</span>

        {/* CTA Buttons */}
        <div className="flex items-center gap-x-2 sm:gap-x-4 lg:gap-x-6">
          <button
            className={`${styles.register} px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border border-[#c99e46] bg-[#c08e3a] rounded-lg transition hover:text-white hover:border hover:bg-transparent hover:scale-105 hover:-translate-y-0.5`}
          >
            Get Started
          </button>
          <button
            className={`${styles.login} px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border border-[#c99e46] rounded-lg transition hover:text-white hover:border-[#c08e3a] hover:bg-[#c08e3a] hover:scale-105 hover:-translate-y-0.5`}
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  )
}
