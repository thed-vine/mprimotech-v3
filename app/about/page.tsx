import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Users, Zap, Target } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/components/ui/3d-card";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "On-Site First",
      description:
        "We don't try to understand your operations from behind a desk. We come to your site, watch the actual admin happen, and speak directly with your staff.",
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Practical Automation",
      description:
        "We don't build over-engineered software. We eliminate repetitive data entry, paper forms, and dual-entry bottlenecks using tools your team can actually run.",
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Clarity Over Jargon",
      description:
        "No buzzwords or complex tech jargon. We deliver straightforward workflows, clear handovers, and reliable day-to-day admin relief.",
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Personal Partnership",
      description:
        "As a small UK firm, you deal directly with the specialists who review your processes and build your automations — no call centres, no ticket queues.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
          <BackgroundBeams className="absolute inset-0 opacity-30" />
          <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              A Small UK Firm Fixing Messy Admin.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-3xl px-2">
              We come on site to your care home, clinic, or hospitality venue, shadow your staff, map where admin bottlenecks happen, and build reliable automations.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-8 sm:py-12 lg:py-16 bg-card">
          <div className="mx-auto max-w-4xl px-3 sm:px-6 lg:px-8">
            <TextGenerateEffect
              words="How We Started"
              className="text-2xl sm:text-3xl text-foreground mb-4 sm:mb-6"
            />
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                MPrimo Tech is an independent UK firm established to solve a very specific problem: front-line teams in care and hospitality spend far too many hours trapped doing repetitive administrative tasks.
              </p>
              <p>
                From hand-written shift handovers and duplicate rota spreadsheets to chaotic invoice chasing and booking coordination, messy paperwork steals valuable time from residents, patients, and guests.
              </p>
              <p>
                Instead of selling bloated generic software packages remotely, we visit your facility in person. We sit down with your team, observe your day-to-day workflows, identify the exact friction points, and automate them cleanly.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-8 sm:py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="p-4 sm:p-6 lg:p-8 rounded-lg bg-card border border-border hover:shadow-lg transition">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To make technology the easiest part of your business day. We exist to handle the digital chaos, giving you the clarity and stability you need to drive transformation and growth.
                </p>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 rounded-lg bg-card border border-border hover:shadow-lg transition">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We see a future where IT bridges the gap between where you are and where you want to go. We strive to be the partner that turns "technology" from a headache into your biggest competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-8 sm:py-12 lg:py-16 bg-card">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
              <TextGenerateEffect
                words="What Drives Us"
                className="text-2xl sm:text-3xl text-foreground justify-center"
              />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <CardContainer
                  key={index}
                  containerClassName="py-0"
                  className="inter-var w-full"
                >
                  <CardBody className="group h-full flex flex-col items-center text-center p-4 sm:p-6 bg-secondary/30 border border-transparent hover:border-border hover:bg-card transition-colors duration-200">
                    <CardItem
                      translateZ={30}
                      className="text-primary mb-3 sm:mb-4 flex justify-center"
                    >
                      {value.icon}
                    </CardItem>
                    <CardItem
                      as="h3"
                      translateZ={50}
                      className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3"
                    >
                      {value.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ={40}
                      className="text-xs sm:text-sm text-muted-foreground"
                    >
                      {value.description}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 sm:py-12 lg:py-16 bg-primary text-white">
          <div className="mx-auto max-w-3xl px-3 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Stop Wasting Hours on Messy Admin?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-6 sm:mb-8 px-2">
              Let us come on site, shadow your team, and map out exactly how much time you can save with straightforward automation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/book-consultation">Book an On-Site Review</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
