import Button from "./Button";
import heroImage from "../assets/images/HomePage/hero.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-min-height flex scroll-m-[104px] flex-col items-center justify-center"
    >
      <div className="flex">
        <div className="w-2/5 animate-displace">
          <h1 className="pb-10 font-outfit text-6xl font-bold">
            Revolutionizing Livestock Monitoring
          </h1>
          <p className="pb-10">
            Discover how Phoenix can transform your farming operations and take
            your livestock management to the next level.
          </p>
          <div className="flex gap-x-5">
            {/* <Button content="login" /> */}
            <Button content="View More" style="hollow" link="#components" />
          </div>
        </div>
        <div className="flex w-3/5 justify-end">
          <img
            src={heroImage}
            alt="Hero image"
            className="w-4/5 translate-y-3 animate-light-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
