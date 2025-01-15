import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 1,
        // markers:true,
        duration: 10,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });


  
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center justify-center gap-5">
        <h1 className="font-general text-md uppercase md:text-[15px]">
          Wecome to Zentry
        </h1>
        <AnimatedTitle
          title="Disc<b>o</b>ver the World's <br/> Largest shared <b>a</b>dventure"
          containerClass=" !text-black text-center"
        />

        <div
          className="absolute left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]"
          style={{ bottom: "-70dvh" }}
        >
          <p className="font-circular">
            The Game of Games begins-your life, now an epic MMORPG
          </p>
          <p>Zentry unites every player from countless games and platfroms</p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/img/about.webp"
            alt="Background img"
            className="absolute top-0 left-0 size-full object-cover w-[100vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
