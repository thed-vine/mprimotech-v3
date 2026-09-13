"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/components/ui/3d-card";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  FileSearch,
  Cloud,
  Users,
  Lock,
  Zap,
  TrendingUp,
  Bell,
  X,
  ArrowRight,
  Monitor,
  ClipboardList,
  Briefcase,
  Globe,
  HardDrive,
  Target,
  Settings,
  Handshake,
  Headphones,
} from "lucide-react";

const typewriterWords = [
  { text: "We" },
  { text: "come" },
  { text: "on" },
  { text: "site" },
  { text: "to" },
  { text: "map" },
  { text: "your" },
  { text: "messy" },
  { text: "admin" },
  { text: "—" },
  { text: "and" },
  { text: "automate" },
  { text: "it.", className: "text-accent" },
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("exitPopupShown")) {
        setShowPopup(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const services = [
    {
      title: "Admin Workflow Automation",
      description:
        "Stop double-handling paperwork and spreadsheets. We connect your daily tools and automate repetitive admin tasks.",
      icon: <Zap className="h-6 w-6" />,
      href: "/services/managed-it",
    },
    {
      title: "On-Site Workflow Audits",
      description:
        "We visit your care home or venue in person to shadow your staff, identify bottlenecks, and map your actual processes.",
      icon: <FileSearch className="h-6 w-6" />,
      href: "/services/risk-analysis",
    },
    {
      title: "Cloud & Systems Integration",
      description:
        "Get your rota, CRM, billing, and care planning software talking to each other without messy CSV exports.",
      icon: <Cloud className="h-6 w-6" />,
      href: "/services/cloud",
    },
    {
      title: "Digital Workplace Setup",
      description:
        "Equip carers, managers, and front-of-house staff with reliable tablets, shared folders, and simple secure logins.",
      icon: <Users className="h-6 w-6" />,
      href: "/services/digital-workplace",
    },
    {
      title: "Reliable Site Connectivity",
      description:
        "WiFi dead zones in care homes or restaurants stop work in its tracks. We audit and stabilize your on-site network.",
      icon: <TrendingUp className="h-6 w-6" />,
      href: "/services/network",
    },
    {
      title: "Backup & Data Protection",
      description:
        "Ensure resident records, financial details, and guest data are securely backed up with rapid recovery.",
      icon: <Lock className="h-6 w-6" />,
      href: "/services/backup",
    },
  ];

  const sectors = [
    "Healthcare",
    "Retail",
    "Education",
    "Manufacturing",
    "Financial Services",
    "Remote & Desktop Support",
    "Rollouts & Refresh",
    "Hands & Eyes Services",
  ];

  return (
    <>
      <Header />

      {/* Exit Intent Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-lg shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-2xl font-semibold text-foreground mb-2 font-serif">
              Before you go...
            </h3>
            <p className="text-muted-foreground mb-1">
              Get an on-site admin & workflow review for your care or hospitality business
            </p>
            <p className="text-sm text-muted-foreground/60 mb-6">
              No cost, no jargon, no sales pitch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Request a Review
            </Link>
          </div>
        </div>
      )}

      <main>
        {/* Hero Section with Background Beams & Typewriter */}
        <section className="relative py-20 sm:py-28 lg:py-36 bg-background overflow-hidden">
          <BackgroundBeams className="absolute inset-0 opacity-30" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <TypewriterEffect
                words={typewriterWords}
                className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6"
                cursorClassName="bg-accent"
              />
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Small UK firm supporting care homes, healthcare & hospitality venues.
                Hands-on site visits to map paper records, spreadsheets & duplicate tasks.
                Clean automations that connect your existing systems. Direct UK team support with zero tech jargon.
              </p>

              <div className="bg-secondary/60 border border-border rounded-md px-5 py-4 flex items-start gap-3 max-w-lg mx-auto mb-10 text-left">
                <Bell className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-0.5">
                    On-Site Admin & Workflow Review
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Speak directly with our UK team about your workflow. No obligation.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Schedule On-Site Discovery
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-card border-y border-border py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-serif text-center text-foreground mb-16">
              How We Work With You On Site
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  num: "01",
                  title: "We Come On Site",
                  desc: "We visit your care home or venue in person to see how your team really works.",
                },
                {
                  num: "02",
                  title: "Map the Messy Admin",
                  desc: "We trace every spreadsheet, paper form, rota clash, and duplicated task.",
                },
                {
                  num: "03",
                  title: "Automate It",
                  desc: "We connect systems and build clean automations that give your team hours back each week.",
                },
              ].map((step) => (
                <div key={step.num} className="text-center md:text-left">
                  <span className="text-5xl font-serif text-accent/40 block mb-4">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services Grid with 3D Cards */}
        <section className="py-20 sm:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <TextGenerateEffect
                words="Where We Help"
                className="text-3xl sm:text-4xl font-serif text-foreground mb-4"
              />
              <p className="text-muted-foreground max-w-xl">
                We don&apos;t offer a confusing menu of 100 options. We focus on the
                six pillars that make modern enterprises resilient and efficient.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {services.map((service) => (
                <CardContainer key={service.href} containerClassName="py-0" className="inter-var w-full">
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

        {/* Capabilities Marquee */}
        <section className="py-16 sm:py-20 bg-secondary/30 border-y border-border overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-accent">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-foreground mt-2">
              The Full Spectrum
            </h2>
          </div>

          <div className="relative mask-fade-sides">
            {/* First Row - Scroll Right */}
            <div className="overflow-hidden mb-5">
              <div className="flex animate-marquee-right">
                {[...Array(2)].map((_, setIndex) => (
                  <div
                    key={setIndex}
                    className="flex shrink-0 gap-4 px-3"
                  >
                    {[
                      { name: "Managed IT Services", icon: Monitor },
                      { name: "Risk Analysis & Audits", icon: ClipboardList },
                      { name: "Cloud & Infrastructure", icon: Cloud },
                      { name: "Digital Workplace", icon: Briefcase },
                      { name: "Network & Connectivity", icon: Globe },
                    ].map((service, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className="flex items-center gap-3 px-5 py-3 bg-card border border-border text-foreground whitespace-nowrap"
                      >
                        <service.icon className="h-4 w-4 text-accent" />
                        <span className="font-medium text-sm">
                          {service.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Scroll Left */}
            <div className="overflow-hidden">
              <div className="flex animate-marquee-left">
                {[...Array(2)].map((_, setIndex) => (
                  <div
                    key={setIndex}
                    className="flex shrink-0 gap-4 px-3"
                  >
                    {[
                      { name: "Backup & Continuity", icon: HardDrive },
                      { name: "Strategic Consultancy", icon: Target },
                      { name: "Project Rollouts", icon: Settings },
                      { name: "B2B Contracts", icon: Handshake },
                      { name: "24/7 Support", icon: Headphones },
                    ].map((service, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className="flex items-center gap-3 px-5 py-3 bg-card border border-border text-foreground whitespace-nowrap"
                      >
                        <service.icon className="h-4 w-4 text-accent" />
                        <span className="font-medium text-sm">
                          {service.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <TextGenerateEffect
              words="Why Care & Hospitality Teams Choose Us"
              className="text-3xl sm:text-4xl font-serif text-foreground mb-12 text-center"
            />
            <div className="grid gap-6">
              {[
                "Direct on-site visits across the UK to understand your actual setup",
                "Plain English guidance — zero confusing IT jargon or vendor buzzwords",
                "Built around your existing tools, rotas, and daily operations",
                "Hands-on staff training and side-by-side walk-throughs",
                "A dedicated UK point of contact who picks up the phone",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 py-4 border-b border-border last:border-0"
                >
                  <span className="text-accent font-serif text-lg mt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-foreground leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="relative py-20 sm:py-24 bg-secondary/20 border-y border-border overflow-hidden">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-3">
                We Speak Your Language
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Whether you manage resident care plans, shift rotas, or front-of-house operations,
                we understand the daily workflow.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sectors.map((sector, index) => (
                <Link
                  key={index}
                  href={`/sectors/${sector.toLowerCase().replace(/ /g, "-")}`}
                  className="group block"
                >
                  <div className="p-5 border border-border bg-card hover:bg-secondary/60 transition-colors duration-200">
                    <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-200">
                      {sector}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <TextGenerateEffect
              words="Stop wasting hours on messy admin."
              className="text-3xl sm:text-4xl font-serif mb-4 text-foreground"
            />
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Every week lost to paper records, duplicate spreadsheets, and clunky systems
              is time taken away from your residents and guests. Let&apos;s have a 15-minute conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Schedule Free Discovery Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
