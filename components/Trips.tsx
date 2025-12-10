"use client";

import Header from "@/components/Header";
import { destination } from "@/lib/mock";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Trips({ id }: { id: string }) {
  const router = useRouter();
  const tripId = Number(id);
  const trip = destination.find((item) => item.id === tripId);

  if (!trip) return <p className="text-center mt-10">Trip not found</p>;

  return (
    <div>
      <Header />

      <section className="w-[50%] mx-auto py-10 px-4 text-start">
        <div className="space-y-2">
          <h1 className="font-bold text-2xl">{trip.scenery}</h1>

          <div className="flex justify-start gap-6">
            <p>5 Day Plan</p>
            <p>{trip.locale}</p>
          </div>
        </div>

        <div className="flex w-full mt-6 gap-6">
          <Image
            src={trip.image}
            alt={trip.scenery}
            width={1000}
            height={600}
            className="w-[70%] h-64 object-cover rounded-xl"
          />

          <div className="flex flex-col w-[20%] h-64 gap-4 justify-between">
            <Image
              src={trip.image}
              alt={trip.scenery}
              width={500}
              height={300}
              className="h-[49%] w-full object-cover rounded-xl"
            />
            <Image
              src={trip.image}
              alt={trip.scenery}
              width={500}
              height={300}
              className="h-[49%] w-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          {trip.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between font-bold">
            <h1>{trip.scenery}</h1>
            <p>${trip.price}</p>
          </div>
          <h1 className="font-normal text-gray-500">
            Luxury, Nature & Exploration
          </h1>
        </div>

        <p className="mt-2 text-xs text-black font-semibold">
          Discover {trip.scenery} located in {trip.locale}.
        </p>

        <p className="mt-2 text-md">
          Enjoy a curated trip offering natural beauty and immersive activities.
        </p>

        <div className="space-y-6 mt-2 ml-8">
          {Object.entries(trip.plan).map(([day, activities]) => (
            <div key={day}>
              <h3 className="font-bold capitalize">
                {day.replace("day", "Day ")}
              </h3>
              <ul className="list-disc ml-6">
                {activities.split(",").map((act, i) => (
                  <li key={i}>{act.trim()}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          className="mt-6 px-5 py-3 rounded-lg"
          onClick={() => router.push(`/stripe?id=${trip.id}`)}
        >
          Pay and join trip <span className="font-bold">(${trip.price})</span>
        </button>
      </section>

      <button
        className="absolute top-20 left-48 px-5 py-3 gap-2 bg-white text-gray-500 shadow-md rounded-lg flex"
        onClick={() => router.back()}
      >
        <Image src="/icons/back.svg" width={12} height={12} alt="back" />
        <p>Back</p>
      </button>
    </div>
  );
}
