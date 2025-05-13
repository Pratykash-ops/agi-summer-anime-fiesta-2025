"use client";

import {
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";
import { useState } from "react";


const EVENT_CONTENT = {
  '1':     {
      title: "Otaku Gathering",
      des: "Only 35 can enter. Will you be one of the chosen ones? Not everyone gets in — only the truest otakus will earn this spot. \n Elite access. Zero fillers. Only 35 tickets — once they're gone, they're gone. This isn't just an event. It's the anime experience — but only for 35 die-hards. \n This is your chance to ascend to the ultimate anime core. You don't just book this ticket. You fight for it. Others will watch. You'll live it. Only 35 warriors allowed.",
      panel: "Go Stops, Delhi",
      date:'2025-06-08T11:30:00',
      img: "https://res.cloudinary.com/dlyq01q0n/image/upload/v1747144736/assets/sung-jin-woo-future-design-v0-glmacwsv69oc1-removebg-preview_1_knwz4e.png",
    },
  '2':     {
      title: "Clan Wars",
      des: "The Main Mission: Earn the MOST POINTS for your Clan by conquering challenges and dominating games. \n The Reward? A legendary 'Ultimate Treasure Box' worth ₹5,000 — shared among all victorious Clan members! \n\n🌟 Whether you're a seasoned Senpai or a rising Newbie, your energy, fandom, and spirit matter! This is your chance to rise, represent your anime soul, and make your mark.",
      panel: "Pacific D21  Mall, Delhi",
      date:'2025-06-15T11:30:00',
      img: "https://res.cloudinary.com/dlyq01q0n/image/upload/v1747060776/assets/ivo3hjxaojt0jmiujbog.png",
    },
}

export function EventContent() {
  const [CurrentState, setCurrentState] = useState({
    Tab: '1',
    EVENT_CONTENT

  })
  const onTabChange = (e) => {
    setCurrentState((prev) => ({ ...prev, Tab: e}))
  }
  return (
    <section className="py-8 px-8 lg:py-20">
      <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96">
            <Tab  value="1" defaultChecked onClick={()=>onTabChange('1')} className="font-medium">
              Event 1
            </Tab>
            <Tab value="2" onClick={()=>onTabChange('2')} className="font-medium">
              Event 2
            </Tab>
          </TabsHeader>
        </div>
      </Tabs>
      <div className="mx-auto container">
        <EventContentCard {...CurrentState.EVENT_CONTENT[CurrentState?.Tab]} />
      </div>
    </section>
  );
}

export default EventContent;
