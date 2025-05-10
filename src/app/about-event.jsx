"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Live Your Favorite Characters",
    extraClass: 'bg-[url("/static/chainsawman.jpeg")] ',
    description:
      "Come in cosplay or just to admire the craftsmanship — the energy is electric either way. ",
    subTitle: "Cosplay",
  },
  {
    title: "Exclusive Merch & Art",
    extraClass: 'bg-[url("/static/merch.jpg")] ',
    description:
      "From handmade charms to stunning fan art — support local anime artists and creators.",
    subTitle: "Merchandise",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
        About the event
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Why Attend?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        This isn&apos;t just another fan meet — it&apos;s a carefully curated slice of Japan&apos;s heart, crafted by true anime lovers, for anime lovers.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
             extraClass={'bg-[url("/static/fans-02.jpeg")] '}
            subTitle="Community "
            title="Meet Like-Minded Fans"
            description="Whether you're a shy senpai or a loud kouhai, find your tribe. Laugh, vibe, and create unforgettable friendships."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
