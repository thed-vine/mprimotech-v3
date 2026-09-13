"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    { name: "Managed IT Services", href: "/services/managed-it" },
    { name: "Risk Analysis", href: "/services/risk-analysis" },
    { name: "Cloud & Infrastructure", href: "/services/cloud" },
    { name: "Digital Workplace", href: "/services/digital-workplace" },
    { name: "Network & Connectivity", href: "/services/network" },
    { name: "Backup & Business Continuity", href: "/services/backup" },
    { name: "Remote & Desktop Support", href: "/sectors/remote-&-desktop-support" },
    { name: "Rollouts & Refresh", href: "/sectors/rollouts-&-refresh" },
    { name: "Hands & Eyes Services", href: "/sectors/hands-&-eyes-services" },
    { name: "Consultancy", href: "/services/consultancy" },
    { name: "Professional Services", href: "/services/professional" },
    { name: "B2B IT Contracts", href: "/services/b2b-contracts" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/assets/mprimo 2.png"
              alt="MPrimo Tech logo"
              className="w-auto object-contain h-[48px] md:h-[56px]"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-[13px] font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-[13px] font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-200">
                Services
                <ChevronDown className="h-3.5 w-3.5 opacity-50" />
              </button>
              <div className="absolute left-0 mt-3 hidden w-56 bg-card border border-border rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1.5 translate-y-1 group-hover:translate-y-0">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors duration-150"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/sectors"
              className="text-[13px] font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Sectors
            </Link>
            <Link
              href="/about"
              className="text-[13px] font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[13px] font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-border/50">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className="block px-2 py-2.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left px-2 py-2.5 text-sm font-medium text-foreground hover:text-accent flex items-center gap-1.5"
              >
                Services
                <ChevronDown
                  className={`h-3.5 w-3.5 opacity-40 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="pl-4 py-1 border-l border-border/50 ml-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
              <Link
                href="/sectors"
                className="block px-2 py-2.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sectors
              </Link>
              <Link
                href="/about"
                className="block px-2 py-2.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-2 py-2.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/book-consultation"
                className="mt-3 inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
