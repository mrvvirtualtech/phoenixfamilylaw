import { Scale, Shield, Users, Target, Gavel, UserCheck } from "lucide-react"

const features = [
  {
    icon: Scale,
    title: "Deep Court Knowledge",
    description:
      "Deep knowledge of Cleveland area domestic relations courts, judges, and magistrates.",
  },
  {
    icon: Shield,
    title: "Trial Readiness",
    description:
      "Strong negotiation supported by thorough trial preparation and courtroom readiness.",
  },
  {
    icon: Users,
    title: "Direct Communication",
    description:
      "You speak directly with your attorney. No assistants, no runaround.",
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description:
      "Long-term strategic planning focused on sustainable stability and practical results.",
  },
  {
    icon: Gavel,
    title: "Litigation Prepared",
    description:
      "We build every case as though it may proceed to trial, protecting your leverage.",
  },
  {
    icon: UserCheck,
    title: "Personalized Strategy",
    description:
      "Tailored legal strategy unique to your circumstances, goals, and family.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Why Choose LCW Family Law
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Compassionate Attorneys Focused on{" "}
              <span className="text-primary">Results</span>
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Ohio family law is complex, and every case carries long-term
            consequences for finances, children, and personal stability. With
            over 25 years of experience, our firm delivers structure during
            uncertainty and strength during instability.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-sm border border-border bg-card p-8 transition-all hover:border-primary/30 hover:bg-secondary"
            >
              <feature.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider quote */}
        <div className="mt-20 border-l-2 border-primary pl-8">
          <blockquote className="font-serif text-xl italic leading-relaxed text-foreground sm:text-2xl">
            {
              "\"We do not just resolve legal disputes. We help clients reclaim control, rebuild their lives, and begin the next chapter with clarity and strength.\""
            }
          </blockquote>
          <p className="mt-4 text-sm font-medium uppercase tracking-wider text-primary">
            LCW Family Law
          </p>
        </div>
      </div>
    </section>
  )
}
