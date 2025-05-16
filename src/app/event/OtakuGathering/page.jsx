'use client'
import React from "react";
import { MapPinIcon, CalendarDaysIcon, UsersIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion } from "framer-motion";
import Link  from 'next/link'
import { useRouter } from "next/navigation";
export default function GoStopsOtakuGathering() {
  const router = useRouter()
  return (
    <section className="min-h-screen bg-white py-16 px-6 md:px-10 text-gray-900 max-w-screen overflow-x-hidden">
      <div className="absolute md:block hidden inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-600 rounded-full filter blur-[100px] opacity-30"></div>
        <div className="absolute top-[60%] right-10 w-64 h-64 bg-yellow-400 rounded-full filter blur-[120px] opacity-25"></div>
        <div className="absolute top-[30%] left-[35%] w-96 h-96 bg-blue-400 rounded-full filter blur-[140px] opacity-30"></div>
      </div>
      <div className="md:max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          GoStops VIP Event
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-lg mb-10 max-w-3xl mx-auto"
        >
          An exclusive 35-member anime meetup at GoStops Hostel, Delhi. Dive into the anime culture, make real connections, and vibe with fellow otakus in an urban artistic setting.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[{
            icon: <MapPinIcon className="h-6 w-6 text-blue-600" />, title: "Venue", text: "GoStops Hostel, Connaught Place, Delhi", action :()=>router.push('https://maps.app.goo.gl/1v9ovuA7FnaB8yCz8')
          }, {
            icon: <CalendarDaysIcon className="h-6 w-6 text-blue-600" />, title: "Date", text: "8th June 2025"
          }, {
            icon: <UsersIcon className="h-6 w-6 text-blue-600" />, title: "Capacity", text: "35 Only – Register Early"
          }].map(({ icon, title, text }, i) => (
            <motion.div
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-center mb-4">Event Highlights</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-base mb-14">
            <li className="bg-gray-100 rounded-lg p-4">Anime Talks & Debates</li>
            <li className="bg-gray-100 rounded-lg p-4">Retro Screenings & Vibe Lounge</li>
            <li className="bg-gray-100 rounded-lg p-4">Fan Art Showcase</li>
            <li className="bg-gray-100 rounded-lg p-4">Anime Quiz & Otaku Trivia</li>
            <li className="bg-gray-100 rounded-lg p-4">Cosy Corners & Photos</li>
            <li className="bg-gray-100 rounded-lg p-4">Snacks & Chill Zone</li>
          </ul>
        </motion.div>

        <h2 className="text-2xl font-semibold text-center mb-6">Venue Glimpses</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {["gsV_1.jpg", "gsV_2.jpg"].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={`/image/${img}`}
                alt={`Venue view ${idx + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-medium mb-4">Want in?</p>
          <Link href='https://greet.fydo.in/summer-anime-fiesta'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition"
            >
            Register Now
          </motion.button>
            </Link>
        </div>
      </div>
    </section>
  );
}
