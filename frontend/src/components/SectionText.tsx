import { useEffect } from "react";
import AOS from "aos";

import Button from "./Button";
import "aos/dist/aos.css";

interface Props {
  sectionName: string;
  title: string;
  textContent: string;
  buttonContent: string;
  buttonLink: string;
}

const SectionText = ({
  sectionName,
  title,
  textContent,
  buttonContent,
  buttonLink,
}: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <h1
        className="pb-10 font-outfit text-xl font-semibold uppercase tracking-widest text-primary"
        data-aos="zoom-in"
      >
        {sectionName}
      </h1>
      <h2 className="pb-10 font-outfit text-6xl font-bold" data-aos="zoom-in">
        {title}
      </h2>
      <p className="pb-10 text-lg" data-aos="zoom-in">
        {textContent}
      </p>
      <div data-aos="zoom-in">
        <Button content={buttonContent} link={buttonLink} />
      </div>
    </>
  );
};

export default SectionText;
