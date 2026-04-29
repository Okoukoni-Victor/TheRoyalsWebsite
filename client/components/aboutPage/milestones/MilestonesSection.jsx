"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";

const milestones = [
  {
    id: "2020-2024",
    year: "2020-2024",
    title: "2020-2024: Foundation",
    items: [
      "Launched our very first Clothe A BoyChild Initiative (CABI) outreach in 2020, reaching 100 boys at Orile Road, Agege, Lagos, Nigeria.",
      "During the second edition, we clothed 100 boys in Eruwa, Ibadan, Nigeria.",
      "During the third edition, the organisation clothed 150 boys in Atan-Ota, Ogun State, Nigeria.",
      "During the fourth edition, we clothed 150 boys in Mafoluku, Oshodi, Lagos, Nigeria.",
      "We clocked 5 years in 2024 and had a massive turnout in support and beneficiaries which encompassed 500 participants including boys, girls, and parents in Ajegunle, Lagos, Nigeria.",
    ],
  },
  {
    id: "2025",
    year: "2025",
    title: "2025: Expanded Reach",
    items: [
      "We had our first school edition of Clothe A BoyChild Initiative (CABI) with 200 boys who received underwear and socks ahead of the new term at Pen-Cinema, Agege, Lagos, Nigeria.",
      "Equipped 250 pupils through the first Urgent 2K Campaign with essential school materials: bags, books and writing materials at Ndiechi-OnuEbonyi Community Primary School, Izzi, Ebonyi State, Nigeria.",
    ],
  },
  {
    id: "2026",
    year: "2026",
    title: "2026: Continued Growth",
    items: [
      "The organisation continues to expand its reach and deepen its impact through more targeted initiatives, community-centred engagement, and increased support for children and families.",
    ],
  },
];

export default function MilestonesSection() {
  const [activeId, setActiveId] = useState("2020-2024");

  const activeMilestone = milestones.find((m) => m.id === activeId);

  return (
    <section className="section !pt-0 bg-white">
      <div className="flex flex-col gap-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          <div className="flex flex-col gap-4">
            <h3>Our Milestones</h3>

            <p className="max-w-xs md:max-w-sm text-grey-300">
              Key moments that shaped our organization and expanded our impact.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Timeline */}
            <div className="flex flex-col">
              {milestones.map((milestone, index) => (
                <div key={milestone.id} className="flex items-start gap-4">
                  {/* Dot + Line */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3 h-3 mt-3 rounded-full shrink-0 ${
                        milestone.id === activeId
                          ? "bg-blue-300"
                          : "bg-grey-200"
                      }`}
                    />

                    {index < milestones.length - 1 && (
                      <div className="w-px min-h-[80px] bg-blue-300" />
                    )}
                  </div>

                  {/* Year Filter Button */}
                  <button
                    type="button"
                    onClick={() => setActiveId(milestone.id)}
                    aria-label={`Show milestones for ${milestone.year}`}
                    aria-pressed={milestone.id === activeId}
                    className={`cursor-pointer px-4 py-1.5 rounded-[30px] text-sm font-medium text-white ${
                      milestone.id === activeId ? "bg-blue-300" : "bg-grey-200"
                    }`}
                  >
                    {milestone.year}
                  </button>
                </div>
              ))}
            </div>

            {/* Content */}
            <div aria-live="polite" className="flex flex-col gap-6">
              <h5 id={activeMilestone.id}>{activeMilestone.title}</h5>

              <ul
                aria-labelledby={activeMilestone.id}
                className="flex flex-col gap-4"
              >
                {activeMilestone.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-[14px]">
                    <Image
                      src="/circle-check.svg"
                      alt="circle check"
                      width={24}
                      height={25}
                      className="shrink-0 mt-2"
                    />

                    <p className="max-w-sm lg:max-w-md text-grey-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            label="Support an Initiative"
            href="/contact"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
