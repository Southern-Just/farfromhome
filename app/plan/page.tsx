import Header from "@/components/Header";
import Plan from "@/components/Plan";

const plan = () => {
  return (
    <div>
      <Header />
      <div style={{ backgroundImage: "url('/images/confeti.png')" }}>
        <div className="text-4xl font-bold flex flex-col justify-center space-y-4 mt-16">
          <h1 className="flex justify-center">Create Your Travel Plan</h1>
          <p className="text-xs font-normal text-gray-500 flex justify-center">
            Personalise your very own : To your Dream Destination
          </p>
        </div>
        <section className="w-full h-screen flex items-center justify-center ">
          <div className=" space-x-4 rounded-sm outline-0 w-[80%]">
            <Plan />
          </div>
        </section>
      </div>
    </div>
  );
};
export default plan;
