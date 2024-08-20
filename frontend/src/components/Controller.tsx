import { useState } from "react";
import axios from "axios";

import Title from "./Title";
import RecordMessage from "./RecordMessage";
import "../assets/style/Controller.css";

interface Props {
  toggleFunction: () => void;
}

function Controller({ toggleFunction }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  const createBlobUrl = (data: any) => {
    const blob = new Blob([data], { type: "audio/mpeg" });
    const url = window.URL.createObjectURL(blob);
    return url;
  };
  const handleStop = async (blobUrl: string) => {
    setIsLoading(true);
    // Append recorded messages to messages
    const myMessage = { sender: "Me", blobUrl: blobUrl };
    const messagesArr = [...messages, myMessage];
    // Convert blob url to blob object
    fetch(blobUrl)
      .then((res) => res.blob())
      .then(async (blob) => {
        // Construct audio to send file
        const formData = new FormData();
        formData.append("file", blob, "myFile.wav");
        // Send form data to api endpoint
        await axios
          .post("http://localhost:8000/post-audio", formData, {
            headers: {
              "Content-Type": "audio/mpeg",
            },
            responseType: "arraybuffer",
          })
          .then((res: any) => {
            const blob = res.data;
            const audio = new Audio();
            audio.src = createBlobUrl(blob);
            // Append to audio
            const phoenixAIMessage = {
              sender: "Phoenix AI",
              blobUrl: audio.src,
            };
            messagesArr.push(phoenixAIMessage);
            setMessages(messagesArr);

            // TEST: Play audio
            setIsLoading(false);
            audio.play();
          })
          .catch((err) => {
            console.error(err.message);
            setIsLoading(false);
          });
      });
  };

  return (
    <div
      className="h-screen overflow-y-hidden bg-secondary"
      data-aos="slide-left"
      data-aos-easing="ease-out"
    >
      <Title toggleFunction={toggleFunction} setMessages={setMessages} />
      <div className="controller relative flex h-full flex-col justify-between overflow-y-scroll pb-96">
        {/* Conversation */}
        <div className="mt-5 px-5">
          {messages.map((audio, index) => {
            return (
              <div
                className={`flex flex-col ${
                  audio.sender != "Phoenix AI" && "flex items-end"
                }`}
                key={index + audio.sender}
              >
                {/* Sender */}
                <div className="mt-4">
                  <p
                    className={
                      audio.sender == "Phoenix AI"
                        ? "ml-2 translate-x-2 text-left font-roboto text-[10px] font-light uppercase italic tracking-widest text-white"
                        : "mr-2 translate-x-5 font-roboto text-[10px] font-light uppercase italic tracking-widest text-white"
                    }
                  >
                    {audio.sender}
                  </p>
                  {/* Message */}
                  <audio
                    src={audio.blobUrl}
                    className="appearance-none"
                    controls
                  />
                </div>
              </div>
            );
          })}
          {messages.length == 0 && !isLoading && (
            <div className="mt-10 text-center font-roboto text-sm font-light tracking-wide text-white">
              Waiting for a message...
            </div>
          )}
          {isLoading && (
            <div className="mt-10 animate-pulse text-center font-roboto font-light tracking-wide text-white">
              Give me a few seconds...
            </div>
          )}
        </div>
        {/* Recorder */}
        <div className="absolute bottom-0 w-full bg-secondary text-center">
          <div className="h-[2px] w-full bg-primary"></div>
          <div className="flex w-full items-center justify-center pb-16 pt-6">
            <RecordMessage handleStop={handleStop} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controller;
