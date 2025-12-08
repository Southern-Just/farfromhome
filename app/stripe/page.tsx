import Image from "next/image";

const Stripe = () => {
  return (
    <div className="w-full flex flex-col items-center md:flex-row md:items-start md:justify-center gap-10 py-10">

      <section className="space-y-8 px-2 py-4 w-full max-w-md">
        <div className="flex gap-2">
          <Image
            width={12}
            height={12}
            src="/icons/back.svg"
            alt="destination"
            className="-ml-6"
          />
          <h1 className="text-brown text-xl font-semibold">FarFromHome</h1>
        </div>

        <div>
          <p className="text-base">
            Pay 5-Day Japan Highlights: Culture, Food and Adventure
          </p>
          <h1 className="text-3xl font-semibold">
            <span>$</span> 604.00
          </h1>
        </div>

        <Image
          width={280}
          height={280}
          src="/images/heli.jpg"
          alt="destination"
          className="rounded-lg"
        />

        <div className="space-y-24">
          <div className="space-y-1">
            <p className="font-bold">5-Day Japan Adventure</p>
            <p className="text-sm font-light">Luxury, Diversity, and Harmony</p>
          </div>

          <div className="text-[12px] flex gap-3 border-gray-500">
            <p>
              powered by{" "}
              <span className="text-sm text-gray-400 font-bold"> stripe </span>
            </p>

            <div className="border-l px-4 flex gap-3">
              <p>Terms</p>
              <p>Privacy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-md flex flex-col px-4 py-8 space-y-6">
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
            <input type="text" className="border border-gray-400 rounded-sm px-2 py-1 outline-none" />
          </div>

          <div className="flex flex-col space-y-2">
            <h2>Card Details</h2>

            <div className="border border-gray-400 rounded-sm">
              <div className="flex items-center gap-2 px-2 py-1">
                <input type="text" className="w-full outline-none px-1" />
                <Image width={32} height={32} src="/icons/visa.svg" alt="visa" />
                <Image width={32} height={32} src="/icons/Mastercard.svg" alt="mastercard" />
                <Image width={32} height={32} src="/icons/american_express.svg" alt="amex" />
                <Image width={32} height={32} src="/icons/discover.svg" alt="discover" />
              </div>

              <hr className="border-gray-300" />

              <div className="flex px-2 py-1 gap-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/2 border-r border-gray-300 outline-none px-1"
                />
                <div className="flex items-center gap-2 w-1/2">
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full outline-none px-1"
                  />
                  <Image width={24} height={24} src="/icons/discover.svg" alt="cvc" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <h2>Name on Card</h2>
            <input type="text" className="border border-gray-400 rounded-sm px-2 py-1 outline-none" />
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

          <button className="bg-foreground text-white w-full py-3 rounded-lg mt-2">
            Pay $604.00
          </button>
        </div>
      </section>

    </div>
  );
};

export default Stripe;
