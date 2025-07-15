import { promiseItems, PromiseItem } from "./data";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import TransformTeamsNew from "./TransformTeamsNew";

const bannerVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    },
  },
};

const Hero = () => (
  <section className="relative w-full bg-white overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[60px] py-4 sm:py-6 md:py-[32px] md:pb-0 sm:pb-0 lg:pb-0 pb-0 flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
        <div className="flex items-center gap-0 w-full max-w-full overflow-hidden">
          <img
            src="/img/group-7.png"
            alt="Company name"
            className="w-full max-w-[609px] h-auto object-contain mb-4 sm:mb-[32px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="71"
            height="100"
            viewBox="0 0 71 158"
            fill="none"
            className="hidden sm:block w-[40px] sm:w-[71px] h-[60px] sm:h-[100px] object-contain ml-[-20px] sm:ml-[-30px] mt-[-10px]"
          >
            <path
              d="M60.8874 0.0507812H71.0002L10.5156 157.549H0.185547L60.8874 0.0507812Z"
              fill="#2D2D2D"
            />
          </svg>
        </div>
        <img
          src="/img/group-6.png"
          alt="Company logo"
          className="w-[200px] sm:w-[314px] h-auto object-contain"
        />
      </div>
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
        <img
          src="/img/firstpage-2.png"
          alt="First page illustration"
          className="w-full max-w-full lg:max-w-[664px] h-auto object-contain"
        />
      </div>
    </div>
    <div className="w-full bg-[#2d2d2d] py-2 mt-0 lg:mt-0 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex whitespace-nowrap gap-8 sm:gap-16"
          variants={bannerVariants}
          animate="animate"
        >
          {/* Duplicate items to create seamless loop */}
          {[...Array(4)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-8 sm:gap-16">
              <div className="font-helvetica font-bold text-white text-base sm:text-lg leading-tight tracking-[-0.02em] whitespace-nowrap">
                Reignite Curiosity.
              </div>
              <div className="font-helvetica font-bold text-white text-base sm:text-lg leading-tight tracking-[-0.02em] whitespace-nowrap">
                Reimagine Learning.
              </div>
              <div className="font-helvetica font-bold text-white text-base sm:text-lg leading-tight tracking-[-0.02em] whitespace-nowrap">
                Rebuild Culture.
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const HolaSection = () => (
  <section className="relative w-full py-4 sm:py-8 overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
      <h2 className="font-georgia text-3xl sm:text-5xl md:text-[64px] text-[#2d2d2d] tracking-[-3.20px] mb-4 sm:mb-8">
        Hola!
      </h2>
      <div className="relative w-full h-[300px] sm:h-[500px] md:h-[865px]">
        <img
          src="/img/rectangle-3904.png"
          alt="Video thumbnail"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2d2d2d87] flex items-center justify-center">
          <img
            src="/img/x31-00000152956134880540007450000000217214892682936250.png"
            alt="Play button"
            className="w-24 sm:w-48 h-auto cursor-pointer hover:opacity-90 transition-opacity"
          />
        </div>
      </div>
    </div>
  </section>
);

const QuoteSection = () => (
  <section className="relative w-full py-8 sm:py-16 overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
        <div className="lg:w-1/2 w-full">
          <div className="font-georgia text-3xl sm:text-5xl md:text-[64px] text-[#2d2d2d] tracking-[-3.20px] leading-[1.1] mx-auto lg:mx-0 max-w-[490px] text-center lg:text-left">
            "It took me four years to paint like Raphael, but a lifetime to
            paint like a child."
          </div>
          <div className="mt-4 sm:mt-8 text-center lg:text-right font-georgia text-xl sm:text-2xl md:text-[32px] text-[#2d2d2d] tracking-[-1.60px] mx-auto lg:ml-auto max-w-[490px]">
            -Pablo Picasso
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center mt-8 lg:mt-0">
          <img
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain"
            alt="Man"
            src="/img/man-2.png"
          />
        </div>
      </div>
    </div>
  </section>
);

const PlaySection = () => (
  <section className="relative w-full py-8 sm:py-16 overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
          <img
            className="w-full max-w-[250px] sm:max-w-[400px] md:max-w-[497px] h-auto object-contain"
            alt="High five illustration"
            src="/img/high5-1.png"
          />
        </div>
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
          <h2 className="font-georgia text-2xl sm:text-5xl md:text-6xl text-[#2d2d2d] text-center lg:text-right tracking-[-1.80px] leading-[1.2] mb-4 sm:mb-8 px-2 sm:px-0">
            Where Grown-ups Remember How to Play
          </h2>
          <p className="font-helvetica font-light text-[#888888] text-base sm:text-xl md:text-[25px] text-center lg:text-right tracking-[-0.75px] leading-[1.4] sm:leading-[1.1] mb-6 sm:mb-8 px-2 sm:px-0">
            You never learn better than when you don't know that you are
            learning. Through play, touch, wonder, and experimentation, we help
            teams unlearn biases, collaborate organically, and see challenges
            with fresh eyes.
          </p>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[180px] sm:w-[266px] h-[171px] sm:h-[252px]">
              {/* Vector graphics with responsive sizes */}
              <img
                className="absolute w-[25px] sm:w-[38px] h-[17px] sm:h-[25px] top-[80px] sm:top-[119px] left-[77px] sm:left-[115px]"
                alt="Vector"
                src="/img/vector-3.svg"
              />
              <img
                className="absolute w-[46px] sm:w-[68px] h-[56px] sm:h-[82px] top-[59px] sm:top-[88px] left-[80px] sm:left-[118px]"
                alt="Vector"
                src="/img/vector-10-2.svg"
              />
              <img
                className="absolute w-[45px] sm:w-[67px] h-[59px] sm:h-[88px] top-[58px] sm:top-[85px] left-[58px] sm:left-[86px]"
                alt="Vector"
                src="/img/vector-11-2.svg"
              />
              <img
                className="absolute w-[105px] sm:w-[156px] h-[100px] sm:h-[148px] top-[36px] sm:top-[53px] left-[37px] sm:left-[55px]"
                alt="Vector"
                src="/img/vector-12-2.svg"
              />
              <img
                className="absolute w-[180px] sm:w-[266px] h-[170px] sm:h-[252px] top-0 left-0"
                alt="Vector"
                src="/img/vector-13.svg"
              />
              <div className="absolute w-[111px] sm:w-[123px] h-10 sm:h-11 top-[15px] sm:top-[17px] left-[63px] sm:left-[70px]">
                <div className="absolute w-[20px] sm:w-[22px] h-[34px] sm:h-[38px] top-[4px] sm:top-[5px] left-0">
                  <img
                    className="absolute w-[12px] sm:w-[13px] h-[31px] sm:h-[34px] top-0 left-[8px] sm:left-[9px]"
                    alt="Vector"
                    src="/img/vector-14-2.svg"
                  />
                  <img
                    className="absolute w-[18px] sm:w-5 h-[33px] sm:h-[37px] top-px left-0"
                    alt="Vector"
                    src="/img/vector-15-2.svg"
                  />
                </div>
                <img
                  className="absolute w-[6px] sm:w-[7px] h-6 sm:h-7 top-0 left-[37px] sm:left-[41px]"
                  alt="Vector"
                  src="/img/vector-16-2.svg"
                />
                <img
                  className="absolute w-[14px] sm:w-4 h-[23px] sm:h-[26px] top-[6px] sm:top-[7px] left-[63px] sm:left-[70px]"
                  alt="Vector"
                  src="/img/vector-17.svg"
                />
                <img
                  className="absolute w-[18px] sm:w-5 h-6 sm:h-7 top-[8px] sm:top-[9px] left-[93px] sm:left-[104px]"
                  alt="Group"
                  src="/img/group-1.png"
                />
              </div>
              <div className="absolute w-[115px] sm:w-32 h-[35px] sm:h-[39px] top-[177px] sm:top-[197px] left-[66px] sm:left-[73px]">
                <img
                  className="absolute w-[20px] sm:w-[22px] h-[18px] sm:h-5 top-0 left-0"
                  alt="Vector"
                  src="/img/vector-18.svg"
                />
                <img
                  className="absolute w-2 sm:w-2.5 h-[27px] sm:h-[30px] top-[9px] sm:top-2.5 left-[31px] sm:left-[35px]"
                  alt="Vector"
                  src="/img/vector-19.svg"
                />
                <img
                  className="absolute w-[23px] sm:w-[26px] h-[27px] sm:h-[30px] top-[8px] sm:top-[9px] left-[57px] sm:left-[63px]"
                  alt="Group"
                  src="/img/group-2.png"
                />
                <img
                  className="absolute w-[12px] sm:w-[13px] h-[17px] sm:h-[19px] top-0 left-[103px] sm:left-[115px]"
                  alt="Vector"
                  src="/img/vector-20-2.svg"
                />
              </div>
              <img
                className="absolute w-[17px] sm:w-[19px] h-[18px] sm:h-5 top-[103px] sm:top-[115px] left-[15px] sm:left-[17px]"
                alt="Vector"
                src="/img/vector-21.svg"
              />
              <img
                className="absolute w-[22px] sm:w-[25px] h-[22px] sm:h-[25px] top-[99px] sm:top-[110px] left-[199px] sm:left-[221px]"
                alt="Vector"
                src="/img/vector-22-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 sm:mt-12">
        <p className="font-helvetica text-[#888888] text-base sm:text-xl md:text-[25px] tracking-[-0.75px] leading-[1.4] sm:leading-[1.1] max-w-[300px] sm:max-w-[626px] mx-auto lg:mx-0 text-center lg:text-left px-2 sm:px-0">
          What if your next team breakthrough happened not in a boardroom, but
          with clay in your hands? What if the solution to your biggest
          challenge emerged while you were laughing, creating, and completely
          forgetting you were 'learning'?"
        </p>
      </div>
    </div>
  </section>
);

const PromiseSection = () => (
  <section className="relative w-full py-8 sm:py-16 pb-16 sm:pb-32 overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
      <h2 className="font-georgia text-3xl sm:text-5xl md:text-[60px] text-[#2d2d2d] tracking-[-1.80px] leading-[1.1] mb-8 sm:mb-[60px] text-left">
        Our Promise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-x-[30px] md:gap-x-[40px] sm:gap-y-[60px]">
        {promiseItems.map((item: PromiseItem, index: number) => (
          <div
            key={item.id}
            className={`relative w-full flex flex-col ${
              index === 2
                ? "md:col-start-1 md:col-end-3 lg:col-start-auto lg:col-end-auto md:items-center lg:items-start"
                : "items-center md:items-start"
            }`}
          >
            <div
              className={`w-full ${
                index === 2 ? "md:max-w-[500px] lg:max-w-none" : ""
              }`}
            >
              <div
                className={`font-georgia text-[#2d2d2d] text-5xl sm:text-[95px] font-weight-[400] tracking-[-3.8px] leading-[1] mb-4 line-height-[95px] text-center ${
                  index === 2 ? "md:text-center lg:text-left" : "md:text-left"
                }`}
              >
                {item.id}
              </div>
              <div
                className={`font-georgia text-[#2d2d2d] text-2xl sm:text-[43px] tracking-[-1.72px] leading-[1.2] mb-6 text-center max-w-[280px] sm:max-w-[300px] mx-auto ${
                  index === 2
                    ? "md:text-center md:max-w-none lg:text-left"
                    : "md:text-left md:max-w-none md:mx-0"
                }`}
              >
                {item.title}
              </div>
              <div
                className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 w-full ${
                  index === 2
                    ? "md:justify-center lg:justify-start"
                    : "md:items-start"
                }`}
              >
                <div
                  className={`font-helvetica font-light text-[#888888] text-base sm:text-[20px] leading-[1.4] max-w-[260px] sm:max-w-[320px] md:max-w-[220px] text-center ${
                    index === 2 ? "md:text-center lg:text-left" : "md:text-left"
                  }`}
                >
                  {item.description}
                </div>
                {/* Tablet/Desktop Image */}
                <div
                  className={`relative hidden md:block ${
                    index === 2
                      ? "md:static lg:absolute mt-4 md:mt-0 flex-shrink-0"
                      : "flex-shrink-0 relative md:absolute mt-4 md:mt-0"
                  } ${item.logoTop} ${item.logoLeft}`}
                >
                  <img
                    className={`${item.imageWidth} ${
                      item.imageHeight
                    } object-contain ${
                      index === 2
                        ? "max-w-[180px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-none"
                        : "max-w-[180px] sm:max-w-[250px] md:max-w-none"
                    }`}
                    alt={item.title}
                    src={item.image}
                  />
                </div>
              </div>
              {/* Mobile Image - Always Below */}
              <div className="md:hidden mt-8 flex justify-center">
                <img
                  className="max-w-[180px] h-auto object-contain"
                  alt={item.title}
                  src={item.image}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TransformTeamsSection = () => (
  <section className="relative w-full py-8 sm:py-16 overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12">
        <div className="lg:w-1/2 w-full">
          <h2 className="font-georgia text-3xl sm:text-5xl md:text-[60px] text-[#2d2d2d] tracking-[-1.80px] leading-[1.1] mb-8">
            How We <br /> Transform Teams
          </h2>
          <p className="font-helvetica font-light text-[#888888] text-base sm:text-xl md:text-[25px] tracking-[-0.75px] leading-[1.4] sm:leading-[1.1]">
            Through doodling, storytelling, filmmaking, crafts, and play, we
            create immersive experiences that unlock creativity, enhance
            communication, build leadership capabilities, and foster genuine
            collaboration. Each program begins with understanding your unique
            challenges and ends with actionable solutions born from collective
            insight.
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <img
            src="/img/happy-removebg-preview-1.png"
            alt="Happy team illustration"
            className="w-full max-w-[667px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </section>
);

const PremiumCardsSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = [
    {
      image: "/img/left_card.png",
      rotation: "-rotate-[0.08deg",
    },
    {
      image: "/img/right_card.png",
      rotation: "rotate-[0.027deg]",
    },
  ];

  // Auto-slide every 3 seconds on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 640) {
        // Only auto-slide on mobile
        setCurrentCard((prev) => (prev === 0 ? 1 : 0));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="mb-8 sm:mb-16">
          <h2 className="font-georgia text-[32px] sm:text-[38px] lg:text-[44px] text-[#2d2d2d] tracking-[-1.32px] leading-[1.1] max-w-full sm:max-w-[80%] lg:max-w-[60%]">
            The Premium Cards: Some Serious Fun{" "}
            <br className="hidden sm:block" /> for slightly older kids
          </h2>
        </div>

        {/* Content Container with overlapping elements */}
        <div className="relative">
          {/* Mobile Card Slider */}
          <div className="sm:hidden mb-8">
            <div className="relative h-[370px] w-full flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] relative"
                >
                  <div
                    className={`relative h-[370px] transform ${cards[currentCard].rotation}`}
                  >
                    <div
                      className="absolute inset-0 rounded-[27px] shadow-lg"
                      style={{
                        backgroundImage: `url('${cards[currentCard].image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentCard === index ? "bg-[#2d2d2d]" : "bg-[#2d2d2d40]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Tablet Cards Container (unchanged) */}
          <div className="hidden sm:flex lg:hidden justify-between mb-8">
            {/* Left Card */}
            <div className="w-[45%] relative">
              <div className="relative h-[270px] sm:h-[350px] md:h-[400px] transform -rotate-[0.08deg]">
                <div
                  className="absolute inset-0 rounded-[27px] shadow-lg"
                  style={{
                    backgroundImage: "url('/img/left_card.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>

            {/* Right Card */}
            <div className="w-[45%] relative">
              <div className="relative h-[270px] sm:h-[350px] md:h-[400px] transform rotate-[0.027deg]">
                <div
                  className="absolute inset-0 rounded-[27px] shadow-lg"
                  style={{
                    backgroundImage: "url('/img/right_card.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Center Image for Mobile and Tablet */}
          <div className="lg:hidden w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] mx-auto">
            <img
              src="/img/goldcards-1.png"
              alt="Gold cards illustration"
              className="w-full h-auto"
            />
          </div>

          {/* Desktop Layout (unchanged) */}
          <div className="hidden lg:block min-h-[700px]">
            {/* Left Card */}
            <div className="absolute left-0 top-24 z-10 w-[320px]">
              <div className="relative h-[423px] transform -rotate-[0.08deg]">
                <div
                  className="absolute inset-0 rounded-[27px] shadow-lg"
                  style={{
                    backgroundImage: "url('/img/left_card.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <div className="w-full relative z-20 max-w-[650px] h-auto ml-[100px]">
                <img
                  src="/img/goldcards-1.png"
                  alt="Gold cards illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Card */}
            <div className="absolute right-0 top-24 z-10 w-[306px]">
              <div className="relative h-[405px] transform rotate-[0.027deg]">
                <div
                  className="absolute inset-0 rounded-[27px] shadow-lg"
                  style={{
                    backgroundImage: "url('/img/right_card.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section className="relative w-full bg-[#2d2d2d] py-16 pb-32 sm:py-24">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative pb-[100px]">
      <h2 className="font-georgia text-[46px] font-bold text-[#FDFDFE] tracking-[-1.38px] leading-[1.1] mb-6">
        Ready to Rediscover Wonder?
      </h2>
      <p className="font-helvetica font-light text-[25px] text-[#FDFDFE] tracking-[-0.75px] leading-[1.1] mb-16">
        Let's explore how your team can achieve extraordinary results through
        extraordinary experiences.
      </p>

      <form className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {/* First Name & Last Name */}
          <div>
            <label className="block font-helvetica text-[#FDFDFE] text-[14px] leading-[20px] mb-3">
              First Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-[#FDFDFE] pb-2 text-[#FDFDFE] focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-helvetica text-[#FDFDFE] text-[14px] leading-[20px] mb-3">
              Last Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-[#FDFDFE] pb-2 text-[#FDFDFE] focus:outline-none"
            />
          </div>

          {/* Email & Organisation */}
          <div>
            <label className="block font-helvetica text-[#FDFDFE] text-[14px] leading-[20px] mb-3">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-[#FDFDFE] pb-2 text-[#FDFDFE] focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-helvetica text-[#FDFDFE] text-[14px] leading-[20px] mb-3">
              Organisation
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-[#FDFDFE] pb-2 text-[#FDFDFE] focus:outline-none"
            />
          </div>

          {/* Team Size */}
          <div>
            <label className="block font-helvetica text-[#FDFDFE] text-[14px] leading-[20px] mb-3">
              Approximate Team Size
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-[#FDFDFE] pb-2 text-[#FDFDFE] focus:outline-none"
            />
          </div>
        </div>

        {/* Challenge/Opportunity */}
        <div className="mt-10 relative">
          <label className="block font-helvetica text-[#FDFDFE] text-[14px] leading-[20px] mb-3">
            What challenge or opportunity brings you here?
          </label>
          <div className="relative">
            <textarea className="w-full bg-transparent border-b border-[#FDFDFE] text-[#FDFDFE] focus:outline-none min-h-[100px] font-helvetica font-light text-[14px] leading-[20px] pt-[40px] resize-none" />
            <span className="absolute top-[40px] left-0 text-[#FDFDFE] font-helvetica font-light text-[14px] leading-[20px] pointer-events-none">
              Write your message..
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-12 bg-[#FDFDFE] text-[#2d2d2d] font-helvetica font-bold text-[16px] px-6 py-[13px] rounded-[11px] hover:bg-opacity-90 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
    <div className="absolute bottom-0 w-full bg-[#FFFFFF]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-6 sm:py-4 sm:px-6 md:px-8 lg:px-12">
        {/* Contact Information */}
        <div className="w-full sm:w-auto">
          <p className="font-helvetica text-[#465666] text-sm sm:text-base md:text-lg text-center sm:text-left whitespace-normal">
            <span className="block sm:inline">experiences/veeville</span>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline">getpersonal@veeville.com</span>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline">veevillexp.com</span>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mt-4 sm:mt-0">
          <a
            href="#"
            className="text-[#465666] hover:text-[#2d2d2d] transition-colors duration-200"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram size={24} className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-[#465666] hover:text-[#2d2d2d] transition-colors duration-200"
            aria-label="Connect with us on LinkedIn"
          >
            <FaLinkedinIn size={24} className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export const Wireframe = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <HolaSection />
      <QuoteSection />
      <PlaySection />
      <PromiseSection />
      <TransformTeamsSection />
      <TransformTeamsNew />
      <PremiumCardsSection />
      <ContactSection />
    </div>
  );
};
