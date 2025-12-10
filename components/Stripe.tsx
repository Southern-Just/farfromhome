"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { destination } from "@/lib/mock";
import { useMemo } from "react";

interface Trip {
  id: number;
  scenery: string;
  locale: string;
  image: string;
  price: number;
  tags: string[];
  plan: Record<string, string>;
}

export default function Stripe() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const trip = useMemo(() => {
    if (!id) return null;
    const tripId = Number(id);
    return destination.find((item: Trip) => item.id === tripId) || null;
  }, [id]);

  if (!id)
    return (
      <div className="w-full text-center py-20">
        <p className="text-gray-600">No destination selected.</p>
      </div>
    );

  if (!trip)
    return (
      <div className="w-full text-center py-20">
        <p className="text-gray-600">Destination not found.</p>
      </div>
    );

  return (
    <div className="w-full flex flex-col items-center sm:mt-12 md:flex-row md:items-start md:justify-center gap-10 py-10 page-animate">
      <section className="space-y-8 px-2 py-4 w-full max-w-md">
        <div
          className="flex gap-2 cursor-pointer"
          onClick={() => router.back()}
        >
          <Image
            width={12}
            height={12}
            src="/icons/back.svg"
            alt="back"
            className="-ml-6"
          />
          <h1 className="text-brown text-xl font-semibold">FarFromHome</h1>
        </div>

        <div>
          <p className="text-base">Pay {trip.scenery}</p>
          <h1 className="text-3xl font-semibold">
            <span>$</span> {trip.price.toFixed(2)}
          </h1>
        </div>

        <Image
          width={280}
          height={280}
          src={trip.image}
          alt={trip.scenery}
          className="rounded-lg object-cover"
        />

        <div className="space-y-24">
          <div className="space-y-1">
            <p className="font-bold">{trip.scenery}</p>
            <p className="text-sm font-light">
              Luxury, Diversity, and Adventure
            </p>
          </div>

          <div className="text-[12px] flex gap-3 border-gray-500">
            <p>
              powered by{" "}
              <span className="text-sm text-gray-400 font-bold">stripe</span>
            </p>

            <div className="border-l px-4 flex gap-3">
              <p>Terms</p>
              <p>Privacy</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-6 max-w-md flex flex-col px-4 py-8 space-y-6">
        <button className="bg-foreground text-white w-full py-3 rounded-lg">
          <Image
            width={48}
            height={48}
            src="/icons/apple_pay.svg"
            alt="apple pay"
            className="mx-auto"
          />
        </button>

        <p className="text-center text-gray-400 text-sm">
          ---------------- Or pay with card ----------------
        </p>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <h2>Email</h2>
            <input
              type="email"
              className="border border-gray-400 rounded-sm px-2 py-1 outline-none"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <h2>Card Information</h2>

            <div className="border border-gray-400 rounded-sm">
              <div className="flex items-center gap-2 px-2 py-1">
                <input
                  type="text"
                  placeholder="Number"
                  maxLength={19}
                  className="w-full outline-none px-1"
                  onChange={(e) => {
                    let v = e.target.value.replace(/\D/g, "");
                    v = v.slice(0, 16);
                    v = v.match(/.{1,4}/g)?.join("-") || "";
                    e.target.value = v;
                  }}
                  pattern="^\d{4}-\d{4}-\d{4}-\d{4}$"
                />

                <Image
                  width={32}
                  height={32}
                  src="/icons/visa.svg"
                  alt="visa"
                />
                <Image
                  width={32}
                  height={32}
                  src="/icons/Mastercard.svg"
                  alt="mastercard"
                />
                <Image
                  width={32}
                  height={32}
                  src="/icons/american_express.svg"
                  alt="amex"
                />
                <Image
                  width={32}
                  height={32}
                  src="/icons/discover.svg"
                  alt="discover"
                />
              </div>

              <hr className="border-gray-300" />

              <div className="flex px-2 py-1 gap-2">
                <input
                  type="text"
                  maxLength={5}
                  placeholder="MM/YY"
                  onChange={(e) => {
                    let v = e.target.value.replace(/\D/g, "");

                    if (v.length >= 3) {
                      v = v.slice(0, 2) + "/" + v.slice(2, 4);
                    }

                    e.target.value = v;
                  }}
                  pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                  className="w-1/2 border-r border-gray-300 outline-none px-1"
                />

                <div className="flex items-center gap-2 w-1/2">
                  <input
                    type="text"
                    placeholder="CVC / CVV"
                    maxLength={4}
                    className="w-full outline-none px-1"
                    onChange={(e) => {
                      e.target.value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 4);
                    }}
                    pattern="^\d{3,4}$"
                  />

                  <Image
                    width={24}
                    height={24}
                    src="/icons/discover.svg"
                    alt="cvc"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <h2>Country or Region</h2>

            <div className="border border-gray-400 rounded-md">
              <div className="px-2 py-1">
                <select className="w-full outline-none">
                  <option>United States</option>
                  <option>Kenya</option>
                  <option>Russia</option>
                  <option>Kazakhstan</option>
                </select>
              </div>

              <hr className="border-gray-300" />

              <input
                type="text"
                placeholder="ZIP"
                className="w-full px-2 py-1 outline-none"
              />
            </div>
          </div>

          <button className="bg-foreground text-white w-full py-3 rounded-lg mt-2" onClick={()=>{router.push("/success")}}>
            Pay ${trip.price.toFixed(2)}
          </button>
        </div>
      </section>
    </div>
  );
}
