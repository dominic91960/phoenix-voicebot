import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import AOS from "aos";

import Navbar from "../components/Navbar";
import bgCircles from "../assets/images/bg-circles.png";
import FeaturesCard from "../components/FeaturesCard";
import realTimeMonitoring from "../assets/images/Features Page/real-time-monitoring.png";
import automatedChecks from "../assets/images/Features Page/automated-checks.png";
import gpsTracking from "../assets/images/Features Page/gps-tracking.png";
import dataAnalysis from "../assets/images/Features Page/data-analysis.png";
import "aos/dist/aos.css";

const data = [
  {
    title: "Real time monitoring",
    image: realTimeMonitoring,
    text: "Real-time monitoring of cattle movement and behavior",
  },
  {
    title: "Automated checks",
    image: automatedChecks,
    text: "Automated health and wellness checks using integrated sensors",
  },
  {
    title: "GPS Tracking",
    image: gpsTracking,
    text: "GPS-enabled tracking for locating lost or stray cattle",
  },
  {
    title: "Data analysis",
    image: dataAnalysis,
    text: "Data analysis for improved pasture management and resource allocation",
  },
];

interface Props {
  enableFunction: (isEnabled: boolean) => void;
}

const FeaturesPage = ({ enableFunction }: Props) => {
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

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <header className="sticky top-0 z-10">
        <Navbar active="features" />
      </header>
      <main>
        <img
          src={bgCircles}
          alt="Blurred background"
          className="bg-height absolute right-0 top-0 -z-10"
        />
        <div className="section-min-height flex flex-col justify-center">
          <h1
            className="pb-10 font-outfit text-6xl font-bold"
            data-aos="fade-right"
          >
            Features
          </h1>
          <p
            className="pb-10 font-roboto font-light"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            The Mini Drone for Cattle Farming project aims to revolutionize
            cattle farming by providing farmers with a tool for real-time
            monitoring and management of their livestock.
            <br />
            <br />
            This drone is designed to enhance farm operations through automated
            surveillance, health checks, and GPS tracking, ultimately improving
            the efficiency and safety of cattle management.
          </p>
          <div className="flex gap-10">
            {data.map(({ title, image, text }) => (
              <FeaturesCard title={title} image={image} text={text} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default FeaturesPage;
