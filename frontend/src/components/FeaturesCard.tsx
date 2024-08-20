interface Props {
  image: string;
  title: string;
  text: string;
}

const FeaturesCard = ({ title, image, text }: Props) => {
  return (
    <>
      <div className="flex w-[220px] flex-col items-center rounded-lg bg-white bg-opacity-5 p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-[4px_4px_4px_0px_rgba(14,140,253,0.4)]">
        <div className="w-4/5">
          <img src={image} alt={title} />
        </div>
        <p className="font-outfit pt-8 text-center font-medium capitalize">
          {text}
        </p>
      </div>
    </>
  );
};

export default FeaturesCard;
