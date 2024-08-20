import chatbot from "../assets/images/chatbot.png";

interface Props {
  isVisible: boolean;
  toggleFunction: () => void;
}

const Voicebot = ({ isVisible, toggleFunction }: Props) => {
  return (
    <div
      className={`fixed bottom-[50px] right-[50px] w-[100px] cursor-pointer ${isVisible ? "hidden" : "block animate-slide-left-slow"}`}
      onClick={toggleFunction}
    >
      <div className="relative">
        <div className="absolute left-[26px] top-[20px] -z-10 h-12 w-12 animate-ping rounded-full border-2 border-primary"></div>
      </div>
      <img src={chatbot} alt="chatbot" />
    </div>
  );
};

export default Voicebot;
