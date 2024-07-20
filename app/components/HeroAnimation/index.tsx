"use client"
import { FC } from "react";
import animation from "./animation.json";
import Lottie from "lottie-react";

const HeroAnimation: FC = () => {
  return <Lottie animationData={animation} loop={true} />
}

export default HeroAnimation;