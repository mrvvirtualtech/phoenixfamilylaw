import {
  ArrowRight,
  FileText,
  Users,
  DollarSign,
  Heart,
  Building2,
  RefreshCw,
  Shield,
  Landmark,
  Handshake,
  UserCheck,
  ScrollText,
  BookOpen,
} from "lucide-react"

const practiceAreas = [
  {
    icon: FileText,
    title: "Divorce & Dissolution",
    description:
      "Strategic representation through contested divorce or dissolution, addressing property division, debt allocation, and financial protection.",
  },
  {
    icon: Users,
    title: "Child Custody & Parenting Time",
    description:
      "Protecting parental rights through custody disputes, parenting time disagreements, and post-decree modifications.",
  },
  {
    icon: DollarSign,
    title: "Child Support",
    description:
      "Establishing, modifying, and enforcing child support orders with accurate financial analysis under Ohio guidelines.",
  },
  {
    icon: Heart,
    title: "Spousal Support",
    description:
      "Strategic advocacy for equitable and sustainable spousal support, whether you are seeking or defending against a request.",
  },
  {
    icon: Building2,
    title: "Property & Asset Division",
    description:
      "Detailed financial review to identify, classify, and value marital and separate property for equitable distribution.",
  },
  {
    icon: RefreshCw,
    title: "Post-Decree Modifications",
    description:
      "Modifying custody, parenting time, child support, or spousal support when substantial changes in circumstances occur.",
  },
  {
    icon: Shield,
    title: "Military Divorce",
    description:
      "Specialized handling of military retirement division, federal protections, deployment parenting plans, and health care benefits.",
  },
  {
    icon: Landmark,
    title: "High-Asset Divorce",
    description:
      "Disciplined financial analysis for complex estates including business interests, executive compensation, and investment portfolios.",
  },
  {
    icon: Handshake,
    title: "Divorce Mediation",
    description:
      "Structured negotiation that reduces conflict, protects privacy, and encourages cooperative solutions while preserving legal rights.",
  },
  {
    icon: UserCheck,
    title: "Parental Rights Protection",
    description:
      "Advocating firmly for mothers and fathers to preserve meaningful parent-child relationships through custody proceedings.",
  },
  {
    icon: ScrollText,
    title: "Prenuptial & Postnuptial Agreements",
    description:
      "Carefully structured agreements that protect business interests, inherited assets, and financial expectations.",
  },
  {
    icon: BookOpen,
    title: "Wills, Trusts & Estate Planning",
    description:
      "Aligning divorce outcomes with updated estate planning including wills, trusts, powers of attorney, and health care directives.",
  },
]

export function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="border-t border-border bg-secondary py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Areas of Practice
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Comprehensive Family Law{" "}
              <span className="text-primary">Representation</span>
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            From negotiated settlements to courtroom advocacy, Phoenix Family Law
            provides steady guidance at every stage of the legal process.
          </p>
        </div>

        {/* Practice area grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="group flex flex-col bg-card p-8 transition-colors hover:bg-muted"
            >
              <area.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {area.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn More <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
