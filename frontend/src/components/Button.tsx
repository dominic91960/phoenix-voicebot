const Button = ({ style = "regular", link = "#", content = "button" }) => {
  const classes =
    style === "hollow" ? " text-primary " : "bg-primary text-white";
  return (
    <button
      className={`w-fit rounded-full border-2 border-primary px-10 py-4 font-outfit font-semibold uppercase tracking-widest transition-transform duration-300 hover:scale-110 ${classes}`}
    >
      <a href={link}>{content}</a>
    </button>
  );
};

export default Button;
