"use client";

import Image from "next/legacy/image";
import { Typography } from "@material-tailwind/react";

const SPONSORS = [
  "go-stops",
  "pacific-d21b",
  'studio_21'
];

export function SponsoredBy() {
  return (
    <section className="py-16 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8 md:text-2xl text-xl bg-gradient-to-b from-pink-400 to-red-500 bg-clip-text text-transparent">
          VENUE PARTNERS
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {SPONSORS.map((logo, key) => (
            <div className="relative w-24 h-24 md:w-40 md:h-40">
            <Image
            layout="fill"
            objectFit="contain"
            key={key}
            src={`/logos/${logo}.png`}
            alt={logo}
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
