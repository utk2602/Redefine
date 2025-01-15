// import { useRef } from "react";

const Button = ({ title, containerClass, id, rightIcon, leftIcon }) => {
  // const audioRef = useRef(null);

  // const handleMouseEnter = () => {
  //   audioRef.current.play();
  // };
  // const handleMouseLeave = () => {
  //   audioRef.current.pause();
  //   audioRef.current.currentTime = 0;
  // };

  return (
    <button
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full flex items-center justify-center gap-1 bg-violet-50 px-6 py-3 text-black ${containerClass}`}
    >
      {/* <audio ref={audioRef} className="hidden" src="/audio/ui.mp3"></audio> */}
      {leftIcon}
      <span className="relative flex overflow-hidden font-general text-xs uppercase">
        {title}
      </span>
      {rightIcon && <div>{rightIcon}</div>}
    </button>
  );
};

export default Button;
