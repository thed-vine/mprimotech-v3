import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function SectorsPage() {
  const sectors = [
    {
      name: "Healthcare & Care Homes",
      slug: "healthcare",
      description:
        "Practical IT systems and admin automation for care homes, clinics, and healthcare providers.",
      icon: "",
      challenges: ["Care Record Admin", "Shift Rota Tracking", "CQC Compliance Paperwork"],
    },
    {
      name: "Retail & Hospitality",
      slug: "retail",
      description: "POS reliability, booking systems, inventory management, and venue admin streamlining.",
      icon: "",
      challenges: ["Booking & Rota Admin", "Inventory Tracking", "Point of Sale Reliability"],
    },
    {
      name: "Education",
      slug: "education",
      description: "Learning management systems, student data protection, and reliable campus-wide IT infrastructure.",
      icon: "",
      challenges: ["Learning Continuity", "Data Protection", "System Scalability"],
    },
    {
      name: "Manufacturing",
      slug: "manufacturing",
      description:
        "Production support and practical IT solutions for manufacturing facilities and supply chain coordination.",
      icon: "",
      challenges: ["Production Continuity", "Supply Chain Integration", "Equipment Connectivity"],
    },
    {
      name: "Financial Services",
      slug: "financial-services",
      description:
        "Secure IT solutions for financial practices and professional services with compliance focus.",
      icon: "",
      challenges: ["Regulatory Compliance", "Data Security", "High Availability"],
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Specialized IT solutions tailored to the unique requirements and challenges of your industry.
            </p>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector) => (
                <Link key={sector.slug} href={`/sectors/${sector.slug}`}>
                    <div className="group h-full flex flex-col p-8 rounded-lg border border-border bg-card hover:shadow-lg hover:border-accent/60 transition-all duration-300">
                    <div className="text-5xl mb-4">{sector.icon}</div>
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition">
                      {sector.name}
                    </h2>
                    <p className="text-muted-foreground mb-6 flex-grow">{sector.description}</p>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      Explore Solutions
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't see your industry?</h2>
            <p className="text-lg opacity-90 mb-8">
              We work with organizations across all sectors. Let's discuss your specific IT needs.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
