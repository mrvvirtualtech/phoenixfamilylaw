import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center lg:px-8">
        {/* Tagline */}
        <p className="mb-6 inline-block border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Cleveland Divorce &amp; Family Law Attorneys
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-balance">
            LCW{" "}
            <span className="text-primary">{"Family Law"}</span>
          </span>
        </h1>
        <hr></hr>
        <div className="mx-auto mt-8 max-w-3xl">
          <h1 className="font-serif font-bold leading-relaxed sm:text-3xl md:text-4xl lg:text-5xl text-muted-foreground">
          <span className="text-balance">
            Rising Forward Through{" "}<br></br>
            <span className="text-primary">{"Life's Transitions"}</span>
          </span>
        </h1>
        </div>
        

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Family law matters often arise during the most difficult moments of
          life. At LCW Family Law, we believe these moments are the beginning
          of something new. Like the phoenix, families can rise from challenging
          circumstances stronger, clearer, and better prepared for the future.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#practice-areas"
            className="flex items-center gap-2 rounded-sm border border-border px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Our Practice Areas
          </a>
        </div>

        {/* Trust markers */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-border pt-8">
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-primary">25+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              Years Experience
            </p>
          </div>
          <div className="hidden h-8 w-px bg-border sm:block" />
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-primary">
              Cuyahoga County
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              Domestic Relations Court
            </p>
          </div>
          <div className="hidden h-8 w-px bg-border sm:block" />
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-primary">
              Direct
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              Attorney Communication
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
