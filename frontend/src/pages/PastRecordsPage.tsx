import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import AOS from "aos";

import Navbar from "../components/Navbar";
import bgCircles from "../assets/images/bg-circles.png";
import "aos/dist/aos.css";

interface Props {
  enableFunction: (isEnabled: boolean) => void;
}

const PastRecordsPage = ({ enableFunction }: Props) => {
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
        <Navbar active="past-records" />
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
            Past Records
          </h1>
          <p
            className="pb-10 font-roboto font-light"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, exercitationem voluptatum ratione distinctio et
            similique doloribus. Praesentium, cumque dolores? Quaerat quis sunt
            adipisci reiciendis aliquid atque quam totam, porro facere. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            consectetur repudiandae amet nihil, perferendis vitae sapiente
            voluptate! Omnis esse ducimus deleniti sequi eum non. Sit animi eum
            minima provident!
          </p>
        </div>
      </main>
    </>
  );
};

export default PastRecordsPage;
