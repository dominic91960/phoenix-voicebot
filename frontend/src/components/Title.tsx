import { useState } from "react";
import axios from "axios";

import reset from "../assets/images/reset.png";
import close from "../assets/images/close.png";

type Props = {
  toggleFunction: () => void;
  setMessages: any;
};

function Title({ toggleFunction, setMessages }: Props) {
  const [isResetting, setIsResetting] = useState(false);

  // Reset the conversation
  const resetConversation = async () => {
    setIsResetting(true);
    await axios
      .get("http://localhost:8000/reset")
      .then((res) => {
        if (res.status == 200) {
          setMessages([]);
        } else {
          console.error("ERROR: Title.tsx=>resetConversation()");
        }
      })
      .catch((err) => console.error(err.message));
    setIsResetting(false);
  };
  return (
    <div className="flex w-full items-center justify-between border-b border-b-primary bg-secondary p-4 font-bold text-white shadow">
      <div className="font-outfit text-sm font-light tracking-widest">
        PHOENIX AI
      </div>
      <div className="flex items-center justify-center gap-5">
        <button
          className={`${isResetting && "animate-spin"}`}
          onClick={resetConversation}
        >
          <div className="w-[15px] transition-transform duration-300 hover:scale-125">
            <img src={reset} alt="Close button" />
          </div>
        </button>
        <button onClick={toggleFunction}>
          <div className="w-[15px] transition-transform duration-300 hover:scale-125">
            <img src={close} alt="Close button" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Title;
