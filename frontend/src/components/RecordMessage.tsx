import { ReactMediaRecorder } from "react-media-recorder";
import RecordIcon from "./RecordIcon";

type Props = {
  handleStop: any;
};

function RecordMessage({ handleStop }: Props) {
  return (
    <ReactMediaRecorder
      audio
      onStop={handleStop}
      render={({ status, startRecording, stopRecording }) => (
        <div className="mt-0">
          <button
            className="rounded-full border border-primary p-4 transition-all duration-300 hover:scale-105"
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
          >
            <RecordIcon
              classText={
                status == "recording"
                  ? "animate-pulse text-primary"
                  : "text-white"
              }
            />
          </button>
          <p className="mt-2 text-sm font-light uppercase tracking-widest text-white">
            {status}
          </p>
        </div>
      )}
    />
  );
}

export default RecordMessage;
