import SectionText from "./SectionText";
import componentImage from "../assets/images/HomePage/components.png";

const data = {
  sectionName: "components",
  title: "Phoenix Revealed: Essential Components",
  textContent:
    "Learn how our mini drone integrates diverse components for object avoidance, navigation, and monitoring.",
  buttonContent: "about components",
  buttonLink: "/components",
};

const Components = () => {
  return (
    <section id="components" className="flex h-screen">
      <div className="flex w-1/2 items-center">
        <img
          src={componentImage}
          alt="Components image"
          className="w-4/5 animate-light-bounce"
        />
      </div>
      <div className="flex w-1/2 flex-col justify-center">
        <SectionText
          sectionName={data.sectionName}
          title={data.title}
          textContent={data.textContent}
          buttonContent={data.buttonContent}
          buttonLink={data.buttonLink}
        />
      </div>
    </section>
  );
};

export default Components;
