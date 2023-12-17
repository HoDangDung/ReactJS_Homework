import { useState } from "react";
import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import style from "./intro.module.css";

const Intro = () => {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <div className={style.introContainer}>
      <ReactPlayer
        loop={true}
        playing={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        url="https://vimeo.com/316941203"
        className={style.videoIntro}
      />
      <div className={style.infoIntro}>
        <h1 className={style.headingIntro}>Netflix | “Together”</h1>
        <p className={style.overViewIntro}>
          Nudo collaborated with Sebastien Grainger of Death From Above 1979 to
          provide the music to “Together", showcasing Netflix's divers content,
          and that when it comes to Netflix, you’re likely to share six shows in
          common with any other member, anywhere in the world.
        </p>
        {isMuted ? (
          <VscMute
            className={style.btnVolume}
            onClick={() => setIsMuted((prev) => !prev)}
          />
        ) : (
          <VscUnmute
            className={style.btnVolume}
            onClick={() => setIsMuted((prev) => !prev)}
          />
        )}
        <div className={style.fadeBottom}></div>
        {/* <button>More Info</button> */}
      </div>
    </div>
  );
};

export default Intro;
