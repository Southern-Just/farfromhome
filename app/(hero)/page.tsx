import Header from "@/components/Header";

const Hero = () => {
  return (
    <main>
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url('/icons/hero_img.svg')",
          opacity: 0.7
         }}
      >
        <div className="absolute top-0 left-0 w-full py-6 px-0">
          <Header/>
        </div>
        <div className="h-full flex flex-col justify-center items-start px-6 space-y-4 ml-6 text-foreground">
          <h1 className="text-5xl font-bold">Toka kwenu, Tukatembee</h1>

          <p className="max-w-xl ml-6">
            Personalize your trip in minutes—choose your destination, set your
            interests, and explore with ease.
          </p>

          <button className="ml-4 sm:px-10">Twende</button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
