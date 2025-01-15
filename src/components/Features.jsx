// import gsap from "gsap";

import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

// gsap stuff
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect } from "react";
// gsap.registerPlugin(ScrollTrigger);

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    console.log(e);
    console.log(itemRef.current.getBoundingClientRect());

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 7; // Tilt based on Y
    const tiltY = (relativeX - 0.5) * -7; // Tilt based on X

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  // clientX = 138
  // clientY = 495
  // left = 981.5
  // top = 279.5
  // width = 720
  // height = 389

  // relativeX =(clientX - left) / width = -1.17
  // relativeY = (clientY - top) / height = 0.55

  // tiltX = (relativeY - 0.5) * 4 = -2
  // tiltY = (relativeX - 0.5) * -4 = 2

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bento-tilt ${className}`}
      style={{
        transition: "transform 0.2s ease",
        transform: transformStyle,
      }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  src,
  title,
  description,
  isCommingSoon,
  launchWebsite,
}) => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    // Play video and audio on hover
    videoRef.current.play();
    audioRef.current.currentTime = 0; // Reset audio to start
    audioRef.current.play();
  };

  const handleMouseLeave = () => {
    // Pause video and stop audio when leaving
    videoRef.current.pause();
    audioRef.current.pause();
    audioRef.current.currentTime = 0; // Reset audio to start
  };
  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative size-full cursor-grab"
    >
      <video
        ref={videoRef}
        src={src}
        type="video/mp4"
        autoPlay
        loop
        muted
        className="size-full absolute left-0 top-0 object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <audio
            className="hidden"
            src="/audio/whoosh.mp3"
            ref={audioRef}
          ></audio>
          <h1 className="bento-title special-font"> {title}</h1>
          {description && (
            <p className="mt-3 leading-[1.2rem] max-w-64 font-circular text-lg md:text-base">
              {description}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          {isCommingSoon && (
            <button className="bento-button font-general text-gray-500 text-sm  px-6 py-2 flex items-center gap-1 bg-black rounded-3xl border-[0.8px] border-gray-700">
              <span>
                <TiLocationArrow />
              </span>
              COMING SOON
            </button>
          )}
          {launchWebsite && (
            <button className="bento-button font-general text-[#edff66] text-sm  px-6 py-2 flex items-center gap-1 bg-black rounded-3xl border-[0.8px] border-[#edff66]">
              <span>
                <TiLocationArrow />
              </span>
              COMING SOON
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {


  return (
    <section className="bg-black pb-52 overflow-hidden">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-2 py-32">
          <p className="font-general text-lg font-bold text-blue-50 my-1">
            Dive into the &apos;Game of Games&apos; Universe
          </p>
          <p className="font-circular text-lg font-bold text-blue-50 opacity-50 max-w-md">
            Immerse yourself in a rich and ever-expanding ecosystem where a
            vibreat array of products coverge into an interconnected universe.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src={"videos/feature-1.mp4"}
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            isCommingSoon={true}
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-4">
          <BentoTilt className="bento-tilt_1 row-span-2 md:col-span-1">
            <BentoCard
              src={"videos/feature-2.mp4"}
              title={
                <>
                  Zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection-the IP primed for expansion."
              isCommingSoon={true}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src={"videos/feature-3.mp4"}
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to your identity, Web# engagement and social interaction."
              isCommingSoon={true}
              launchWebsite={true}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 row-span-1 md:col-span-1 md:me-0">
            <BentoCard
              src={"videos/feature-4.mp4"}
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive"
              isCommingSoon={true}
            />
          </BentoTilt>
          <div className="bento-tilt_2 ">
            <BentoTilt className="flex size-full flex-col jusity-between bg-violet-300 p-5 relative">
              <h1 className="bento-title w-1/3 special-font">
                M<b>o</b>re co<b>m</b>ing s<b>oo</b>n.
              </h1>
              <span>
                <img
                  className="w-[8rem] absolute bottom-4 right-2 "
                  src="img/2.png"
                  alt="logoimg"
                />
              </span>
            </BentoTilt>
          </div>
          <BentoTilt className="bento-tilt_2 ">
            <video
              src="videos/feature-5.mp4"
              className="size-full object-cover object-center"
              autoPlay
              muted
              loop
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
