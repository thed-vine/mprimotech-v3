import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="group h-full flex flex-col p-6 border border-border bg-card hover:bg-secondary/50 transition-colors duration-200">
        <div className="text-foreground mb-4 group-hover:text-accent transition-colors duration-200">
          {icon}
        </div>
        <h3 className="font-semibold text-foreground text-[15px] mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-5">
          {description}
        </p>
        <div className="flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-200 mt-auto">
          Learn More
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  )
}
