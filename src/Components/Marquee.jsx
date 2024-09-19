import { cn } from "../lib/utils.js";
import Marquee from "./magicui/marquee";
import simrat from '../../public/review/simrat.png';
import jovial from '../../public/review/jovial.png';
import daljeet from '../../public/review/daljeet.png';
import ashish from '../../public/review/ashish.png';

const reviews = [
  {
    name: "Simrat Ghai",
    username: "@simrat_ghai",
    body: "Awesome drink 🥤",
    img: simrat,
  },
  {
    name: "Jovial Mudsssir",
    username: "@jovial_mudassir",
    body: "Too Yummy To Taste It..... Best Ever Drink To Taste It...",
    img: jovial,
  },
  {
    name: "Daljeet Singh",
    username: "@daljeetsingh.singh.1969",
    body: "Nice taste , groovy mixed fruit",
    img: daljeet,
  },
  {
    name: "Ashish Kumar",
    username: "@ashishkumarguptasai",
    body: "Jabardast test hai hamne piya hai",
    img: ashish,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden bg-white rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] bg-white",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm md:text-base font-medium text-black">
            {name}
          </figcaption>
          <p className="text-xs md:text-sm font-semibold text-black">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm md:text-base font-medium text-black">
        {body}
      </blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative overflow-hidden text-white">
      <div className="relative h-[50vh] bg-fixed bg-cover bg-center">
        <div className="absolute inset-0 bg-white flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl uppercase font-bold tracking-tight text-zinc-800 py-8 text-center">
            Our Customers Reviews
          </h1>

          <Marquee pauseOnHover className="[--duration:50s]">
            {firstRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </div>
    </div>
  );
}
