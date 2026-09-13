import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, MessageCircle, Calendar, BookOpen } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting to Know Us",
      questions: [
        {
          q: "Why should we choose MPrimo Tech?",
          a: "Most IT firms try to solve problems remotely with tickets and generic software licenses. We do the opposite: we come directly on site to your care home, clinic, hotel, or venue. We sit with your admin and frontline staff, shadow their actual day-to-day paperwork, map where time is wasted, and automate it.",
        },
        {
          q: "What types and sizes of businesses do you work with?",
          a: "We specialise in independent and multi-site care homes, clinics, domiciliary care agencies, hotels, restaurants, and hospitality venues across the UK. Whether you have 10 staff or 100, if your team is bogged down by duplicate entry, paper forms, and messy rotas, we can help.",
        },
        {
          q: "How does the on-site review process work?",
          a: "We visit your location for a half-day or full-day operational review. We observe how patient records, handovers, bookings, rotas, and invoices are handled. Within days, we give you a clear map of bottlenecks and a practical automation plan — with zero disruption to your residents or guests.",
        },
      ],
    },
    {
      category: "What We Automate",
      questions: [
        {
          q: "What kind of admin can you automate?",
          a: "Common examples include: daily shift handovers and care log transcriptions, staff rota updates and absence tracking, supplier invoice processing and reconciliation, customer/resident intake forms, compliance checklist tracking, and sync between legacy systems and modern cloud tools.",
        },
        {
          q: "Do we have to replace all our current software?",
          a: "No. In fact, we avoid forcing staff to learn completely new systems whenever possible. We connect your existing tools — spreadsheets, email, accounting software, and management portals — so information flows automatically without manual copy-pasting.",
        },
        {
          q: "Will our staff need heavy technical training?",
          a: "Not at all. We design automations to make work easier and simpler, not more complicated. If staff can send an email or fill in a simple form, they can use our workflows.",
        },
      ],
    },
    {
      category: "Costs & Working Together",
      questions: [
        {
          q: "How much does an on-site review and automation cost?",
          a: "We provide straightforward, transparent pricing. We start with a fixed-fee on-site workflow review. If you choose to have us build the automations, we provide a fixed-price proposal upfront so there are no surprises.",
        },
        {
          q: "How quickly do we see results?",
          a: "Most admin automations are delivered and operational within 2 to 3 weeks of the initial on-site review, immediately freeing up hours of manual paperwork each week.",
        },
        {
          q: "Can you handle our data protection and UK GDPR compliance?",
          a: "Yes. All workflows and integrations are built strictly in compliance with UK GDPR and Data Protection regulations, ensuring sensitive resident, patient, and staff records remain secure.",
        },
      ],
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl">
              Everything you need to know about how we come on site, map messy admin workflows, and automate them for UK care and hospitality teams.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((faq, qIndex) => (
                    <details
                      key={qIndex}
                      className="group border border-border/60 bg-card rounded-xl hover:border-accent/60 transition duration-200 overflow-hidden"
                    >
                      <summary className="flex justify-between items-center font-semibold text-foreground p-5 cursor-pointer list-none select-none focus:outline-none">
                        <span className="text-base sm:text-lg leading-snug pr-4">{faq.q}</span>
                        <ChevronDown className="h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 group-open:-rotate-180" />
                      </summary>
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-muted-foreground leading-relaxed text-base border-t border-border/40 pt-4">
                          {faq.a}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Help */}
        <section className="py-16 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Still have questions?</h2>
              <p className="text-muted-foreground">We are happy to jump on a quick call or visit you on site to discuss your workflows.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="p-6 sm:p-8 rounded-2xl bg-secondary/20 hover:bg-secondary/40 hover:shadow-sm transition border border-border/50 flex flex-col items-center text-center">
                <MessageCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Send Us a Message</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Tell us a bit about your current paperwork challenges and we'll get back to you promptly.
                </p>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-secondary/20 hover:bg-secondary/40 hover:shadow-sm transition border border-border/50 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3">
                   <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Recommended</span>
                </div>
                <Calendar className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Book an On-Site Review</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Schedule an on-site visit or a 20-minute discovery call with our UK automation team.
                </p>
                <Button asChild className="w-full mt-auto bg-primary text-white hover:bg-primary/90">
                  <Link href="/book-consultation">Book On-Site Review</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's solve your messy admin.</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Stop losing hours every week to duplicate data entry, paper forms, and rota confusion. Let us come on site and fix it.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12">
              <Link href="/book-consultation">Book an On-Site Review</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}