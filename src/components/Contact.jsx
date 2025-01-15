import { useRef } from "react";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ImgClipBox = ({ src, clipClass }) => {

  return (
    <div className={`${clipClass}`}>
      <img src={src} alt="" />
    </div>
  );
};
const Contact = () => {
  const ImgRef = useRef(null);

  // useEffect(() => {
  //   const img = ImgRef.current;
  //   const ctx = gsap.context(() => {
  //     const imgAnimation = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: img,
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: true
          
  //       },
  //     });
  //     imgAnimation.from(".img", {
  //       opacity: 0,
  //       duration: 1,
  //       y: 100
  //   })
  //   });
  //   return () => {
  //     ctx.revert();
  //   };
  // },[]);

  return (
    <div ref={ImgRef} id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute top-0 -left-20 h-full w-full hidden overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImgClipBox
            src="img/contact-1.webp"
            clipClass="img contact-clip-path-1 "
          />
          <ImgClipBox
            src="img/contact-2.webp"
            clipClass="img contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImgClipBox
            src="img/swordman-partial.webp"
            clipClass="img absolute md:scale-125 "
          />
          <ImgClipBox
            src="img/swordman.webp"
            clipClass="img sword-man-clip-path md:scale-125"
          />
        </div>
        <div className="flex flex-col text-center items-center">
          <p className="font-general text-[10px] font-bold uppercase md:text-[15px]">
            Join Zentry
          </p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem] ">
            let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t
            <b>o</b>gether.
          </p>
          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
