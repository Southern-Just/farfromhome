import Header from "@/components/Header";
import { destination } from "@/lib/mock";
import Image from "next/image";

const TripDetails = ({ params }: { params: { id: string } }) => {
  const trip = destination.find((item) => item.id === Number(params.id));

  if (!trip) return <p>Trip not found</p>;

  return (
    <div>
      <Header />

      <section className="w-[50%] mx-auto py-10 px-4 text-start">

        {/* TITLE + TAGS */}
        <div className="space-y-2">
          <h1 className="font-bold text-2xl">
            5-Day {trip.scenery}
          </h1>

          <div className="flex justify-start gap-6">
            <p>5 Day Plan</p>
            <p>{trip.locale}</p>
          </div>
        </div>

        {/* IMAGE GRID */}
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

        {/* TAGS */}
        <div className="flex gap-4 mt-4">
          {trip.tags.map((tag) => (
            <p
              key={tag}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm"
            >
              {tag}
            </p>
          ))}
        </div>

        {/* TITLE + PRICE */}
        <div className="mt-4">
          <div className="flex justify-between">
            <h1>{trip.scenery}</h1>
            <p>${trip.price}</p>
          </div>
          <h1 className="font-semibold">Luxury, Nature & Exploration</h1>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-2">
          Discover {trip.scenery} located in {trip.locale}. This 5-day adventure blends beautiful landscapes, exploration, and memorable experiences.
        </p>

        <p className="mt-2">
          Enjoy a perfectly curated trip featuring unique natural beauty, immersive activities, and breathtaking scenery. 
        </p>

        {/* 5-DAY PLAN */}
        <div className="space-y-6 mt-8">
          {Object.entries(trip.plan).map(([day, activities]) => (
            <div key={day}>
              <h1 className="font-bold capitalize">
                {day.replace("day", "Day ")}
              </h1>
              <ul className="list-disc ml-6">
                {activities.split(",").map((activity, i) => (
                  <li key={i}>{activity.trim()}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BEST TIME — OPTIONAL (static for now) */}
        <div className="mt-10">
          <h1 className="font-semibold mb-2">Best Time to Visit:</h1>
          <ul>
            <li>🌤 Spring – Mild weather & clear views</li>
            <li>☀ Summer – Warm & perfect for activities</li>
            <li>🍁 Autumn – Beautiful colors & great trails</li>
            <li>❄ Winter – Scenic snowy landscapes</li>
          </ul>
        </div>

        {/* WEATHER — OPTIONAL */}
        <div className="mt-6">
          <h1 className="font-semibold mb-2">Weather Information</h1>
          <ul>
            <li>Spring: 10°C – 20°C</li>
            <li>Summer: 20°C – 30°C</li>
            <li>Autumn: 12°C – 22°C</li>
            <li>Winter: -5°C – 10°C</li>
          </ul>
        </div>

        {/* GEO MAP (placeholder) */}
        <div className="w-[80%] mt-6 rounded-2xl h-44 bg-green-500 text-center flex justify-center items-center">
          <p>Geo Location</p>
        </div>

        {/* BUTTON */}
        <button className="mt-6 bg-black text-white px-5 py-3 rounded-lg">
          Pay and join trip <span className="font-bold">(${trip.price})</span>
        </button>

      </section>
    </div>
  );
};

export default TripDetails;
