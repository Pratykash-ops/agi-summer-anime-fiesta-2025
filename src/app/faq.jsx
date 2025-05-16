"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
const FAQS = [
  {
    question: "Is the event free?",
    answer: "No, the entry is paid — you need to register in advance as we're capping it at limited attendees to keep it cozy and interactive."
  },
  {
    question: "Where exactly is it happening in Delhi?",
    answer: "There will be 2 venues ie: Pacific D21 for Clan Warsand GoStops for  VIP Event. It is a central location easily reachable by metro and public transport."
  },
  {
    question: "What are the timings?",
    answer: "The timings are 11:00 AM to 5:30PM for both events"
  },
  {
    question: "Will there be baisc amenties within the venue",
    answer: "Yes, all basic amenties like bathroom and drinking water will be availble "
  },
  {
    question: "Will there be food and drinks?",
    answer: "Yes — we're preparing for Japanese snacks stall to be available. Bring some cash just in case."
  },
  {
    question: "Can I bring a friend?",
    answer: "Only if they register separately. Each entry is individual due to limited space."
  },
  {
    question: "How do I stay updated?",
    answer: "Follow us on Instagram @animegroupindia or join our Discord server. All updates will be posted there first."
  }
];


export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4 md:text-2xl text-xl bg-gradient-to-b from-pink-400 to-red-500 bg-clip-text text-transparent">
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-8 lg:w-3/5 !text-gray-500"
          >
            “Got Questions?”
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ question:title,answer: desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left md:text-lg text-sm text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500 md:text-normal text-sm"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;
