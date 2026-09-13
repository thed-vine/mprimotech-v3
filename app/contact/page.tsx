"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/components/ui/3d-card";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    b2bContract: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your EmailJS credentials
      const templateId = "template_hjm0zud";

      const serviceId = "service_u8ksijg";
      const publicKey = "ktFHFC2F9khjQQDVg";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        b2b_contract: formData.b2bContract ? "Yes" : "No",
        to_name: "MPrimo Tech Team",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      alert("Thank you for your inquiry! We will contact you shortly.");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        b2bContract: false,
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
          <BackgroundBeams className="absolute inset-0 opacity-30" />
          <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto px-2 mb-6">
              We're here to help. Contact our team to discuss your IT needs and
              how we can support your business.
            </p>
            <div className="max-w-md mx-auto text-sm sm:text-base">
              <p className="font-semibold mb-3">Schedule a short call. You'll get:</p>
              <ul className="space-y-2 text-left inline-block">
                <li>• Honest assessment of your current setup</li>
                <li>• Clear options tailored to your goals</li>
                <li>• Zero pressure, just straight answers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-8 sm:py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
              <CardContainer containerClassName="py-0" className="inter-var w-full">
                <CardBody className="h-full flex flex-col items-center text-center p-4 sm:p-6 bg-card border border-border hover:shadow-lg transition">
                  <CardItem translateZ={30}>
                    <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3 sm:mb-4" />
                  </CardItem>
                  <CardItem
                    as="h3"
                    translateZ={50}
                    className="text-sm sm:text-base font-bold text-foreground mb-2"
                  >
                    Email
                  </CardItem>
                  <CardItem translateZ={40}>
                    <a
                      href="mailto:info@mprimotech.com"
                      className="text-xs sm:text-sm text-primary hover:underline"
                    >
                      info@mprimotech.com
                    </a>
                  </CardItem>
                </CardBody>
              </CardContainer>
              <CardContainer containerClassName="py-0" className="inter-var w-full">
                <CardBody className="h-full flex flex-col items-center text-center p-4 sm:p-6 bg-card border border-border hover:shadow-lg transition">
                  <CardItem translateZ={30}>
                    <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3 sm:mb-4" />
                  </CardItem>
                  <CardItem
                    as="h3"
                    translateZ={50}
                    className="text-sm sm:text-base font-bold text-foreground mb-2"
                  >
                    Phone
                  </CardItem>
                  <CardItem translateZ={40}>
                    <a
                      href="tel:++443302237450"
                      className="text-xs sm:text-sm text-primary hover:underline"
                    >
                      +44 (330) 223-7450
                    </a>
                  </CardItem>
                </CardBody>
              </CardContainer>
              <CardContainer containerClassName="py-0" className="inter-var w-full">
                <CardBody className="h-full flex flex-col items-center text-center p-4 sm:p-6 bg-card border border-border hover:shadow-lg transition">
                  <CardItem translateZ={30}>
                    <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3 sm:mb-4" />
                  </CardItem>
                  <CardItem
                    as="h3"
                    translateZ={50}
                    className="text-sm sm:text-base font-bold text-foreground mb-2"
                  >
                    Hours
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ={40}
                    className="text-xs sm:text-sm text-muted-foreground"
                  >
                    24/7
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-8 sm:py-12 lg:py-16 bg-card">
          <div className="mx-auto max-w-4xl px-3 sm:px-6 lg:px-8">
            <div className="mb-6 sm:mb-8">
              <TextGenerateEffect
                words="Send us a Message"
                className="text-2xl sm:text-3xl text-foreground mb-3 sm:mb-4"
              />
              <p className="text-sm sm:text-base text-muted-foreground">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 border border-border rounded-lg focus:outline-none focus:border-primary bg-card text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2"
                  >
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 border border-border rounded-lg focus:outline-none focus:border-primary bg-card text-sm sm:text-base"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 border border-border rounded-lg focus:outline-none focus:border-primary bg-card text-sm sm:text-base"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 border border-border rounded-lg focus:outline-none focus:border-primary bg-card text-sm sm:text-base"
                    placeholder="+44 123 4567-890"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2"
                >
                  Service of Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 border border-border rounded-lg focus:outline-none focus:border-primary bg-card text-sm sm:text-base"
                >
                  <option value="">Select a service...</option>
                  <option value="managed-it">Managed IT Services</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="cloud">Cloud & Infrastructure</option>
                  <option value="digital-workplace">Digital Workplace</option>
                  <option value="network">Network & Connectivity</option>
                  <option value="backup">Backup & Business Continuity</option>
                  <option value="consultancy">Consultancy</option>
                  <option value="professional">Professional Services</option>
                  <option value="b2b-contracts">B2B IT Contracts</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 sm:px-4 border border-border rounded-lg focus:outline-none focus:border-primary bg-card text-sm sm:text-base"
                  placeholder="Tell us about your IT challenges and goals..."
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="b2bContract"
                  name="b2bContract"
                  checked={formData.b2bContract}
                  onChange={handleChange}
                  className="w-4 h-4 border border-border rounded cursor-pointer"
                />
                <label
                  htmlFor="b2bContract"
                  className="text-xs sm:text-sm text-muted-foreground cursor-pointer"
                >
                  I'm interested in learning about B2B IT Contracts
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white text-sm sm:text-base disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}