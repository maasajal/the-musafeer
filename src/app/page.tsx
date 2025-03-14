import KaabaVideo from "@/pages/home/KaabaVideo";
import Banner from "@/pages/home/Banner";
import OurOffer from "@/pages/home/OurOffer";
import WhatToDo from "@/pages/home/WhatToDo";
import SpiritualJourney from "@/pages/home/SpiritualJourney";
import HotelInMakkah from "@/pages/home/HotelInMakkah";
import HotelInMedina from "@/pages/home/HotelInMedina";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <KaabaVideo />
      <Banner />
      <OurOffer />
      <WhatToDo />
      <SpiritualJourney />
      <HotelInMakkah />
      <HotelInMedina />
    </main>
  );
}
