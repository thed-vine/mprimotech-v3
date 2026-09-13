import type React from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceCard from "@/components/service-card"
import { ArrowRight } from "lucide-react"

interface SectorTemplateProps {
  sectorName: string
  icon: string
  overview: string
  challenges: string[]
  solutions: Array<{
    title: string
    description: string
  }>
  relatedServices: Array<{
    title: string
    description: string
    icon: React.ReactNode
    href: string
  }>
}

export default function SectorTemplate({
  sectorName,
  icon,
  overview,
  challenges,
  solutions,
  relatedServices,
}: SectorTemplateProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-background border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
              <Link href="/sectors" className="hover:text-foreground transition-colors">
                Sectors
              </Link>
              <ArrowRight className="h-3.5 w-3.5" />
              <span className="text-foreground">{sectorName}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-foreground mb-4 text-balance">
              {sectorName}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {overview}
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-foreground mb-6">
              Industry Context
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Organizations in {sectorName.toLowerCase()} face unique operational and administrative challenges.
              Disconnected systems, manual forms, and repetitive processes create daily friction.
              MPrimo Tech brings practical on-site expertise to map out messy workflows and automate admin bottlenecks.
            </p>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="py-16 sm:py-20 bg-secondary/30 border-y border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-foreground mb-8">
              Common Challenges
            </h2>
            <div className="space-y-0">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex gap-4 py-5 border-b border-border last:border-0"
                >
                  <span className="text-sm text-muted-foreground font-serif mt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-foreground mb-8">
              Our Approach
            </h2>
            <div className="space-y-0">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4 py-5 border-b border-border last:border-0">
                  <span className="text-lg font-serif text-accent flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-[15px]">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 sm:py-20 bg-secondary/20 border-y border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-foreground mb-10">
              Recommended Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {relatedServices.map((service) => (
                <ServiceCard key={service.href} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-[#14305f] to-[#0A1F44] text-[#ece7db]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">
              Ready to Streamline Admin for {sectorName}?
            </h2>
            <p className="text-[#ece7db]/70 mb-8 leading-relaxed">
              Speak with our UK team to discuss how we can review your workflow on site
              and remove administrative bottlenecks.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#ece7db] text-[#0A1F44] hover:bg-white transition-colors"
            >
              Schedule an On-Site Review
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
