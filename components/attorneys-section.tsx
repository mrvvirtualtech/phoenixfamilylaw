import Image from "next/image"

const attorneys = [
  {
    name: "Kimberly L. Farias",
    role: "Attorney",
    image: "/images/attroney-kim.jpg",
    description:
      "Kimberly brings compassionate yet decisive legal counsel to every family law matter, ensuring clients feel heard while receiving strategic representation.",
  },
  {
    name: "Robert A. Farias",
    role: "Attorney",
    image: "/images/attroney-rob.jpg",
    description:
      "Robert combines deep courtroom experience with thoughtful preparation, delivering results-driven advocacy in complex divorce and custody cases.",
  },
]

export function AttorneysSection() {
  return (
    <section
      id="attorneys"
      className="border-t border-border bg-secondary py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Meet Our Team
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Get to Know the{" "}
              <span className="text-primary">Attorneys</span>
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Our team combines legal expertise with common sense to create a
            cost-effective approach tailored to your needs.
          </p>
        </div>

        {/* Attorney cards */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2">
          {attorneys.map((attorney) => (
            <div
              key={attorney.name}
              className="group overflow-hidden rounded-sm border border-border bg-card transition-all hover:border-primary/30"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src={attorney.image}
                  alt={`Portrait of ${attorney.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {attorney.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {attorney.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {attorney.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
