import React from "react";
import "./audiosection.css";
// import sound from "./kesariya.mp3"

const AudioSection = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="modal-head ">
          <h5 className="modal-text" id="modalRequestLabel">
            Listen to this audio
          </h5>
          {/* <audio
            src="./song/kesariya.mp3"
            type="audio/mpeg"
            controls
            autoPlay
          /> */}

          <audio  controls
            autoPlay>
            <source  type="audio/mp3" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default AudioSection;
