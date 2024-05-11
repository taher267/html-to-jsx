import React from "react";
import heroImg from "@/assets/img/hero/hero-img.png";
import heroBg from "@/assets/img/hero/hero-bg.svg";
import Link from "next/link";

export default function () {
  return (
    <section
      id="home"
      className="relative z-10 py-40 md:py-32 lg:py-48 bg-cover bg-no-repeat" //hero-section
      style={{
        background: `url(${heroBg.src})`,
        // backgroundRepeat: `no-repeat !important`,
        backgroundSize: `cover !important`,
        backgroundPosition: `top center`,
      }}
    >
      <div className="container mx-auto sm:px-4 md:px-0">
        <div className="flex flex-wrap  items-center relative">
          <div className="lg:w-1/2">
            <div className="hero-content">
              <h1
                className="wow fadeInUp text-white text-6xl mb-9 font-arimo font-semibold"
                data-wow-delay=".4s"
              >
                Your using free lite version
              </h1>
              <p
                className="wow fadeInUp mb-10 text-[1.125rem] leading-7 text-white pr-32 font-normal font-sans"
                data-wow-delay=".6s"
              >
                Please, purchase full version to get all sections, features and
                permission to remove footer credit.
              </p>
              <Link
                href="#"
                className="main-btn border-btn btn-hover wow fadeInUp border-2 border-solid border-white text-white bg-transparent inline-block font-semibold text-center whitespace-nowrap align-middle relative overflow-hidden py-5 px-10 rounded-full text-[1.125rem]"
                data-wow-delay=".6s"
              >
                Purchase Now
              </Link>
              <Link href="#features" className="scroll-bottom">
                <i className="lni lni-arrow-down" />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="hero-img wow fadeInUp" data-wow-delay=".5s">
              <img src={heroImg.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
