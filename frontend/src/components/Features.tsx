import SectionText from "./SectionText";
import featuresImage from "../assets/images/HomePage/features.png";

const data = {
  sectionName: "features",
  title: "Phoenix in Action: Features Overview",
  textContent:
    "Discover how our innovative features provide comprehensive and dynamic solutions for livestock monitoring.",
  buttonContent: "about features",
  buttonLink: "/features",
};

const Features = () => {
  return (
    <section id="features" className="flex h-screen">
      <div className="flex w-1/2 flex-col justify-center">
        <SectionText
          sectionName={data.sectionName}
          title={data.title}
          textContent={data.textContent}
          buttonContent={data.buttonContent}
          buttonLink={data.buttonLink}
        />
      </div>
      <div className="flex w-1/2 items-center justify-end">
        <img
          src={featuresImage}
          alt="Features image"
          className="w-4/5 animate-light-bounce"
        />
      </div>
    </section>
  );
};

export default Features;
