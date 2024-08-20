import { useEffect } from "react";
import AOS from "aos";

import bgCircles from "../assets/images/bg-circles.png";
import "aos/dist/aos.css";
import Button from "../components/Button";

const PastRecordsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <main>
        <img
          src={bgCircles}
          alt="Blurred background"
          className="bg-height absolute right-0 top-0 -z-10"
        />
        <div className="login-register-height flex flex-col justify-center">
          <h1
            className="pb-10 font-outfit text-6xl font-bold"
            data-aos="fade-right"
          >
            Error 404
          </h1>
          <p
            className="pb-10 font-roboto font-light"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Looks like you've taken a wrong turn! This page doesn't exist. But
            don't worry, we can help you find your way back :&#41;
          </p>
          <Button content="Back to home" link="/home" />
        </div>
      </main>
    </>
  );
};

export default PastRecordsPage;
