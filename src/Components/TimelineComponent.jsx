import React from "react";
import { FaAward } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ibda2020a from "../../public/ibda2020a.jpg";
import ibda2020b from "../../public/ibda2020b.jpg";
import ibda2023a from "../../public/ibda2023a.jpg";
import ibda2023b from "../../public/ibda2023b.jpg";
import niq2022 from "../../public/niq2022.png";
import awardlap1 from '../../public/awardlap1.png'
import awardlap2 from '../../public/awardlap2.png'
import awardlap3 from '../../public/awardlap3.png'
import awardlap4 from '../../public/awardlap4.png'

const TimelineComponent = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-center mt-4">Awards</h2>
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 mb-8">
        <div className="w-full md:w-1/2 bg-zinc-800 text-white p-4 flex items-center justify-center text-lg md:text-xl">
          <p>Do you know, there’s an award for being the grooviest?</p>
        </div>
        <div className="w-full md:w-1/2 text-sm md:text-base">
          <p>
            That's why we were awarded <span className="bg-zinc-800 text-white px-2">India's Best Design Award</span> (Branding &
            Packaging) by IBDA and we were featured on Packaging of the World
            for the artistically designed Groovy's vibrant and playful packaging
            during the very 1st year of inception. <br /> We’ve been exclusively
            featured in the prestigious <span className="bg-zinc-800 text-white px-2">YourStory & Business</span> Insider for our
            remarkable success in the market.
          </p>
        </div>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="IBDA 2020 Award"
          dateClassName="custom-date"
          iconStyle={{ background: "#FFD700", color: "#fff" }}
          icon={<FaAward className="text-2xl sm:text-3xl" />}
        >
          <img src={ibda2020a} alt="IBDA Award 2020" className="w-full mt-2 rounded-md" />
          <p className="mt-2 text-sm sm:text-base">Received the prestigious IBDA Award in 2020.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="NIQ 2022 Award"
          dateClassName="custom-date"
          iconStyle={{ background: "#FFD700", color: "#fff" }}
          icon={<FaAward className="text-2xl sm:text-3xl" />}
        >
          <img src={niq2022} alt="NIQ 2022 Award" className="w-full mt-2 rounded-md" />
          <p className="mt-2 text-sm sm:text-base">Received the prestigious NIQ 2022 Award.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="IBDA 2023 Award"
          dateClassName="custom-date"
          iconStyle={{ background: "#FFD700", color: "#fff" }}
          icon={<FaAward className="text-2xl sm:text-3xl" />}
        >
          <img
            src={ibda2023a}
            alt="IBDA 2023 Award"
            className="w-full mt-2 rounded-md"
          />
          <p className="mt-2 text-sm sm:text-base">Won the IBDA Award in 2023 for outstanding performance.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <div className="flex flex-wrap justify-center gap-4 mt-8 py-8 bg-white">
        <img src={awardlap1} alt="" className="w-48 sm:w-64 rounded-xl shadow-lg" />
        <img src={awardlap2} alt="" className="w-48 sm:w-64 rounded-xl shadow-lg" />
        <img src={awardlap3} alt="" className="w-48 sm:w-64 rounded-xl shadow-lg" />
        <img src={awardlap4} alt="" className="w-48 sm:w-64 rounded-xl shadow-lg" />
      </div>
    </div>
  );
};

export default TimelineComponent;
