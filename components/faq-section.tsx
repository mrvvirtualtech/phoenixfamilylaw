"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does a divorce take in Ohio?",
    answer:
      "The length of a divorce in Ohio depends on whether the case is contested or uncontested. An uncontested dissolution may be completed in a few months if both parties agree on all terms. A contested divorce involving disputes over custody, property division, or support may take significantly longer. Court schedules in Cuyahoga County and surrounding Northeast Ohio courts also impact timing. Each case is unique and should be evaluated individually.",
  },
  {
    question: "How is child custody decided in Ohio?",
    answer:
      "Ohio courts determine child custody based on the best interests of the child. Judges consider factors such as each parent's involvement, the child's adjustment to home and school, the mental and physical health of the parties, and the ability of parents to cooperate. Courts may allocate shared parenting or designate one parent as the residential parent. Careful preparation and presentation of evidence are critical in custody cases.",
  },
  {
    question: "How is property divided in an Ohio divorce?",
    answer:
      "Ohio follows the principle of equitable distribution. This means marital property is divided fairly, though not necessarily equally. Marital assets may include real estate, retirement accounts, businesses, and debts acquired during the marriage. Separate property may be excluded if properly documented. Courts evaluate multiple statutory factors when determining a fair division of assets and liabilities.",
  },
  {
    question:
      "Can child support or spousal support be modified in Ohio?",
    answer:
      "Yes. Child support or spousal support may be modified if there has been a substantial change in circumstances. Examples include significant income changes, job loss, relocation, or changes in a child's needs. Modifications require court approval and proper legal filing. Failure to seek modification through the court can result in continued enforcement of the existing order.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Common Questions
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Frequently Asked{" "}
              <span className="text-primary">Questions</span>
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="mt-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-sm border border-border bg-card px-6"
              >
                <AccordionTrigger className="py-6 text-left font-serif text-base font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional CTA */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          When your family, finances, and future are at stake, experience
          matters.{" "}
          <a href="#contact" className="font-semibold text-primary hover:underline">
            Contact Phoenix Family Law Group
          </a>{" "}
          to speak with a Cleveland family law attorney who will protect your
          interests.
        </p>
      </div>
    </section>
  )
}
