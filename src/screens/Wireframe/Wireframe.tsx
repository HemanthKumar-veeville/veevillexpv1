import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import {
  premiumCards,
  promiseItems,
  transformationCards,
  PromiseItem,
  TransformationCard,
  PremiumCard,
} from "./data";

import { Menu } from "lucide-react";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 w-full h-[50px] bg-[#2d2d2d] z-50">
    <div className="max-w-[1440px] mx-auto h-full px-[60px] flex justify-end items-center">
      <Menu className="w-[32px] h-[32px] text-white" />
    </div>
  </header>
);

const Hero = () => (
  <section className="relative w-full bg-white">
    <div className="max-w-[1440px] mx-auto px-[60px] py-[32px] pb-0 flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 flex flex-col items-start">
        <div className="flex items-center gap-0">
          <img
            src="/img/group-7.png"
            alt="Company name"
            className="w-[609px] h-auto object-contain mb-[32px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="71"
            height="100"
            viewBox="0 0 71 158"
            fill="none"
            className="w-[71px] h-[100px] object-contain ml-[-30px] mt-[-10px]"
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
          className="w-[314px] h-[66px] object-contain"
        />
      </div>
      <div className="lg:w-1/2 flex justify-end">
        <img
          src="/img/firstpage-2.png"
          alt="First page illustration"
          className="w-full h-auto max-h-[664px] object-contain"
        />
      </div>
    </div>
    <div className="w-full bg-[#2d2d2d] py-2">
      <div className="max-w-[1440px] mx-auto px-[60px] grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="font-helvetica font-bold text-white text-lg leading-tight text-center tracking-[-0.02em]">
          Reignite Curiosity.
        </div>
        <div className="font-helvetica font-bold text-white text-lg leading-tight text-center tracking-[-0.02em]">
          Reimagine Learning.
        </div>
        <div className="font-helvetica font-bold text-white text-lg leading-tight text-center tracking-[-0.02em]">
          Rebuild Culture.
        </div>
      </div>
    </div>
  </section>
);

const HolaSection = () => (
  <section className="relative w-full py-8">
    <div className="max-w-[1440px] mx-auto px-6">
      <h2 className="font-georgia text-[64px] text-[#2d2d2d] tracking-[-3.20px] mb-8">
        Hola!
      </h2>
      <div className="relative w-full h-[865px]">
        <img
          src="/img/rectangle-3904.png"
          alt="Video thumbnail"
          className="absolute w-full h-auto object-contain"
        />
        <div className="absolute inset-0 bg-[#2d2d2d87] flex items-center justify-center">
          <img
            src="/img/x31-00000152956134880540007450000000217214892682936250.png"
            alt="Play button"
            className="w-48 h-auto cursor-pointer hover:opacity-90 transition-opacity"
          />
        </div>
      </div>
    </div>
  </section>
);

const QuoteSection = () => (
  <section className="relative w-full py-16">
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="font-georgia text-[#2d2d2d] text-[64px] tracking-[-3.20px] leading-[1.1] max-w-[490px]">
            "It took me four years to paint like Raphael, but a lifetime to
            paint like a child."
          </div>
          <div className="mt-8 text-right font-georgia text-[#2d2d2d] text-[32px] tracking-[-1.60px] max-w-[490px]">
            -Pablo Picasso
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[500px] h-auto object-contain"
            alt="Man"
            src="/img/man-2.png"
          />
        </div>
      </div>
    </div>
  </section>
);

const PlaySection = () => (
  <section className="relative w-full py-16">
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img
            className="w-full max-w-[497px] h-auto"
            alt="High five illustration"
            src="/img/high5-1.png"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="font-georgia text-[#2d2d2d] text-6xl text-right tracking-[-1.80px] leading-[1.1] mb-8">
            Where Grown-ups Remember How to Play
          </h2>
          <p className="font-helvetica font-light text-[#888888] text-[25px] text-right tracking-[-0.75px] leading-[1.1] mb-8">
            You never learn better than when you don't know that you are
            learning. Through play, touch, wonder, and experimentation, we help
            teams unlearn biases, collaborate organically, and see challenges
            with fresh eyes.
          </p>
          <div className="flex justify-end">
            <div className="relative w-[266px] h-[252px]">
              {/* Vector graphics */}
              <img
                className="absolute w-[38px] h-[25px] top-[119px] left-[115px]"
                alt="Vector"
                src="/img/vector-3.svg"
              />
              <img
                className="absolute w-[68px] h-[82px] top-[88px] left-[118px]"
                alt="Vector"
                src="/img/vector-10-2.svg"
              />
              <img
                className="absolute w-[67px] h-[88px] top-[85px] left-[86px]"
                alt="Vector"
                src="/img/vector-11-2.svg"
              />
              <img
                className="absolute w-[156px] h-[148px] top-[53px] left-[55px]"
                alt="Vector"
                src="/img/vector-12-2.svg"
              />
              <img
                className="absolute w-[266px] h-[252px] top-0 left-0"
                alt="Vector"
                src="/img/vector-13.svg"
              />
              <div className="absolute w-[123px] h-11 top-[17px] left-[70px]">
                <div className="absolute w-[22px] h-[38px] top-[5px] left-0">
                  <img
                    className="absolute w-[13px] h-[34px] top-0 left-[9px]"
                    alt="Vector"
                    src="/img/vector-14-2.svg"
                  />
                  <img
                    className="absolute w-5 h-[37px] top-px left-0"
                    alt="Vector"
                    src="/img/vector-15-2.svg"
                  />
                </div>
                <img
                  className="absolute w-[7px] h-7 top-0 left-[41px]"
                  alt="Vector"
                  src="/img/vector-16-2.svg"
                />
                <img
                  className="absolute w-4 h-[26px] top-[7px] left-[70px]"
                  alt="Vector"
                  src="/img/vector-17.svg"
                />
                <img
                  className="absolute w-5 h-7 top-[9px] left-[104px]"
                  alt="Group"
                  src="/img/group-1.png"
                />
              </div>
              <div className="absolute w-32 h-[39px] top-[197px] left-[73px]">
                <img
                  className="absolute w-[22px] h-5 top-0 left-0"
                  alt="Vector"
                  src="/img/vector-18.svg"
                />
                <img
                  className="absolute w-2.5 h-[30px] top-2.5 left-[35px]"
                  alt="Vector"
                  src="/img/vector-19.svg"
                />
                <img
                  className="absolute w-[26px] h-[30px] top-[9px] left-[63px]"
                  alt="Group"
                  src="/img/group-2.png"
                />
                <img
                  className="absolute w-[13px] h-[19px] top-0 left-[115px]"
                  alt="Vector"
                  src="/img/vector-20-2.svg"
                />
              </div>
              <img
                className="absolute w-[19px] h-5 top-[115px] left-[17px]"
                alt="Vector"
                src="/img/vector-21.svg"
              />
              <img
                className="absolute w-[25px] h-[25px] top-[110px] left-[221px]"
                alt="Vector"
                src="/img/vector-22-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <p className="font-helvetica text-[#888888] text-[25px] tracking-[-0.75px] leading-[1.1] max-w-[626px]">
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
  <section className="relative w-full py-16 pb-32">
    <div className="max-w-[1440px] mx-auto px-6">
      <h2 className="font-georgia text-[#2d2d2d] text-[60px] tracking-[-1.80px] leading-[1.1] mb-[60px]">
        Our Promise
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[40px] gap-y-[60px]">
        {promiseItems.map((item: PromiseItem) => (
          <div key={item.id} className="relative">
            <div className="font-georgia text-[#2d2d2d] text-[95px] font-weight-[400] tracking-[-3.8px] leading-[1] mb-4 line-height-[95px]">
              {item.id}
            </div>
            <div className="font-georgia text-[#2d2d2d] text-[43px] tracking-[-1.72px] leading-[1.1] mb-6">
              {item.title}
            </div>
            <div className="flex items-start gap-8">
              <div className="font-helvetica font-light text-[#888888] text-[20px] leading-[1.4] max-w-[220px]">
                {item.description}
              </div>
              <div
                className={`flex-shrink-0 absolute ${item.logoTop} ${item.logoLeft}`}
              >
                <img
                  className={`${item.imageWidth} ${item.imageHeight} object-contain`}
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

const TransformationSection = () => (
  <section className="relative w-full py-16 bg-gradient-to-r from-[#f5f5f5] to-white">
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        <div className="lg:w-1/2">
          <h2 className="font-georgia text-[#2d2d2d] text-6xl tracking-[-1.80px] leading-[1.1] mb-8">
            How We Transform Teams
          </h2>
          <p className="font-helvetica text-[#888888] text-[25px] tracking-[-0.75px] leading-[1.2] max-w-[574px]">
            Through doodling, storytelling, filmmaking, crafts, and play, we
            create immersive experiences that unlock creativity, enhance
            communication, build leadership capabilities, and foster genuine
            collaboration. Each program begins with understanding your unique
            challenges and ends with actionable solutions born from collective
            insight.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/img/happy-removebg-preview-1.png"
            alt="Happy illustration"
            className="w-full max-w-[738px] h-auto"
          />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transformationCards.map((card: TransformationCard) => (
          <Card
            key={card.id}
            className={`w-full max-w-[335px] h-[443px] rounded-[27px] ${card.gradient} overflow-hidden mx-auto`}
          >
            <CardContent className="p-0 relative h-full">
              <div className="absolute w-[271px] top-[143px] left-8 font-helvetica font-light text-white text-sm text-center tracking-[-0.42px] leading-[1.1]">
                {card.description}
              </div>
              <img
                className={`absolute ${card.imageWidth} ${card.imageHeight} ${card.imageTop} ${card.imageLeft} object-contain`}
                alt="Illustration"
                src={card.image}
              />
              {card.logoImage && (
                <img
                  className={`absolute ${card.logoWidth} ${card.logoHeight} ${card.logoTop} ${card.logoLeft}`}
                  alt="Logo"
                  src={card.logoImage}
                />
              )}
              {card.icon && (
                <img
                  className={`absolute ${card.iconWidth} ${card.iconHeight} ${card.iconTop} ${card.iconLeft}`}
                  alt="Icon"
                  src={card.icon}
                />
              )}
              {card.vector1 && (
                <img
                  className={`absolute ${card.vector1Width} ${card.vector1Height} ${card.vector1Top} ${card.vector1Left}`}
                  alt="Vector"
                  src={card.vector1}
                />
              )}
              {card.vector2 && (
                <img
                  className={`absolute ${card.vector2Width} ${card.vector2Height} ${card.vector2Top} ${card.vector2Left}`}
                  alt="Vector"
                  src={card.vector2}
                />
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="font-georgia text-[#2d2d2d] text-[46px] tracking-[-1.38px] leading-[1.1] mb-8">
          We've got the cards. Let's play!
        </h3>
      </div>
    </div>
  </section>
);

const PremiumSection = () => (
  <section className="relative w-full py-16">
    <div className="max-w-[1440px] mx-auto px-6">
      <h2 className="font-georgia text-[#2d2d2d] text-[44px] tracking-[-1.32px] leading-[1.1] mb-16 max-w-[730px]">
        The Premium Cards: Some Serious Fun for slightly older kids
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {premiumCards.map((card: PremiumCard) => (
          <Card
            key={card.id}
            className={`${card.cardWidth} ${card.cardHeight} rounded-[27px] ${card.gradient} overflow-hidden mx-auto`}
          >
            <CardContent className="p-0 relative h-full">
              {card.hasCardIcon && (
                <div className="absolute w-[69px] h-[117px] top-[27px] left-[122px]">
                  <div className="absolute w-[69px] h-[107px] top-0 left-0">
                    <div className="relative h-[107px]">
                      <img
                        className="absolute w-[52px] h-[76px] top-[15px] left-1"
                        alt="Rectangle"
                        src="/img/rectangle.png"
                      />
                      <img
                        className="absolute w-[69px] h-[107px] top-0 left-0"
                        alt="Vector"
                        src="/img/vector-32-2.svg"
                      />
                      <img
                        className="absolute w-6 h-7 top-[58px] left-[27px]"
                        alt="Vector"
                        src="/img/vector-33.svg"
                      />
                      <img
                        className="absolute w-[17px] h-[35px] top-5 left-[26px]"
                        alt="Vector"
                        src="/img/vector-34.svg"
                      />
                      <img
                        className="absolute w-[9px] h-[15px] top-0 left-0"
                        alt="Vector"
                        src="/img/vector-35-2.svg"
                      />
                      <img
                        className="absolute w-[9px] h-[15px] top-[92px] left-0"
                        alt="Vector"
                        src="/img/vector-36-2.svg"
                      />
                    </div>
                  </div>
                  <img
                    className="absolute w-3.5 h-[71px] top-5 left-[27px]"
                    alt="Group"
                    src="/img/group-1000001769.png"
                  />
                  <img
                    className="absolute w-8 h-2 top-[109px] left-[17px]"
                    alt="Objects"
                    src="/img/objects.svg"
                  />
                </div>
              )}
              {card.logoImage && (
                <img
                  className={`absolute ${card.logoWidth} ${card.logoHeight} ${card.logoTop} ${card.logoLeft} object-contain`}
                  alt="Logo"
                  src={card.logoImage}
                />
              )}
              <div className="absolute w-[286px] top-[153px] left-[11px] rotate-[-0.03deg] font-helvetica font-light text-white text-sm text-center tracking-[-0.42px] leading-[1.1]">
                {card.description}
              </div>
              <img
                className={`absolute ${card.imageWidth} ${card.imageHeight} ${card.imageTop} ${card.imageLeft} object-contain`}
                alt="Illustration"
                src={card.image}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="relative w-full">
    <div className="relative">
      <img
        className="w-full max-w-[595px] h-auto mx-auto"
        alt="Gold cards"
        src="/img/goldcards-1.png"
      />
      <div className="w-full bg-[#2d2d2d] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="font-georgia font-bold text-white text-[46px] tracking-[-1.38px] leading-[1.1] mb-4">
            Ready to Rediscover Wonder?
          </h2>
          <p className="font-helvetica font-light text-white text-[25px] tracking-[-0.75px] leading-[1.1] mb-12">
            Let's explore how your team can achieve extraordinary results
            through extraordinary experiences.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-12">
              <div>
                <label className="font-helvetica text-white text-sm mb-5 block">
                  First Name
                </label>
                <Input className="bg-transparent border-0 border-b border-white rounded-none px-0 text-white h-auto" />
              </div>
              <div>
                <label className="font-helvetica text-white text-sm mb-5 block">
                  Email
                </label>
                <Input className="bg-transparent border-0 border-b border-white rounded-none px-0 text-white h-auto" />
              </div>
              <div>
                <label className="font-helvetica text-white text-sm mb-5 block">
                  Approximate Team Size
                </label>
                <Input className="bg-transparent border-0 border-b border-white rounded-none px-0 text-white h-auto" />
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <label className="font-helvetica text-white text-sm mb-5 block">
                  Last Name
                </label>
                <Input className="bg-transparent border-0 border-b border-white rounded-none px-0 text-white h-auto" />
              </div>
              <div>
                <label className="font-helvetica text-white text-sm mb-5 block">
                  Organisation
                </label>
                <Input className="bg-transparent border-0 border-b border-white rounded-none px-0 text-white h-auto" />
              </div>
            </div>
          </div>
          <div className="mt-12">
            <label className="font-helvetica text-white text-sm mb-2 block">
              What challenge or opportunity brings you here?
            </label>
            <div className="font-helvetica font-light text-white text-sm mb-2">
              Write your message..
            </div>
            <Separator className="bg-white" />
          </div>
          <Button className="mt-12 bg-[#fdfdfe] text-[#2d2d2d] rounded-[11px] h-[46px] w-[164px] font-helvetica font-bold text-base">
            Send Message
          </Button>
        </div>
      </div>
      <footer className="w-full bg-white py-8">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img
                src="/img/group-4.png"
                alt="Logo"
                className="h-[30px] w-auto"
              />
              <div className="h-[30px] w-[1px] bg-[#465666] hidden md:block" />
              <div className="font-helvetica text-[#465666] text-[19px] tracking-[-0.57px] text-center md:text-left">
                Contact Information: experiences/veeville |{" "}
                <a
                  href="mailto:getpersonal@veeville.com"
                  className="text-[#465666] hover:text-[#2d2d2d] transition-colors"
                >
                  getpersonal@veeville.com
                </a>{" "}
                |{" "}
                <a
                  href="http://veevillexp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#465666] hover:text-[#2d2d2d] transition-colors"
                >
                  veevillexp.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="w-[30px] h-[30px] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <img
                  src="/img/vector-37.svg"
                  alt="LinkedIn"
                  className="w-[22px] h-[22px]"
                />
              </a>
              <a
                href="#"
                className="w-[30px] h-[30px] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <img
                  src="/img/vector-42.svg"
                  alt="Instagram"
                  className="w-[22px] h-[22px]"
                />
              </a>
              <a
                href="#"
                className="w-[30px] h-[30px] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <img
                  src="/img/vector-1.svg"
                  alt="Facebook"
                  className="w-[22px] h-[22px]"
                />
              </a>
              <a
                href="#"
                className="w-[30px] h-[30px] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <img
                  src="/img/vector-2.svg"
                  alt="Twitter"
                  className="w-[22px] h-[22px]"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </section>
);

export const Wireframe = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HolaSection />
      <QuoteSection />
      <PlaySection />
      <PromiseSection />
    </div>
  );
};
