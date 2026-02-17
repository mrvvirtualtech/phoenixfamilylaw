import { FileEdit, Phone, Target, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileEdit,
    title: "Complete Our Contact Form",
    description:
      "Fill out our confidential contact form with details about your situation. All information is kept strictly private.",
  },
  {
    number: "02",
    icon: Phone,
    title: "Speak With an Attorney",
    description:
      "Speak directly with an attorney to discuss your situation, concerns, and legal options in a confidential setting.",
  },
  {
    number: "03",
    icon: Target,
    title: "Receive a Clear Strategy",
    description:
      "Receive a personalized legal strategy tailored to your specific goals, timeline, and circumstances.",
  },
  {
    number: "04",
    icon: ArrowRight,
    title: "Move Forward With Confidence",
    description:
      "Begin the next chapter with experienced legal guidance, steady communication, and purposeful action.",
  },
]

export function ProcessSection() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            How It Works
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              A Quick and Easy{" "}
              <span className="text-primary">Process</span>
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-8 -translate-x-0 translate-x-full bg-border lg:block" />
              )}
              <div className="flex flex-col">
                <span className="font-serif text-4xl font-bold text-primary/20">
                  {step.number}
                </span>
                <step.icon className="mt-4 h-5 w-5 text-primary" />
                <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Schedule Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
