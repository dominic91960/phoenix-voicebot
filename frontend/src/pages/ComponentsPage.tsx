import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import AOS from "aos";

import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import bgCircles from "../assets/images/bg-circles.png";
import "aos/dist/aos.css";

interface Props {
  enableFunction: (isEnabled: boolean) => void;
}

const ComponentsPage = ({ enableFunction }: Props) => {
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
        <Navbar active="components" />
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
            Components
          </h1>
          <p
            className="pb-10 font-roboto font-light"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            The operational prowess of our autonomous mini drone system is a
            result of the meticulous integration of a diverse range of
            components, each playing a distinctive role to facilitate its
            various capabilities. <br /> <br />
            At its core, the system is designed to provide object avoidance,
            autonomous navigation, real-time monitoring through onboard cameras,
            and efficient item delivery. This synergy of components creates a
            comprehensive and dynamic solution.
          </p>
          <Carousel />
        </div>
      </main>
    </>
  );
};

export default ComponentsPage;
