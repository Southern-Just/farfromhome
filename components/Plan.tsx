"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Popular from "./Popular";

const Plan = () => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState("");

  return (
    <div className="page-animate">
      <section className="plan mx-auto p-4 border-t-2 border-t-gray-100 rounded-2xl shadow-xl shadow-gray-400">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Day | Range</label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-lg bg-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Activity</label>
            <select
              onChange={(e) => setSelectedId(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg bg-white"
            >
              <option value="">Select</option>
              <option value="1">Hiking</option>
              <option value="2">Swimming</option>
              <option value="3">Sightseeing</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Locale (to visit)</label>
            <select className="p-2 border border-gray-300 rounded-lg bg-white">
              <option>Kenya</option>
              <option>United States</option>
              <option>Rwanda</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Mode</label>
            <select className="p-2 border border-gray-300 rounded-lg bg-white">
              <option>Commercial Jet</option>
              <option>Private Jet</option>
              <option>Cruiser</option>
              <option>Ship</option>
              <option>Bus</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Tickets</label>
            <input
              type="text"
              placeholder="# of people on your carry"
              className="p-2 border border-gray-300 rounded-lg bg-white text-xs"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Pricing</label>
            <input
              type="number"
              placeholder="4500"
              className="p-2 border border-gray-300 rounded-lg bg-white md:w-24"
            />
          </div>

          <div className="flex-col hidden">
            <label className="text-sm font-medium mb-1">Scenery</label>
            <p className="border rounded-lg text-center p-0.5 text-[11px] bg-blue-100 text-blue-300">
              Tags
            </p>
          </div>
        </div>
      </section>

      <div className="w-full flex flex-col sm:flex-row gap-4 justify-end mt-6">
        <button className="bg-transparent shadow-sm px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
          Ticket
        </button>
        <button
          disabled={!selectedId}
          onClick={() => router.push(`/stripe?id=${selectedId}`)}
          className="px-4 py-2 rounded-lg  disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Pay Your Plan
        </button>
      </div>

      <Popular />
    </div>
  );
};

export default Plan;