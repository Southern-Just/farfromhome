import Header from "@/components/Header";
import Plan from "@/components/Plan";

const PlanPage = () => {
  return (
    <div>
      <Header />

      <div
        style={{ backgroundImage: "url('/images/confeti.png')" }}
        className="min-h-screen bg-cover bg-center bg-no-repeat items-center space-y-6 md:space-y-14 mt-6 px-4"
      >
        <div className="text-2xl md:text-4xl font-bold flex flex-col justify-center space-y-4 text-center">
          <h1 className="typewriter mx-auto">
            Create Your Travel Plan
          </h1>

          <p className="text-xs md:text-sm font-normal text-gray-500 flex justify-center">
            Personalise your very own : To your Dream Destination
          </p>
        </div>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-4xl space-x-4 rounded-sm outline-0">
            <Plan />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlanPage;