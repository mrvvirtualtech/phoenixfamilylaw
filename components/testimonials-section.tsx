import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Kim handled my divorce and custody case. She always had my best interest at heart, even if I didn't quite understand the law. Kim not only understood the law but also realized that different people work in different ways and knew how to ensure my interests were protected. She listened patiently and communicated with me so that I felt heard. I would not hesitate to call her for any future needs.",
    author: "Kathryn C.",
  },
  {
    quote:
      "I hired Ms. Farias to handle my case. She was very responsive, thorough, and knowledgeable regarding the law and how to protect our best interests. She was reasonable and very easy to work with. Should I ever need legal assistance in the future, I know I can trust her to take care of it.",
    author: "Barbara B.",
  },
  {
    quote:
      "I hired Farias Law and worked with Kim and Rob. I am beyond satisfied with their exceptional service. Their knowledge of family law allowed them to advise me of every minute detail and ultimately saved me tens of thousands of dollars. They were very responsive to all my communications, which made the entire process easy and stress-free. I highly recommend Kim and Rob.",
    author: "John C.",
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-t border-border py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Client Testimonials
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              What Our Clients{" "}
              <span className="text-primary">Say About Us</span>
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Our clients trust us during some of the most difficult periods of
            their lives. Their words reflect our commitment to diligence,
            clarity, and results.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-sm border border-border bg-card p-8 transition-all hover:border-primary/30"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="mt-6 h-8 w-8 text-primary/20" />

              {/* Quote text */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-border pt-6">
                <p className="font-serif text-base font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Verified Client
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
