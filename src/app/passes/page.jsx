'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TicketWindow() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Blurred Background Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-16 w-80 h-80 bg-pink-300 rounded-full filter blur-[120px] opacity-30" />
        <div className="absolute top-[60%] right-10 w-72 h-72 bg-blue-300 rounded-full filter blur-[100px] opacity-25" />
        <div className="absolute top-[40%] left-[40%] w-96 h-96 bg-yellow-300 rounded-full filter blur-[150px] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight uppercase"
        >
          Summer Anime Fiesta 2025 Tickets
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg max-w-xl mx-auto mb-12 text-gray-700"
        >
          Reserve your spot now for the ultimate otaku experience! Choose your venue and grab your tickets.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2">
          {[{
            title: "GoStop VIP Anime Event",
            desc: "An intimate event for 35 passionate fans.",
            href: "https://greet.fydo.in/summer-anime-fiesta",
            date: "June 8, 2025"
          }, {
            title: "Pacific Mall: Clan Wars",
            desc: "The biggest anime celebration of the summer with 180+ otakus!",
            href: "https://greet.fydo.in/summer-anime-fiesta-clan-wars-at-pacific-d21-studio-dwarka-sector-21",
            date: "June 15, 2025"
          }].map(({ title, desc, href, date }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-300 rounded-xl shadow-xl p-8 text-left hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-gray-700 mb-4">{desc}</p>
              <p className="text-sm text-gray-500 mb-6">Date: {date}</p>
              <Link href={href}>
                <span className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-gray-800 transition">
                  Book Tickets
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
