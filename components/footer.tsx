import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#070b09] border-t border-border text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Company */}
          <div className="md:col-span-1">
            <h3 className="text-base font-semibold tracking-wide mb-4">MPrimo Tech</h3>
            <p className="text-sm leading-relaxed text-[#9a9590]">
              Small UK firm that comes on site, maps messy admin in care and hospitality, and automates it.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground/60 mb-5">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/managed-it" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link href="/services/risk-analysis" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Risk Analysis
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Cloud & Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services/digital-workplace" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Digital Workplace
                </Link>
              </li>
              <li>
                <Link href="/services/network" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Network & Connectivity
                </Link>
              </li>
              <li>
                <Link href="/services/backup" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Backup & Continuity
                </Link>
              </li>
              <li>
                <Link href="/services/b2b-contracts" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                  B2B IT Contracts
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground/60 mb-5">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Sectors
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground/60 mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 text-muted-foreground/60" />
                <a href="mailto:info@mprimotech.com" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                  info@mprimotech.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 text-muted-foreground/60" />
                <a href="tel:++443302237450" className="text-muted-foreground hover:text-foreground transition-colors duration-150">
                  +44 (330) 223-7450
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60">&copy; {new Date().getFullYear()} MPrimo Tech. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-muted-foreground/60">
            <Link href="/privacy" className="hover:text-muted-foreground transition-colors duration-150">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-muted-foreground transition-colors duration-150">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-muted-foreground transition-colors duration-150">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
