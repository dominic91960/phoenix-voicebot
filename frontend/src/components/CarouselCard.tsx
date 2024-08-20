interface Props {
  image: string;
  title: string;
  description: string;
}

const CarouselCard = ({ image, title, description }: Props) => {
  return (
    <div className="mx-[10px] mb-[20px] mt-[80px] flex h-[280px] w-[330px] flex-col items-center rounded-lg bg-white bg-opacity-10 p-5 text-center transition-all duration-300 hover:scale-105 hover:shadow-[4px_4px_4px_0px_rgba(14,140,253,0.4)]">
      <div className="w-[160px] -translate-y-[90px]">
        <img src={image} alt={title} />
      </div>
      <div className="-translate-y-[70px]">
        <div className="flex h-[56px] items-center justify-center">
          <h3 className="font-outfit text-xl font-semibold uppercase tracking-widest">
            {title}
          </h3>
        </div>
        <p className="font-roboto h-[100px] pt-[20px] text-sm font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
