import { ArrowRight, Calendar } from "lucide-react"

const blogPosts = [
  {
    title: "Military Separation Agreements and Divorce in Ohio",
    date: "February 10, 2026",
    excerpt:
      "Military separation agreements and divorce present unique challenges for service members and their spouses. Ohio law intersects with federal regulations governing military benefits, retirement division, and service member protections.",
    slug: "#",
  },
  {
    title: "Separation vs. Divorce in Ohio: What Is the Difference?",
    date: "February 12, 2026",
    excerpt:
      "Deciding how to legally end a marriage can be difficult. In Ohio, couples may pursue divorce or choose to live separately without formally dissolving the marriage. Each option carries different legal implications.",
    slug: "#",
  },
  {
    title: "A Guide to Military Retirement and Divorce in Ohio",
    date: "February 14, 2026",
    excerpt:
      "Divorce can become more complex when military retirement benefits are involved. Federal law and Ohio domestic relations statutes govern how military pensions may be divided for long-term financial security.",
    slug: "#",
  },
]

export function BlogSection() {
  return (
    <section
      id="blog"
      className="border-t border-border bg-secondary py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Latest Insights
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Family Law Insights from{" "}
              <span className="text-primary">Our Blog</span>
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Staying informed is essential when facing divorce, custody disputes,
            or other family law matters.
          </p>
        </div>

        {/* Blog cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-all hover:border-primary/30"
            >
              {/* Colored top bar */}
              <div className="h-1 w-full bg-primary/20 transition-colors group-hover:bg-primary" />

              <div className="flex flex-1 flex-col p-8">
                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </div>

                {/* Title */}
                <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <a
                  href={post.slug}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary transition-opacity hover:opacity-80"
                >
                  Read More <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
