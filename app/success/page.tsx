import Header from "@/components/Header";
import Image from "next/image";

const success = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div
        className=" bg-success-bg flex flex-1 flex-col justify-center items-center text-center p-4"
        style={{ backgroundImage: "url('/images/confetti.png')" }}
      >
        <div className="relative mb-6">
          <Image
            src="/icons/sucess.svg"
            alt="success"
            width={64}
            height={64}
            className=""
          />
        </div>
        <h1 className="text-2xl font-semibold mb-2">
          Thank You & Welcome Aboard!
        </h1>
        <p className="text-base mb-6 max-w-md">
          Your trip’s booked — can’t wait to have you on this adventure! <br />
          🌍️ Get ready to explore & make memories.✨
        </p>
        <button className="px-6 py-3 rounded-full  transition-all">
          View Trip Details
        </button>
      </div>
    </div>
  );
};

export default success;
