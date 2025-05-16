'use client'
import React from "react";
import { TrophyIcon, CalendarIcon, UsersIcon } from "@heroicons/react/24/outline";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ClanWars() {
  const router = useRouter()
  return (
    <section className="min-h-screen bg-white text-gray-900">
      
      {/* Hero Section */}
      <div className="relative w-full md:h-[80vh] h-[50vh] overflow-hidden">
        <Image
          src="/static/clanWars.png"
          alt="ClanWars Hero"
          layout="fill"
          objectFit="cover"
          objectPosition={'bottom'}
          className="brightness-90"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            ClanWars: Anime Battle Royale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-xl text-lg"
          >
            Form your clans and battle it out in the most awaited anime showdown of 2025.
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 md:px-10">
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center mb-10">Event Details</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[{
            icon: <MapPinIcon className="h-6 w-6 text-indigo-600" />, title: "Venue", text: "Pacific D21 Mall, Studio 21 Dwarka, Delhi", action :()=>router.push('https://maps.app.goo.gl/XUcT3PJMhDfQuWBs8')
          }, {
            icon: <CalendarDaysIcon className="h-6 w-6 text-indigo-600" />, title: "Date", text: "15th June 2025"
          }, {
            icon: <UsersIcon className="h-6 w-6 text-indigo-600" />, title: "Capacity", text: "180 Participants – Register Early!"
          }].map(({ icon, title, text, action=()=>{} }, i) => (
            <motion.div
            onClick={action}
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl bg-gray-50 border border-gray-200 p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                {icon}
                <div>
                  <h3 className="text-md font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-700">{text}</p>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </motion.div>

        {/* Segment Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center mb-6">Battle Segments</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-base mb-14">
            <li className="bg-white rounded-lg p-4 border">Cosplay Showdown</li>
            <li className="bg-white rounded-lg p-4 border">Ultimate Anime Trivia</li>
            <li className="bg-white rounded-lg p-4 border">Charades: Guess the Scene</li>
            <li className="bg-white rounded-lg p-4 border">Clan Dance Face-off</li>
            <li className="bg-white rounded-lg p-4 border">Voice Acting Battle</li>
            <li className="bg-white rounded-lg p-4 border">Rapid Fire Quiz</li>
          </ul>
        </motion.div>

        {/* Gallery Section */}
        {/* <h2 className="text-2xl font-bold text-center mb-6">Event Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {["clanwars1.jpg", "clanwars2.jpg", "clanwars3.jpg"].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={`/images/${img}`}
                alt={`ClanWars view ${idx + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div> */}

        {/* Call to Action Section */}
        <div className="text-center">
          <p className="text-xl font-medium mb-4">Ready to battle?</p>
          <Link href='https://greet.fydo.in/summer-anime-fiesta-clan-wars-at-pacific-d21-studio-dwarka-sector-21'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition"
            >
            Join Your Clan
          </motion.button>
            </Link>
        </div>
      </div>
    </section>
  );
}
