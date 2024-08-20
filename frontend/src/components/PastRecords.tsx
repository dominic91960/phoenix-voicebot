import { useEffect } from "react";
import AOS from "aos";

import Button from "./Button";
import pastRecordsImage from "../assets/images/HomePage/past-records.png";
import "aos/dist/aos.css";

const PastRecords = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="past-records" className="h-screen">
      <div className="flex h-full flex-col items-center justify-end pb-10 text-center">
        <h1
          className="pb-8 font-outfit text-xl font-semibold uppercase tracking-widest text-primary"
          data-aos="fade-up"
        >
          past records
        </h1>
        <h2 className="pb-10 font-outfit text-6xl font-bold" data-aos="fade-up">
          Explore Phoenix's Historical Data
        </h2>
        <div
          className="flex items-center justify-center pb-10"
          data-aos="fade-up"
        >
          <img
            src={pastRecordsImage}
            alt="Features image"
            className="w-4/5 animate-light-bounce"
          />
        </div>
        <p className="w-3/5 pb-10 text-lg" data-aos="fade-up">
          Access comprehensive historical data stored in our Firebase database,
          providing valuable insights into past livestock conditions and trends.
        </p>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <Button content="access data" link="/past-records" />
        </div>
      </div>
    </section>
  );
};

export default PastRecords;
