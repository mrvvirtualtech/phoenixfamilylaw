"use client"

import { useState } from "react"
import { Send, MapPin, Phone as PhoneIcon, Mail } from "lucide-react"

const contactMethods = ["Email", "Text Message", "Telephone", "WhatsApp"]

export function ContactSection() {
  const [selectedMethod, setSelectedMethod] = useState("Email")

  return (
    <section
      id="contact"
      className="border-t border-border bg-secondary py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left column - Info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Get in Touch
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              <span className="text-balance">
                Contact Us About{" "}
                <span className="text-primary">Your Case</span>
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {"We're committed to ensuring your peace of mind throughout the legal process. Don't hesitate to reach out for any additional questions or assistance \u2014 we're here to accommodate your needs and provide the support you deserve."}
            </p>

            {/* Contact details */}
            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Cleveland, Ohio
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Serving Cuyahoga County &amp; Northeast Ohio
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10">
                  <PhoneIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Call Us
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Direct attorney communication
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Email Us
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Confidential and responsive
                  </p>
                </div>
              </div>
            </div>

            {/* Serving areas */}
            <div className="mt-10 border-t border-border pt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Serving Communities Throughout Northeast Ohio
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Lakewood, Westlake, Rocky River, Parma, Strongsville, North
                Olmsted, Middleburg Heights, and surrounding areas.
              </p>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="rounded-sm border border-border bg-card p-8 lg:p-10">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="(555) 000-0000"
                />
              </div>

              {/* Preferred contact method */}
              <div>
                <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Preferred Method of Contact
                </label>
                <div className="flex flex-wrap gap-2">
                  {contactMethods.map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setSelectedMethod(method)}
                      className={`rounded-sm border px-4 py-2 text-xs font-medium transition-all ${
                        selectedMethod === method
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Tell Us About Your Situation
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Briefly describe your situation and legal needs..."
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                Submit Request
              </button>

              <p className="text-center text-xs text-muted-foreground">
                All consultations are confidential. Your information will never
                be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
