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
    <div className={"flex px-16 flex-wrap items-center justify-between gap-8"}>
      <div className="flex w-full justify-between ">
        <MagicCard
          className="cursor-pointer w-96 h-96 flex-col items-center  justify-center whitespace-nowrap text-4xl bg-[#ffffff]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="p-16">
            <img className="" src={boxanar} alt="" />
          <h1 className="text-2xl text-white font-semibold w-full m-auto flex justify-center">Product Name</h1>
          
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer w-96 h-96 flex-col items-center justify-center whitespace-nowrap text-4xl bg-[#ffffff]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="p-16">
            <img className="" src={boxguava} alt="" />
          <h1 className="text-2xl text-white font-semibold w-full m-auto flex justify-center">Product Name</h1>
          
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer w-96 h-96 flex-col items-center justify-center whitespace-nowrap text-4xl bg-[#ffffff]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="p-16">
            <img className="" src={boxlemon} alt="" />
          <h1 className="text-2xl text-white font-semibold w-full m-auto flex justify-center">Product Name</h1>
          
          </div>
        </MagicCard>
      </div>
      <div className="flex w-full justify-between">
        <MagicCard
          className="cursor-pointer w-96 h-96 flex-col items-center justify-center whitespace-nowrap text-4xl bg-[#ffffff]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="p-16">
            <img className="" src={boxlychee} alt=" " />
          <h1 className="text-2xl text-white font-semibold w-full m-auto flex justify-center">Product Name</h1>
          
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer w-96 h-96 flex-col items-center justify-center whitespace-nowrap text-4xl bg-[#ffffff]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="p-16">
            <img className="" src={boxmango} alt="" />
          <h1 className="text-2xl text-white font-semibold w-full m-auto flex justify-center">Product Name</h1>
          
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer w-96 h-96 flex-col items-center justify-center whitespace-nowrap text-4xl bg-[#ffffff]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="p-16">
            <img className="" src={boxmix} alt="" />
          <h1 className="text-2xl text-white font-semibold w-full m-auto flex justify-center">Product Name</h1>
          
          </div>
        </MagicCard>
      </div>
    </div>
  );
};

export default Card;
