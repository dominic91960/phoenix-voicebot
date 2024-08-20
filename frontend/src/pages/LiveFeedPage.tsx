import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import AOS from "aos";

import Navbar from "../components/Navbar";
import bgCircles from "../assets/images/bg-circles.png";
import "aos/dist/aos.css";

interface Props {
  enableFunction: (isEnabled: boolean) => void;
}

const LiveFeedPage = ({ enableFunction }: Props) => {
  const [url, setUrl] = useState("");

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };
  const handleButtonClick = () => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-10">
        <Navbar active="live-feed" />
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
            Live Feed
          </h1>
          <p
            className="pb-10 font-roboto font-light"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Welcome to the Live Feed page! Here, you can seamlessly connect to
            your drone's camera and monitor your livestock in real-time. Simply
            enter the URL of your drone's camera, and instantly receive a live
            video feed directly on your screen. <br /> <br />
            Whether you're checking on the herd's health, tracking movements, or
            ensuring safety, this feature offers you a direct line of sight, no
            matter where you are. Keep your livestock well-monitored with ease
            and efficiency.
          </p>
          <div
            className="relative flex w-[500px] self-center rounded-full bg-white bg-opacity-10 font-roboto"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <input
              type="url"
              className="w-4/5 rounded-full border-primary bg-transparent px-10 py-4 outline-none"
              onChange={handleInputChange}
            />
            <div className="absolute right-0 top-0">
              <button
                onClick={handleButtonClick}
                className="w-fit rounded-full bg-primary px-6 py-4 font-outfit font-semibold uppercase tracking-widest transition-transform duration-300 hover:scale-110"
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LiveFeedPage;
