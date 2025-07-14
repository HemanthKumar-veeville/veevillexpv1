// Interfaces
export interface PromiseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageWidth: string;
  imageHeight: string;
  logoImage?: string;
  logoWidth?: string;
  logoHeight?: string;
  logoTop?: string;
  logoLeft?: string;
  imageTop?: string;
  imageLeft?: string;
}

export interface TransformationCard {
  id: string;
  description: string;
  image: string;
  imageWidth: string;
  imageHeight: string;
  imageTop: string;
  imageLeft: string;
  gradient: string;
  logoImage?: string;
  logoWidth?: string;
  logoHeight?: string;
  logoTop?: string;
  logoLeft?: string;
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
  iconTop?: string;
  iconLeft?: string;
  vector1?: string;
  vector1Width?: string;
  vector1Height?: string;
  vector1Top?: string;
  vector1Left?: string;
  vector2?: string;
  vector2Width?: string;
  vector2Height?: string;
  vector2Top?: string;
  vector2Left?: string;
}

export interface PremiumCard {
  id: string;
  description: string;
  cardWidth: string;
  cardHeight: string;
  gradient: string;
  hasCardIcon: boolean;
  image: string;
  imageWidth: string;
  imageHeight: string;
  imageTop: string;
  imageLeft: string;
  logoImage?: string;
  logoWidth?: string;
  logoHeight?: string;
  logoTop?: string;
  logoLeft?: string;
}

// Data from Figma design
export const promiseItems: PromiseItem[] = [
  {
    id: "01",
    title: "Zero Powerpoints",
    description: "Seriously, haven't you seen them all already? We believe in experiences that stick, not slides that slip away.",
    image: "/img/ppt-1.png",
    imageWidth: "w-auto",
    imageHeight: "h-[250px]",
    logoImage: "/img/zero-jargon-3.png",
    logoWidth: "w-auto",
    logoHeight: "h-[250px]",
    logoTop: "top-[180px]",
    logoLeft: "left-[180px]"
  },
  {
    id: "02",
    title: "Zero Jargon",
    description: "Nobody knows you better than you do. We simply create the space for your insights to emerge naturally.",
    image: "/img/zero-jargon-4.png",
    imageWidth: "w-auto",
    imageHeight: "h-[250px]",
    logoImage: "/img/zero-jargon-4.png",
    logoWidth: "w-auto",
    logoHeight: "h-[250px]",
    logoTop: "top-[200px]",
    logoLeft: "left-[200px]"
  },
  {
    id: "03",
    title: "100% Surprises",
    description: "When did you last leave a workshop talking about it for weeks? We design moments that delight, and memories that matter.",
    image: "/img/surprises-1.png",
    imageWidth: "w-auto",
    imageHeight: "h-[250px]",
    logoImage: "/img/zero-jargon-5.png",
    logoWidth: "w-auto",
    logoHeight: "h-[250px]",
    logoTop: "top-[200px]",
    logoLeft: "left-[200px]"
  }
];

export const transformationCards: TransformationCard[] = [
  {
    id: "1",
    description: "Unlock creativity and innovation through hands-on experiences",
    image: "/img/what-next-1.png",
    imageWidth: "w-[335px]",
    imageHeight: "h-[443px]",
    imageTop: "top-0",
    imageLeft: "left-0",
    gradient: "bg-gradient-to-b from-[#FF6B00] to-[#FF8A00]"
  },
  {
    id: "2",
    description: "Build trust and collaboration through shared experiences",
    image: "/img/surprises-1.png",
    imageWidth: "w-[335px]",
    imageHeight: "h-[443px]",
    imageTop: "top-0",
    imageLeft: "left-0",
    gradient: "bg-gradient-to-b from-[#2D2D2D] to-[#5C5C5C]"
  },
  {
    id: "3",
    description: "Develop leadership skills through experiential learning",
    image: "/img/image-18.png",
    imageWidth: "w-[335px]",
    imageHeight: "h-[443px]",
    imageTop: "top-0",
    imageLeft: "left-0",
    gradient: "bg-gradient-to-b from-[#FF6B00] to-[#FF8A00]"
  }
];

export const premiumCards: PremiumCard[] = [
  {
    id: "1",
    description: "Transform your team's potential through immersive experiences",
    cardWidth: "w-[308px]",
    cardHeight: "h-[443px]",
    gradient: "bg-gradient-to-b from-[#2D2D2D] to-[#5C5C5C]",
    hasCardIcon: true,
    image: "/img/image-9.png",
    imageWidth: "w-[308px]",
    imageHeight: "h-[443px]",
    imageTop: "top-0",
    imageLeft: "left-0"
  },
  {
    id: "2",
    description: "Unlock innovation and creativity in your organization",
    cardWidth: "w-[308px]",
    cardHeight: "h-[443px]",
    gradient: "bg-gradient-to-b from-[#FF6B00] to-[#FF8A00]",
    hasCardIcon: false,
    image: "/img/chatgpt-image-jul-11-2025-at-11-31-54-am-1.png",
    imageWidth: "w-[308px]",
    imageHeight: "h-[443px]",
    imageTop: "top-0",
    imageLeft: "left-0"
  }
]; 