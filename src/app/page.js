// "use client";
import Link from "next/link";
// import "./css/animate.css";
// import "./css/bootstrap.min.css";
// import "./css/lineicons.css";
// import "./css/main.css";
// import "./css/main-sub/main-about.css";
// import "./css/main-sub/main-feature.css";
// import "./css/main-sub/main-footer.css";
// import "./css/main-sub/main-hero.css";
// import "./css/main-sub/main-mp.css";
// import "./css/main-sub/main-navbar.css";
// import "./css/main-sub/main-subscribe.css";

import about1 from "@/assets/img/about/about-1.png";
import aboutleftShape from "@/assets/img/about/about-left-shape.svg";
import aboutLeftDot from "@/assets/img/about/left-dots.svg";
import about2 from "@/assets/img/about/about-2.png";
import aboutRightShape from "@/assets/img/about/about-right-shape.svg";
import aboutRightDot from "@/assets/img/about/right-dots.svg";
import subscribeBg from "@/assets/img/subscribe/subscribe-bg.svg";
import footerBg from "@/assets/img/footer/footer-bg.svg";
import cn from "@/utils/cn";
import Hero from "./components/Home/Hero";
import Feature from "./components/Home/Feature";

export default function Home() {
  return (
    <>
      {/* ======== preloader start ======== */}
      {/* <div className="preloader">
          <div className="loader">
            <div className="spinner">
              <div className="spinner-container">
                <div className="spinner-rotator">
                  <div className="spinner-left">
                    <div className="spinner-circle" />
                  </div>
                  <div className="spinner-right">
                    <div className="spinner-circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* preloader end */}
      {/* ======== header start ======== */}

      {/* ======== header end ======== */}
      {/* ======== hero-section start ======== */}
      <Hero />
      {/* ======== hero-section end ======== */}
      {/* ======== feature-section start ======== */}
      <Feature />
      {/* ======== feature-section end ======== */}
      {/* ======== about-section start ======== */}
      {/* <section id="about" className="about-section pt-150">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap  items-center">
            <div className="xl:w-1/2 px-4 lg:w-1/2">
              <div className="about-img">
                <img src={about1.src} alt="" className="w-full" />
                <img
                  src={aboutleftShape.src}
                  alt=""
                  className="shape shape-1"
                />
                <img src={aboutLeftDot.src} alt="" className="shape shape-2" />
              </div>
            </div>
            <div className="xl:w-1/2 lg:w-1/2 px-4">
              <div className="about-content">
                <div className="section-title mb-30">
                  <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                    Perfect Solution Thriving Online Business
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    dinonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <Link
                  href="#"
                  className="main-btn btn-hover border-btn wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* ======== about-section end ======== */}
      {/* ======== about2-section start ======== */}
      {/* <section id="about" className="about-section pt-150">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap  items-center">
            <div className="xl:w-1/2 px-4 lg:w-1/2">
              <div className="about-content">
                <div className="section-title mb-30">
                  <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                    Easy to Use with Tons of Awesome Features
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
                <ul>
                  <li>Quick Access</li>
                  <li>Easily to Manage</li>
                  <li>24/7 Support</li>
                </ul>
                <Link
                  href="#"
                  className="main-btn btn-hover border-btn wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="xl:w-1/2 lg:w-1/2 px-4 order-first order-lg-last">
              <div className="about-img-2">
                <img src={about2.src} alt="" className="w-full" />
                <img
                  src={aboutRightShape.src}
                  alt=""
                  className="shape shape-1"
                />
                <img src={aboutRightDot.src} alt="" className="shape shape-2" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* ======== about2-section end ======== */}
      {/* ======== feature-section start ======== */}
      {/* <section id="why" className="feature-extended-section pt-100">
        <div className="feature-extended-wrapper">
          <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap  justify-center">
              <div className="col-xxl-5 xl:w-1/2 px-4 lg:w-2/3 md:w-3/4">
                <div className="section-title text-center mb-60">
                  <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                    Why Choose SaaSpal
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap ">
              <div className="lg:w-1/3 md:w-1/2 px-4">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-display" />
                  </div>
                  <div className="content">
                    <h3>SaaS Focused</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 px-4 md:w-1/2">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-leaf" />
                  </div>
                  <div className="content">
                    <h3>Awesome Design</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 px-4">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-grid-alt" />
                  </div>
                  <div className="content">
                    <h3>Ready to Use</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 px-4">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-javascript" />
                  </div>
                  <div className="content">
                    <h3>Vanilla JS</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 px-4 md:w-1/2">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-layers" />
                  </div>
                  <div className="content">
                    <h3>Essential Sections</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 px-4 md:w-1/2">
                <div className="single-feature-extended">
                  <div className="icon">
                    <i className="lni lni-rocket" />
                  </div>
                  <div className="content">
                    <h3>Highly Optimized</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* ======== feature-section end ======== */}
      {/* ======== subscribe-section start ======== */}
      {/* <section
        id="contact"
        className="subscribe-section pt-120"
        style={{ background: `url(${subscribeBg.src})` }}
      >
        <div className="container mx-auto sm:px-4">
          <div className="subscribe-wrapper img-bg">
            <div className="flex flex-wrap  items-center">
              <div className="xl:w-1/2 px-4 lg:w-3/5">
                <div className="section-title mb-15">
                  <h2 className="text-white mb-25">Subscribe Our Newsletter</h2>
                  <p className="text-white pr-5">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor
                  </p>
                </div>
              </div>
              <div className="xl:w-1/2 px-4 lg:w-2/5">
                <form action="#" className="subscribe-form">
                  <input
                    type="email"
                    name="subs-email"
                    id="subs-email"
                    placeholder="Your Email"
                  />
                  <button type="submit" className="main-btn btn-hover">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* ======== subscribe-section end ======== */}
      {/* ======== footer start ======== */}
      {/* <footer className="footer" style={{ background: `url(${footerBg.src})` }}>
        <div className="container mx-auto sm:px-4">
          <div className="widget-wrapper">
            <div className="flex flex-wrap ">
              <div className="xl:w-1/3 px-4 lg:w-1/3 md:w-1/2 ">
                <div className="footer-widget">
                  <div className="logo mb-30">
                    <Link href="index.html">
                      <img src={logo.src} alt="" />
                    </Link>
                  </div>
                  <p className="desc mb-30 text-white">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    dinonumy eirmod tempor invidunt.
                  </p>
                  <ul className="socials">
                    <li>
                      <Link href="#">
                        <i className="lni lni-facebook-filled" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="lni lni-twitter-filled" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="lni lni-instagram-filled" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="lni lni-linkedin-original" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xl:w-1/5 px-4 lg:w-1/5 md:w-1/2">
                <div className="footer-widget">
                  <h3>About Us</h3>
                  <ul className="links">
                    <li>
                      <Link href="#">Home</Link>
                    </li>
                    <li>
                      <Link href="#">Feature</Link>
                    </li>
                    <li>
                      <Link href="#">About</Link>
                    </li>
                    <li>
                      <Link href="#">Testimonials</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xl:w-1/4 px-4 lg:w-1/4 md:w-1/2">
                <div className="footer-widget">
                  <h3>Features</h3>
                  <ul className="links">
                    <li>
                      <Link href="#">How it works</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy policy</Link>
                    </li>
                    <li>
                      <Link href="#">Terms of service</Link>
                    </li>
                    <li>
                      <Link href="#">Refund policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xl:w-1/4 px-4 lg:w-1/4 md:w-1/2">
                <div className="footer-widget">
                  <h3>Other Products</h3>
                  <ul className="links">
                    <li>
                      <Link href="#">Accounting Software</Link>
                    </li>
                    <li>
                      <Link href="#">Billing Software</Link>
                    </li>
                    <li>
                      <Link href="#">Booking System</Link>
                    </li>
                    <li>
                      <Link href="#">Tracking System</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      {/* ======== footer end ======== */}
      {/* ======== scroll-top ======== */}
      <Link href="#" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up" />
      </Link>
    </>
  );
}
