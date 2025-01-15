import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (!element) return;
    gsap.to(element, {
      rotateX: 0,
      rotateY: 0,
      scale: 1, // Reset scale
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)", // Remove shadow
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(element, {
      rotateX: Math.min(Math.max(rotateX, -5), 5), // Limit rotation
      rotateY: Math.min(Math.max(rotateY, -5), 5),
      scale: 1.05, // Slight scale on hover
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)", // Add shadow
      duration: 0.5,
      transformPerspective: 1000, // More depth
      ease: "power2.out",
    });
  };

  return (
    <section id="story" className="min-h-screen w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[15px]">
          The multiversal ip world
        </p>
        <div className="relative mt-5 size-full ">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br/> a hidden real<b>m</b> "
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 "
          />
          <div className="story-img-container">
            <div ref={frameRef} className="story-img-mask">
              <div className="story-img-content">
                <img
                  onMouseEnter={handleMouseLeave}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
            <Button
              id="realm-button"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
