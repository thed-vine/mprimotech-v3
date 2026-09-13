import type React from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight } from "lucide-react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/components/ui/3d-card"

interface ServiceTemplateProps {
  title: string
  subtitle: string
  problems?: string[]
  solutions?: string[]
  overview: string
  features: string[]
  benefits: string[]
  relatedServices: Array<{
    title: string
    description: string
    icon: React.ReactNode
    href: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
}

export default function ServiceTemplate({
  title,
  subtitle,
  problems,
  solutions,
  overview,
  features,
  benefits,
  relatedServices,
  faqs,
}: ServiceTemplateProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-background border-b border-border py-16 sm:py-20 overflow-hidden">
          <BackgroundBeams className="absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ArrowRight className="h-3.5 w-3.5" />
              <span className="text-foreground">{title}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-foreground mb-4 text-balance">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </section>

        {/* Problems & Solutions Section */}
        {problems && solutions && (
          <section className="py-16 sm:py-20 bg-background">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                <div>
                  <h2 className="text-sm font-semibold tracking-widest uppercase text-foreground mb-8">
                    Common Problems
                  </h2>
                  <div className="space-y-4">
                    {problems.map((problem, index) => (
                      <div key={index} className="flex gap-3 py-4 border-b border-border last:border-0">
                        <span className="text-sm text-muted-foreground font-serif mt-0.5">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-foreground leading-relaxed">{problem}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-sm font-semibold tracking-widest uppercase text-foreground mb-8">
                    Our Solutions
                  </h2>
                  <div className="space-y-4">
                    {solutions.map((solution, index) => (
                      <div key={index} className="flex gap-3 py-4 border-b border-border last:border-0">
                        <span className="text-sm text-accent font-serif mt-0.5">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-foreground leading-relaxed">{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Overview Section */}
        <section className="py-16 sm:py-20 bg-secondary/30 border-y border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-foreground mb-6">
              Overview
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {overview}
            </p>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-foreground mb-8">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 py-4 border-b border-border"
                >
                  <span className="text-sm text-muted-foreground font-serif mt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-secondary/20 border-y border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-foreground mb-8">
              Business Benefits
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 py-4 border-b border-border last:border-0">
                  <span className="text-lg font-serif text-accent flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-foreground mb-10">
              Complementary Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {relatedServices.map((service) => (
                <CardContainer
                  key={service.href}
                  containerClassName="py-0"
                  className="inter-var w-full"
                >
                  <CardBody className="group h-full flex flex-col p-6 border border-border bg-card hover:bg-secondary/50 transition-colors duration-200 relative">
                    <CardItem
                      translateZ={20}
                      className="text-foreground mb-4 group-hover:text-accent transition-colors duration-200"
                    >
                      {service.icon}
                    </CardItem>
                    <CardItem
                      as="h3"
                      translateZ={40}
                      className="font-semibold text-foreground text-[15px] mb-2"
                    >
                      {service.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ={60}
                      className="text-sm text-muted-foreground leading-relaxed flex-grow mb-5"
                    >
                      {service.description}
                    </CardItem>
                    <CardItem translateZ={30} className="mt-auto">
                      <Link
                        href={service.href}
                        className="flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-200"
                      >
                        Learn More
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-secondary/20 border-y border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border-b border-border last:border-0"
                >
                  <summary className="flex justify-between items-center font-medium text-foreground py-5 cursor-pointer list-none">
                    {faq.question}
                    <span className="text-muted-foreground group-open:rotate-45 transition-transform duration-200 text-lg">
                      +
                    </span>
                  </summary>
                  <p className="pb-5 text-muted-foreground leading-relaxed hidden group-open:block">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* B2B Contract Badge */}
        <section className="py-12 bg-background border-y border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground mb-1">This service is available under</p>
            <h3 className="text-xl font-serif text-foreground mb-3">
              B2B IT Contracts
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
              Get this service with guaranteed SLAs, compliance standards, and dedicated account management.
            </p>
            <Link
              href="/services/b2b-contracts"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Learn About Enterprise Contracts
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-[#14305f] to-[#0A1F44] text-[#ece7db]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[#ece7db]/70 mb-8 leading-relaxed">
              Let&apos;s discuss how {title} can benefit your organization.
            </p>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#ece7db] text-[#0A1F44] hover:bg-white transition-colors"
            >
              Schedule Your Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
