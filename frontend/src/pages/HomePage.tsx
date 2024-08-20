import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero.tsx";
import Components from "../components/Components";
import Features from "../components/Features.tsx";
import PastRecords from "../components/PastRecords";
import LiveFeed from "../components/LiveFeed.tsx";

import bgCircles from "../assets/images/bg-circles.png";

interface Props {
  enableFunction: (isEnabled: boolean) => void;
}

const HomePage = ({ enableFunction }: Props) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      if (!user) {
        localStorage.removeItem("token");
        window.location.replace("/login");
        enableFunction(false);
      } else {
        enableFunction(true);
      }
    } else {
      window.location.replace("/login");
    }
  }, []);

  return (
    <>
      <header className="sticky top-0 z-10">
        <Navbar active="none" />
      </header>
      <main>
        <img
          src={bgCircles}
          alt="Blurred background"
          className="absolute right-0 top-0 -z-10"
        />
        <Hero />
        <Components />
        <Features />
        <PastRecords />
        <LiveFeed />
      </main>
    </>
  );
};

export default HomePage;
