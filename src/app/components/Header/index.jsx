"use client";

import React from "react";
import cn from "@/utils/cn";
import Link from "next/link";
import logo from "@/assets/img/logo/logo.svg";
import logo2 from "@/assets/img/logo/logo-2.svg";
export default function () {
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === `undefined`) return;
    window.onscroll = function () {
      const header_navbar = document.querySelector(".navbar-area");
      const sticky = header_navbar.offsetTop;

      if (window.pageYOffset > sticky) {
        if (!isSticky) {
          setIsSticky(true);
        }
      } else {
        setIsSticky(false);
      }
    };

    // section menu active
    function onScroll(event) {
      const sections = document.querySelectorAll(".page-scroll");
      const scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      for (let i = 0; i < sections.length; i++) {
        const currLink = sections[i];
        const val = currLink.getAttribute("href");
        const refElement = document.querySelector(val);
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          document.querySelector(".page-scroll").classList.remove("active");
          currLink.classList.add("active");
        } else {
          currLink.classList.remove("active");
        }
      }
    }

    window.document.addEventListener("scroll", onScroll);
  }, []);

  const menuitems = [
    {
      title: `Home`,
      href: `#home`,
    },
    {
      title: `Features`,
      href: `#features`,
    },
    {
      title: `About`,
      href: `#about`,
    },
    {
      title: `Why`,
      href: `#why`,
    },
    {
      title: `Pricing`,
      href: `#pricing`,
    },
    {
      title: `Clients`,
      href: `#clients`,
    },
  ];
  return (
    <header className="" id="header">
      <div
        className={cn(
          `navbar-area top-0 left-0 w-full z-50 transition-all duration-300 ease-out`,
          {
            "fixed bg-[rgba(255,255,255,0.8)] py-1": isSticky,
            absolute: !isSticky,
          }
        )}
      >
        <div className="lg:w-[1320px] mx-auto sm:px-4">
          <div className="flex flex-wrap items-center">
            <div className="lg:w-full">
              <nav className="relative flex flex-wrap items-center justify-between py-3 px-0">
                <Link
                  className="navbar-brand inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap"
                  href="index.html"
                >
                  <img src={isSticky ? logo2.src : logo.src} alt="Logo" />
                </Link>
                <button
                  className="py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div
                  className="flex-grow items-center sub-menu-bar" //hidden
                  id="navbarSupportedContent"
                >
                  <ul
                    id="nav"
                    className="flex flex-wrap list-reset pl-0 mb-0 ms-auto justify-end space-x-6"
                  >
                    {menuitems.map((item) => (
                      <li key={item.title} className="">
                        <Link
                          className={cn(
                            "page-scroll active relative before:bg-yellow-400 before:absolute before:w-full before:h-1 before:z-[-1] before:rounded-lg before:bottom-0.5 before:left-0 before:transition-all before:duration-300 before:ease-out font-normal text-lg",
                            {
                              "text-[#162447]": isSticky,
                              "text-white": !isSticky,
                            }
                          )}
                          href="#home"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* navbar collapse */}
              </nav>
              {/* navbar */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
      {/* navbar area */}
    </header>
  );
}
