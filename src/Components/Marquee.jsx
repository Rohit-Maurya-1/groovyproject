import { cn } from "../lib/utils.js";
import Marquee from "./magicui/marquee";
import simrat from '../../public/review/simrat.png'
import jovial from '../../public/review/jovial.png'
import daljeet from '../../public/review/daljeet.png'
import ashish from '../../public/review/ashish.png'

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
  {
    name: "Simrat Ghai",
    username: "@simrat_ghai",
    body: "Awesome drink 🥤",
    img: simrat
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
        " relative w-64 cursor-pointer overflow-hidden bg-white rounded-xl border p-4",
        // light styles

        "border-gray-950/[.1] bg-gray-950/[.01] bg-white",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] "
      )}
    >
      <div className="flex  flex-row items-center gap-2  ">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black">
            {name}
          </figcaption>
          <p className="text-xs font-semibold text-black">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm font-medium text-black">
        {body}
      </blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative overflow-hidden   text-white">
      <div
        className="relative h-[50vh] bg-fixed bg-cover bg-center"
        // style={{
        //   backgroundImage:
        //     "url('https://embedsocial.com/admin/mediacdn/feed-media/18006/18006077030309004/image_0_large.webp')",
        // }}
      >

        <div className="absolute inset-0 bg-white flex flex-col items-center ">
        <h1 className="text-4xl uppercase font tracking-tight text-zinc-800  py-8">
          Our{" "}
            Customers
          Reviews
        </h1>

        <Marquee pauseOnHover className="[--duration:50s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l "></div>
        </div>
        
      </div>
    </div>
  );
}
0