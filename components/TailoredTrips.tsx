"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { destination } from "@/lib/mock";
import Link from "next/link";

type Trip = {
  id: string | number;
  image: string;
  scenery: string;
  locale: string;
  price: number;
  tags: string[];
};

const ITEMS_PER_PAGE = 8;

const TailoredTrips = () => {
  const [page, setPage] = useState(1);
  const [cacheReady, setCacheReady] = useState(false);
  const [cachedMap, setCachedMap] = useState<Record<string, string>>({});

  useEffect(() => {
    const load = async () => {
      const cache = await caches.open("trip-img-cache");
      const map: Record<string, string> = {};

      for (const trip of destination as Trip[]) {
        const match = await cache.match(trip.image);
        if (match) {
          const blob = await match.blob();
          map[trip.image] = URL.createObjectURL(blob);
        }
      }

      setCachedMap(map);
      setCacheReady(true);

      for (const trip of destination as Trip[]) {
        const exists = await cache.match(trip.image);
        if (!exists) {
          const res = await fetch(trip.image);
          cache.put(trip.image, res.clone());
        }
      }
    };

    load();
  }, []);

  type ImgProps = {
    src: string;
    alt: string;
    className?: string;
  };

  const CachedOrOriginal = ({ src, alt, className }: ImgProps) => {
    const finalSrc = cacheReady && cachedMap[src] ? cachedMap[src] : src;
    return <Image width={22} height={22} src={finalSrc} alt={alt} className={className} />;
  };

  const totalPages = Math.ceil(destination.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const trips = (destination as Trip[]).slice(start, start + ITEMS_PER_PAGE);

  return (
    <section className="w-[90%] md:w-[82%] mx-auto py-10 mt-16 sm:mt-12">
      <h1 className="text-2xl md:text-3xl font-bold">Tailored Sceneries</h1>

      <p className="text-gray-600 mb-10 text-sm md:text-base">
        Browse well-planned trips designed for different travel styles and
        interests
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {trips.map((trip) => (
          <Link key={trip.id} href={`/trips/${trip.id}`} className="block">
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 bg-white cursor-pointer">
              <div className="relative w-full h-44 sm:h-48 md:h-52 overflow-hidden">
                <CachedOrOriginal
                  src={trip.image}
                  alt={trip.scenery}
                  className="w-full h-full object-cover"
                />

                <span className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold shadow">
                  ${trip.price}
                </span>
              </div>

              <div className="p-4">
                <h2 className="font-semibold text-base sm:text-lg">
                  {trip.scenery}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  {trip.locale}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {trip.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs bg-blue-100 px-2 py-1 rounded-full text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center sm:justify-between items-center mx-auto mt-10 gap-4">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          disabled={page === 1}
          className="hidden md:flex px-4 py-2 bg-white text-gray-600 shadow rounded-lg disabled:opacity-40 gap-2"
        >
          <Image src="/icons/back.svg" width={12} height={12} alt="back" />
          Previous
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`px-3 py-1 rounded-lg text-sm ${
                page === n ? "bg-brown text-white" : "text-black bg-gray-100"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        <button
          onClick={() => page < totalPages && setPage(page + 1)}
          disabled={page === totalPages}
          className="hidden md:flex px-4 py-2 bg-white text-gray-600 shadow rounded-lg disabled:opacity-40 gap-2"
        >
          Next
          <Image
            src="/icons/back.svg"
            width={12}
            height={12}
            alt="back"
            className="rotate-180"
          />
        </button>
      </div>

      <div className="text-xs text-gray-500 flex justify-between mt-24">
        <h2 className="text-xl text-brown font-semibold">FarFromHome</h2>
        <div className="flex gap-4">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </section>
  );
};

export default TailoredTrips;
