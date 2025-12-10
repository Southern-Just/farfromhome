"use client";
import Image from "next/image";
import { destination } from "@/lib/mock";
import Link from "next/link";

const Popular = () => {
  const trips = destination.slice(0, 5);

  return (
    <section className="mx-auto py-10 mt-2 sm:mt-2">
      <div className="flex text-gray-600 text-sm gap-6 items-center md:text-base mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Suggestions</h1>
        <p>Choose <span className="text-red-400 text-xl font-semibold">any</span> to auto select</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
        {trips.map((trip) => (
          <Link key={trip.id} href={`/trips/${trip.id}`} className="block">
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 bg-white cursor-pointer">
              <div className="relative w-full h-44 overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.scenery}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover"
                />
                <span className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-lg text-xs font-semibold shadow">
                  ${trip.price}
                </span>
              </div>

              <div className="p-4">
                <h2 className="font-semibold text-base">{trip.scenery}</h2>
                <p className="text-xs text-gray-500">{trip.locale}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {trip.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-blue-100 px-2 py-1 rounded-full text-blue-700"
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

export default Popular;
