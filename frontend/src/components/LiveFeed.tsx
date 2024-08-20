import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import Button from "./Button";

const LiveFeed = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section
      id="live-feed"
      className="mt-10 flex h-screen translate-y-10 items-center justify-center"
      data-aos="zoom-out"
    >
      <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(50,50,50,0.1)] to-[rgba(50,50,50,0.2)] px-60 py-24">
        <h1 className="pb-8 font-outfit text-xl font-semibold uppercase tracking-widest text-primary">
          <span className="animate-pulse">are you ready ?</span>
        </h1>
        <h2 className="pb-10 text-center font-outfit text-6xl font-bold">
          Phoenix Live: <br />
          Real-Time Feed
        </h2>
        <Button content="access live feed" link="/live-feed" />
      </div>
    </section>
  );
};

export default LiveFeed;
