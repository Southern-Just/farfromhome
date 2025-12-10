"use client";
import { useRouter } from "next/navigation";
import Popular from "./Popular";

const Plan = () => {
    const router = useRouter();
  return (
    <>
      <section className=" plan w-full mt-12 p-4 rounded-2xl shadow-xl  shadow-gray-400">
        <div className="flex flex-wrap items-center mx-auto justify-between gap-4">
          <div className="flex flex-col">
            <label>Day | Range</label>
            <input type="date" />
          </div>

          <div className="flex flex-col">
            <label>Activity</label>
            <select>
              <option>Hiking</option>
              <option>Swimming</option>
              <option>Sightseeing</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label>Locale</label>
            <select>
              <option>Kenya</option>
              <option>United States</option>
              <option>Rwanda</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label>Mode</label>
            <select>
              <option>Commercial Jet</option>
              <option>Private Jet</option>
              <option>Cruiser</option>
              <option>Ship</option>
              <option>Bus</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>Tickets</label>
            <input
              type="text"
              placeholder="# of people ony your carry"
              className="text-xs"
            />
          </div>
          <div className="flex flex-col">
            <label>Pricing</label>
            <input type="number" placeholder="4500" />
          </div>
          <div className="flex flex-col">
            <label>Scenery</label>
            <p className="border rounded-lg text-center p-0.5 text-[11px] bg-blue-100 text-blue-300">
              Tags
            </p>
          </div>
        </div>
      </section>
      <div className="w-full flex gap-4 justify-end mt-6">
        <button className=" bg-transparent shadow-sm">
         Ticket 
        </button>
        <button onClick={()=>{router.push("/stripe")}}>
          Pay Your Trip
        </button>
      </div>
      <Popular />
    </>
  );
};

export default Plan;
