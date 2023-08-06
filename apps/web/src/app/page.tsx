import CallToActionBottom from './cta-bottom';
import Features from './features';
import Hero from './hero';
import Price from './price';
import Roadmap from './roadmap';
import SocialProof from './social-proof';
import VideoDemo from "~/app/video-demo";
import React from "react";

export default function Page() {
  return (
    <>
      <Hero />
        <VideoDemo />
      <SocialProof />
      <Features />
      <Price />
      <Roadmap />
      <CallToActionBottom />
    </>
  );
}
