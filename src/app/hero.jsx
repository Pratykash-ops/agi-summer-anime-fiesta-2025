"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative h-[69vh] md:min-h-screen w-full bg-[url('/static/hero-01.jpg')] bg-cover bg-center bg-no-repeat">
      
    <div className="absolute inset-0 h-full w-full bg-black/60" />
    <div className="grid h-[69vh] md:min-h-screen px-4 md:px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography variant="h3" color="white" className="mb-2 md:text-lg text-sm">
          This June In New Delhi
        </Typography>
        <Typography variant="h1" color="white" className="text-3xl md:text-6xl lg:max-w-3xl">
          AGI Presents <span className="text-orange-500">Summer Anime Fiesta 2025</span>
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl text-lg lg:text-xl"
        >
          Join us on a Celebration of Anime, Summer, and You.
        </Typography>
        <div className="flex items-center gap-4">
          <Link href="/passes">
          <Button variant="gradient" color="white">
            Buy Tickets
          </Button>
          </Link>
          {/* <IconButton className="rounded-full bg-white p-6">
            <PlayIcon className="h-4 w-4 text-gray-900" />
          </IconButton> */}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;
