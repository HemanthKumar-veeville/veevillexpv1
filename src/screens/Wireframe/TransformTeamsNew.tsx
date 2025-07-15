import React from "react";
import { motion } from "framer-motion";

const TransformTeamsNew = () => {
  // Card gradient colors
  const gradients = {
    blue: "from-[#1723ff] to-[#b4b8ff]",
    magenta: "from-[#b41998] to-[#ffa4ee]",
    green: "from-[#19958f] to-[#2be1b5]",
    orange: "from-[#ff7037] to-[#ffa87f]",
    lightBlue: "from-[#4b7dd6] to-[#27cff6]",
  };

  // Animation variants for the cards container
  const cardContainerVariants = {
    animate: {
      x: [0, -681], // 3 cards * 227px width = 681px
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const CardSet = () => (
    <>
      {/* Magenta Card */}
      <div className="w-[227px] h-auto rounded-[27px] overflow-hidden">
        <img
          src="/img/G1824.png"
          alt="Magenta Card"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Green Card */}
      <div className="w-[227px] h-auto rounded-[27px] overflow-hidden">
        <img
          src="/img/G1825.png"
          alt="Green Card"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Orange Card */}
      <div className="w-[227px] h-auto rounded-[27px] overflow-hidden">
        <img
          src="/img/G1826.png"
          alt="Orange Card"
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );

  return (
    <section className="relative w-full py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="font-georgia text-[46px] text-[#2d2d2d] tracking-[-1.38px] leading-[1.1] mb-16">
          We've got the cards. Let's play!
        </h2>

        {/* Cards Container with Infinite Scroll */}
        <div className="relative w-[100vw]">
          <motion.div
            className="flex gap-4"
            variants={cardContainerVariants}
            animate="animate"
          >
            {/* Duplicate card sets to create seamless loop */}
            <div className="flex gap-4">
              <CardSet />
            </div>
            <div className="flex gap-4">
              <CardSet />
            </div>
            <div className="flex gap-4">
              <CardSet />
            </div>
          </motion.div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src="/img/playcards 1.png"
            alt="Play cards"
            className="w-[400px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TransformTeamsNew;
