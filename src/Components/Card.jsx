import { useTheme } from "next-themes";
import { MagicCard } from "./magicui/magic-card";
import boxanar from "../../public/boxanar.png";
import boxguava from "../../public/boxguava.png";
import boxlemon from "../../public/boxlemon.png";
import boxlychee from "../../public/boxlychee.png";
import boxmango from "../../public/boxmango.png";
import boxmix from "../../public/boxmix.png";

const Card = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 px-0 w-full">
      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <MagicCard
          className="cursor-pointer w-full h-64 sm:h-80 md:h-96 flex-col items-center justify-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl bg-[#ffffff]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="p-6 sm:p-8 md:p-10">
            <img className="w-full h-48 object-contain" src={boxanar} alt="Anar" />
            <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold w-full m-auto flex justify-center">Product Name</h1>
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer w-full h-64 sm:h-80 md:h-96 flex-col items-center justify-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl bg-[#ffffff]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="p-6 sm:p-8 md:p-10">
            <img className="w-full h-48 object-contain" src={boxguava} alt="Guava" />
            <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold w-full m-auto flex justify-center">Product Name</h1>
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer w-full h-64 sm:h-80 md:h-96 flex-col items-center justify-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl bg-[#ffffff]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="p-6 sm:p-8 md:p-10">
            <img className="w-full h-48 object-contain" src={boxlemon} alt="Lemon" />
            <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold w-full m-auto flex justify-center">Product Name</h1>
          </div>
        </MagicCard>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
        <MagicCard
          className="cursor-pointer w-full h-64 sm:h-80 md:h-96 flex-col items-center justify-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl bg-[#ffffff]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="p-6 sm:p-8 md:p-10">
            <img className="w-full h-48 object-contain" src={boxlychee} alt="Lychee" />
            <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold w-full m-auto flex justify-center">Product Name</h1>
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer w-full h-64 sm:h-80 md:h-96 flex-col items-center justify-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl bg-[#ffffff]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="p-6 sm:p-8 md:p-10">
            <img className="w-full h-48 object-contain" src={boxmango} alt="Mango" />
            <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold w-full m-auto flex justify-center">Product Name</h1>
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer w-full h-64 sm:h-80 md:h-96 flex-col items-center justify-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl bg-[#ffffff]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="p-6 sm:p-8 md:p-10">
            <img className="w-full h-48 object-contain" src={boxmix} alt="Mix" />
            <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold w-full m-auto flex justify-center">Product Name</h1>
          </div>
        </MagicCard>
      </div>
    </div>
  );
};

export default Card;
