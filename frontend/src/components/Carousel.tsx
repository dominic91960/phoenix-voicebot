import Slider from "react-slick";

import CarouselCard from "./CarouselCard";
import arduinoNano from "../assets/images/ComponentsPage/arduino-nano.png";
import b6BalanceCharger from "../assets/images/ComponentsPage/b6-balance-charger.png";
import battery from "../assets/images/ComponentsPage/battery.png";
import bluetoothTelemetryKit from "../assets/images/ComponentsPage/bluetooth-telemetry-kit.png";
import gpsAndCompassKit from "../assets/images/ComponentsPage/gps-and-compass-kit.png";
import receiver from "../assets/images/ComponentsPage/receiver.png";
import transmitter from "../assets/images/ComponentsPage/transmitter.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    image: arduinoNano,
    title: "Arduino Nano with Object Avoidance Kit",
    description:
      "Acts as the cognitive hub, processing data from 2.4 Ultra Sonic Sensors to detect and avoid obstacles in real-time.",
  },
  {
    image: transmitter,
    title: "Transmitter ",
    description:
      "Crucial link for manual control and flight maneuver execution.",
  },
  {
    image: bluetoothTelemetryKit,
    title: "Bluetooth Telemetry Kit",
    description: "Facilitates wireless communication and real-time monitoring.",
  },
  {
    image: b6BalanceCharger,
    title: "B6 Balance Charger",
    description: "Efficiently recharges the battery, minimizing downtime.",
  },
  {
    image: battery,
    title: "3S 12V 5200mAh LiPo Battery",
    description: "Delivers power for extended operational periods.",
  },

  {
    image: gpsAndCompassKit,
    title: "GPS and Compass Kit",
    description:
      "Enhance stability and provide accurate location data for autonomous navigation.",
  },
  {
    image: receiver,
    title: "Receiver",
    description:
      "Crucial link for manual control and flight maneuver execution.",
  },
];

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {data.map(({ image, title, description }, index) => (
          <div key={index} className="flex justify-center">
            <CarouselCard
              image={image}
              title={title}
              description={description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
