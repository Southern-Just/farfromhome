"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import MustVisit from "@/components/MustVisit";
import TailoredTrips from "@/components/TailoredTrips";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [stickyHeader, setStickyHeader] = useState(false);

  const router = useRouter();
  
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || 0;
      setScrollY(y);
      setStickyHeader(y > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scrollY / 300, 1);

  const scale = 1 - progress * 0.06;
  const blur = progress * 4;
  const tilt = progress * 1.4;
  const parallaxY = progress * -50;

  return (
    <main className="w-full overflow-x-hidden">
      <section className="relative h-screen overflow-hidden">
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            stickyHeader
              ? "opacity-100 backdrop-blur bg-white/50 shadow-sm"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-[90%] md:w-[82%] mx-auto py-3">
            <Header />
          </div>
        </div>

        <div
          className="
            absolute inset-0
            transition-all duration-700 ease-in-out
          "
          style={{
            backgroundImage: "url('/images/giants.jpg')",
            backgroundSize: "cover",
            backgroundPosition: `center calc(50% + ${parallaxY}px)`,
            transform: `scale(${scale}) rotateX(${tilt}deg)`,
            opacity: 0.6,
            filter: `blur(${blur}px)`,
            borderRadius: scrollY > 5 ? "1.2rem" : "0rem",
          }}
        />

        <div className="relative h-full flex flex-col justify-between">
          <div
            className={`transition-opacity duration-500 ${
              stickyHeader ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="w-[90%] md:w-[82%] mx-auto py-4">
              <Header />
            </div>
          </div>

          <div
            className="
              w-[90%] md:w-[82%] mx-auto px-6
              flex flex-col justify-center items-center sm:items-start
              space-y-4 text-foreground
              h-full
            "
          >
            <h1 className="text-4xl sm:text-5xl font-bold whitespace-nowrap text-center sm:text-left">
              Toka kwenu, Tukatembee
            </h1>

            <p className="text-sm sm:text-base max-w-md opacity-90 text-center sm:text-left sm:ml-2">
              Personalize your trip in minutes—choose your destination, set your
              interests, and explore with ease.
            </p>

            <button className="mt-12 px-8 py-2 rounded-lg shadow-sm w-fit sm:ml-4" onClick={()=>{router.push("/plan")}}>
              Twende : <span className="text-[10px] text-brown">{"{ perhaps start by creating your own }"}</span>
            </button>
          </div>
        </div>
      </section>

      <MustVisit />
      <TailoredTrips />
    </main>
  );
};

export default Hero;
