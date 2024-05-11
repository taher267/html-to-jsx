import React from "react";
import { BsBootstrapFill } from "react-icons/bs";
import { AiOutlineLayout } from "react-icons/ai";
import { PiCoffeeBold } from "react-icons/pi";


export default function () {
  const datas = [
    {
      icon: BsBootstrapFill,
      heading: `Bootstrap 5`,
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore`,
    },
    {
      icon: AiOutlineLayout,
      heading: `Clean Design`,
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore`,
    },
    {
      icon: PiCoffeeBold,
      heading: `Easy to Use`,
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore`,
    },
  ];
  return (
    <section id="features" className="feature-section pt-32">
      <div className="max-w-[1320px] mx-auto sm:px-4">
        <div className="flex flex-wrap  justify-center">
          {datas.map(({ icon: Icon, heading, description }) => (
            <div key={heading} className="llg:w-1/3 md:w-1/3 sm:w-5/6">
              <div className="single-feature text-center py-8 px-10">
                <div className="w-[130px] h-[130px] flex justify-center items-center mx-auto mb-7 bg-[rgba(88,100,255,0.1)] rounded-full">
                  <Icon className="text-6xl text-blue-600" />
                </div>
                <div className="content text-center p">
                  <h3 className="mb-5 font-arimo font-semibold m-0 text-[rgba(22,36,71,1)] text-2xl">
                    {heading}
                  </h3>
                  <p className="text-xl leading-7 font-sans m-0 font-normal text-[rgba(91,101,126,1)]">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="lg:w-1/3 px-4 md:w-2/3 sm:w-4/5">
          <div className="single-feature">
            <div className="icon">
              <i className="lni lni-layout" />
            </div>
            <div className="content">
              <h3>Clean Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-2/3 sm:w-4/5 px-4">
          <div className="single-feature">
            <div className="icon">
              <i className="lni lni-coffee-cup" />
            </div>
            <div className="content">
              <h3>Easy to Use</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </p>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
}
