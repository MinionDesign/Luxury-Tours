"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { CiMenuFries } from "react-icons/ci"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
// import Navigation from "./navigation"

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isTextVisible, setIsTextVisible] = useState(false)

  useEffect(() => {
    // Trigger video animation after component mounts
    const timer = setTimeout(() => {
      setIsVideoLoaded(true)
    }, 100)

    // Trigger text animation after video starts
    const textTimer = setTimeout(() => {
      setIsTextVisible(true)
    }, 800)

    return () => {
      clearTimeout(timer)
      clearTimeout(textTimer)
    }
  }, [])

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Destinations", href: "#destinations" },
    { name: "Experiences", href: "#experiences" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <section id="home" className="w-full relative h-[80vh] overflow-hidden px-[10px]">
      {/* Background Video */}
      <div className="absolute inset-0 h-full w-full overflow-hidden px-[10px]">
        <div className="relative w-full h-full">
          <div className={`absolute inset-0 grid grid-cols-[repeat(10,1fr)] transition-all duration-1000 ease-out ${
            isVideoLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}>
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="h-full overflow-hidden"
                style={{
                  clipPath: isVideoLoaded 
                    ? 'inset(0 0 0 0)' 
                    : 'inset(0 100% 0 0)',
                  transition: `clip-path 1000ms ease-out ${index * 50}ms`
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover scale-110"
                  onLoadedData={() => setIsVideoLoaded(true)}
                  style={{
                    filter: 'brightness(1.1) contrast(1.1)',
                    transform: 'scale(1.1)',
                    objectPosition: 'center center'
                  }}
                  suppressHydrationWarning
                >
                  <source 
                    src="/video/hero-bg.mp4" 
                    type="video/mp4"
                    media="(min-width: 768px)"
                  />
                  <source 
                    src="/video/hero-bg-mobile.mp4" 
                    type="video/mp4"
                    media="(max-width: 767px)"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
          {/* Video Quality Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 px-[10px]" />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 px-[10px]" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between p-6 pt-8">
        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="text-white/90 text-2xl font-bold tracking-wide">
            <Image src="/logo.png" alt="logo" width={100} height={100} className="w-[200px] h-[100px] object-contain" />
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="relative ml-auto">
          <Button
            variant="ghost"
            size="icon"
            className={`text-white size- hover:bg-white/20 transition-all duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="size-5 transition-all duration-300" /> : <CiMenuFries className="size-5 stroke-2 transition-all duration-300" />}
          </Button>
          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-3 w-48 bg-[#07384A] rounded-xl shadow-lg overflow-hidden border border-[#2B5A6B] transition-all duration-300 z-50 ${
              isMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <nav className="flex flex-col py-2">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-6 py-3 text-base text-[#E1C5A0] hover:bg-[#0B3B4F] hover:text-white transition-colors duration-200 cursor-pointer"
                  onClick={e => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-6xl mx-auto w-full">
          <h1 
            className={`text-5xl md:text-8xl font-bold text-[#E1C5A0] mb-4 transform transition-all duration-1000 ease-out ${
              isTextVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
          >
            Welcome Aboard
          </h1>
          <p 
            className={`text-xl md:text-2xl transform transition-all duration-1000 ease-out ${
              isTextVisible 
                ? 'translate-y-0 opacity-90' 
                : 'translate-y-16 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Discover extraordinary destinations around the world
          </p>
        </div>
      </div>
    </section>
  )
}
