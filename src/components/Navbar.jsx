import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const Navbar = () => {
  const navContainerRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const navItem = ["Nexus", "Vault", "Prologue", "About", "Contact"];
  const audioElement = useRef(null);


  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current,{
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    })
  }, [isNavVisible]);

  const toggleAudioIndicator = () => {
    setIsIndicatorActive((prev) => !prev);
    setIsAudioPlaying((prev) => !prev);
  };

  useEffect(() => {
    const audio = audioElement.current;
    if (isAudioPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16  transition-all duration-700 sm:inset-x-6 py-2 "
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center justify-between px-5">
          <div className="logo flex items-center gap-2">
            <img
              src="/img/2.png"
              alt="logo"
              style={{ filter: "invert(1)" }} // 50% inversion
              className="w-18 h-14"
            />

            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-violet-50 text-black"
            />
            <Button
              id="product-button"
              title="Whiterpaper"
              // rightIcon={<TiLocationArrow />}
              containerClass="bg-violet-50 text-black"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItem.map((item, index) => (
                <a
                  className="nav-hover-btn text-2xl"
                  key={index}
                  href={`#${item.toLowerCase()}`}
                >
                  {item.toUpperCase()}
                  {/* <span>{item === "Nexus" || item === "Vault" ? (
                    <TiLocationArrow />
                  ) : null}</span> */}
                </a>
              ))}
            </div>
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                className="hidden"
                loop
                ref={audioElement}
                src="/audio/music_main.mp3"
              />
              {[1, 2, 3, 4].map((bar, i) => (
                <div
                  key={i}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
