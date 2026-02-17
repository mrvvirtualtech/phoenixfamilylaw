const practiceLinks = [
  "Divorce & Dissolution",
  "Child Custody",
  "Child Support",
  "Spousal Support",
  "Property Division",
  "Post-Decree Modifications",
]

const resourceLinks = [
  "Military Divorce",
  "High-Asset Divorce",
  "Divorce Mediation",
  "Prenuptial Agreements",
  "Estate Planning",
  "Blog",
]

const companyLinks = [
  "About Us",
  "Our Attorneys",
  "Testimonials",
  "Contact",
  "FAQ",
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="font-serif text-xl font-bold tracking-wide text-primary">
                PHOENIX
              </span>
              <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Family Law
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Proudly serving individuals and families throughout Cleveland and
              Northeast Ohio with strategic legal guidance paired with
              compassion, discretion, and respect.
            </p>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Cleveland, Ohio
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Cuyahoga County &amp; Surrounding Communities
              </p>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Practice Areas
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {practiceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#practice-areas"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Resources
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Phoenix Family Law. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
