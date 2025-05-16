// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Summer Anime Fiesta 2025 | Delhi's Ultimate Anime Event",
  description:
    "Join us for Summer Anime Fiesta 2025 — an exclusive anime celebration in Delhi with cosplay, screenings, games & more. Register now!",
};
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <AboutEvent />
      {/* <OurStats /> */}
      <EventContent />
      <SponsoredBy />
      <Faq />
      <Footer />
    </>
  );
}
