import { destination } from "@/lib/mock";
import type { FC } from "react";

export type MustVisitItem = {
  id: number;
  tag: string;
  city: string;
  activity: string;
  image: string;
  size: "large" | "medium" | "small";
};

type DestinationItem = {
  id: number;
  scenery: string;
  image: string;
  price: number | null;
  tags?: string[];
  locale: string;
  activity?: string;
  rating?: string;
};

type ImageCardProps = {
  item: MustVisitItem;
  className?: string;
  compact?: boolean;
};

const ImageCard: FC<ImageCardProps> = ({ item, className, compact }) => {
  const titleClass = compact
    ? "font-bold leading-tight text-xs sm:text-sm md:text-base"
    : "font-bold leading-tight text-sm sm:text-lg md:text-xl";

  const bodyClass = compact
    ? "text-[10px] sm:text-xs md:text-sm opacity-90 leading-tight"
    : "text-xs sm:text-sm md:text-base opacity-90 leading-tight";

  return (
    <div
      className={`relative rounded-xl bg-cover bg-center overflow-hidden ${className ?? ""}`}
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/70 backdrop-blur px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs text-red-500 font-semibold shadow-sm">
        {item.tag}
      </span>
      <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white drop-shadow-lg select-none">
        <h2 className={titleClass}>{item.city}</h2>
        <p className={bodyClass}>{item.activity}</p>
      </div>
    </div>
  );
};

const MustVisit: FC = () => {
  const allDestinations = destination as DestinationItem[];
  const localBase = allDestinations.filter((d) =>
    d.locale.toLowerCase().includes("kenya")
  );

  const sizes: MustVisitItem["size"][] = [
    "large",
    "medium",
    "medium",
    "small",
    "small",
    "small",
  ];

  const mustVisitData: MustVisitItem[] = localBase.slice(0, 6).map((d, index) => ({
    id: d.id,
    tag: d.rating ?? "4.8",
    city: d.scenery,
    activity: d.activity ?? d.tags?.[0] ?? "Explore & relax",
    image: d.image,
    size: sizes[index] ?? "small",
  }));

  const large = mustVisitData.find((i) => i.size === "large") as MustVisitItem;
  const mediums = mustVisitData.filter((i) => i.size === "medium") as MustVisitItem[];
  const smalls = mustVisitData.filter((i) => i.size === "small") as MustVisitItem[];

  return (
    <section className="w-[90%] md:w-[82%] mx-auto mt-16 sm:mt-12">
      <h1 className="text-2xl md:text-3xl font-bold">Must-Visit Locales</h1>
      <p className="text-gray-600 mb-8 text-sm md:text-base">
        it has been said, you haven&apos;t travelled yet if these places, well..
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between md:items-stretch">
        <div className="flex flex-col gap-4 w-full md:w-[72%] items-center md:items-stretch">
          {large && (
            <ImageCard
              item={large}
              className="w-full h-[200px] sm:h-60 md:h-[260px]"
            />
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-between w-full">
            {mediums.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-[48%] h-[200px] sm:h-60 md:h-[260px]"
              >
                <ImageCard item={item} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row md:flex-col gap-8 w-full md:w-[22%] justify-center md:justify-start mt-4 md:mt-0 md:h-full">
          {smalls.map((item) => (
            <div
              key={item.id}
              className="w-[30%] md:w-full h-[70px] sm:h-[100px] md:h-[150px] shrink md:flex-none"
            >
              <ImageCard item={item} className="w-full h-full" compact />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MustVisit;
