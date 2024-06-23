"use client";

import classNames from "classnames";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 isolate z-20 w-full bg-[#444] border-b border-[#00000033] ">
      <div className="container mx-auto flex h-[69px] w-full items-center justify-between overflow-hidden px-[10px]">
        {/* <!-- mobile nav menue  --> */}
        <div
          className={classNames(
            "fixed top-[69px] mr-[-10px] flex md:hidden  w-full  bg-[#555] ",
            open ? " h-auto " : " h-0 overflow-hidden ",
          )}
        >
          <ul className="flex flex-col items-start divide-y divide-[#666] text-white w-full [&_li]:w-full">
            <li className="relative flex cursor-pointer items-center gap-2 px-[20px] py-[25px] hover:bg-[#505050]">
              <a href="/" className="flex items-center gap-[7px]">
                {" "}
                <img
                  src="https://jobinja.ir/assets/img/navicons/house.png"
                  className="size-[16px]"
                  alt=""
                />
                خانه{" "}
              </a>
            </li>
            <li className="relative flex cursor-pointer items-center gap-2 px-[20px] py-[25px] hover:bg-[#505050]">
              <a href="/" className="flex items-center gap-[7px]">
                {" "}
                <img
                  src="https://jobinja.ir/assets/img/navicons/magnifier.png"
                  className="size-[16px]"
                  alt=""
                />
                جستجوی مشاغل{" "}
              </a>
            </li>
            <li className="relative flex cursor-pointer items-center gap-2 px-[20px] py-[25px] hover:bg-[#505050]">
              <a href="/" className="flex items-center gap-[7px]">
                {" "}
                <img
                  src="https://jobinja.ir/assets/img/navicons/sparkles.png"
                  className="size-[16px]"
                  alt=""
                />
                رزومه ساز{" "}
              </a>
            </li>
            <li className="relative flex cursor-pointer items-center gap-2 px-[20px] py-[25px] hover:bg-[#505050]">
              <a href="/" className="flex items-center gap-[7px]">
                {" "}
                <img
                  src="https://jobinja.ir/assets/img/navicons/gemstone.png"
                  className="size-[16px]"
                  alt=""
                />
                50 شرکت برتر{" "}
              </a>
            </li>
          </ul>
        </div>

        <div className=" max-w-[1100px] mx-auto h-[69px] hidden lg:flex w-full items-center justify-between overflow-hidden px-[10px] ">
          {/* <!-- right --> */}
          <div className="hidden lg:block">
            <div>
              <ul className="lisub flex items-center text-white">
                <li className="relative flex cursor-pointer items-center gap-2 px-[20px] py-[25px] hover:bg-[#505050]">
                  <div className="absolute right-0 top-0 h-full w-[2px] border-l border-r border-l-[#00000033] border-r-[#ffffff1a]"></div>
                  <a href="/" className="flex items-center gap-[7px]">
                    {" "}
                    <img
                      src="https://jobinja.ir/assets/img/navicons/house.png"
                      className="size-[16px]"
                      alt=""
                    />
                    خانه{" "}
                  </a>
                </li>
                <li className="relative flex cursor-pointer items-center gap-2 px-[20px] py-[25px] hover:bg-[#505050]">
                  <div className="absolute right-0 top-0 h-full w-[2px] border-l border-r border-l-[#00000033] border-r-[#ffffff1a]"></div>

                  <a href="/" className="flex items-center gap-[7px]">
                    {" "}
                    <img
                      src="https://jobinja.ir/assets/img/navicons/magnifier.png"
                      className="size-[16px]"
                      alt=""
                    />
                    جستجوی مشاغل{" "}
                  </a>
                </li>
                <li className="relative flex cursor-pointer items-center gap-2 px-[20px] py-[25px] hover:bg-[#505050]">
                  <div className="absolute right-0 top-0 h-full w-[2px] border-l border-r border-l-[#00000033] border-r-[#ffffff1a]"></div>

                  <a href="/" className="flex items-center gap-[7px]">
                    {" "}
                    <img
                      src="https://jobinja.ir/assets/img/navicons/sparkles.png"
                      className="size-[16px]"
                      alt=""
                    />
                    رزومه ساز{" "}
                  </a>
                </li>
                <li className="relative flex cursor-pointer items-center gap-2 px-[20px] py-[25px] hover:bg-[#505050]">
                  <div className="absolute right-0 top-0 h-full w-[2px] border-l border-r border-l-[#00000033] border-r-[#ffffff1a]"></div>

                  <a href="/" className="flex items-center gap-[7px]">
                    {" "}
                    <img
                      src="https://jobinja.ir/assets/img/navicons/gemstone.png"
                      className="size-[16px]"
                      alt=""
                    />
                    50 شرکت برتر{" "}
                  </a>
                  <div className="absolute left-0 top-0 h-full w-[2px] border-l border-r border-l-[#00000033] border-r-[#ffffff1a]"></div>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- left --> */}
          <div className="hidden h-full lg:block">
            <div className="flex h-full flex-row-reverse items-center justify-center gap-6">
              <div className="relative flex h-full items-center justify-center">
                <div className="absolute right-0 top-0 h-full w-[2px] border-l border-r border-l-[#00000033] border-r-[#ffffff1a]"></div>
                <div className="absolute left-0 top-0 h-full w-[2px] border-l border-r border-l-[#00000033] border-r-[#ffffff1a]"></div>

                <a href="/">
                  {" "}
                  <img
                    src="https://jobinja.ir/assets/img/logo.png"
                    alt="logo"
                    className="flex w-[110px] items-center justify-center px-[10px]"
                  />
                </a>
              </div>
              <div className="group cursor-pointer stroke-[#777]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-[32px] stroke-[#777] group-hover:stroke-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- mobile header --> */}
        <div className="flex h-[70px] w-full items-center justify-between lg:hidden">
          {/* <!-- right --> */}
          <div className="flex items-center gap-[20px]">
            <div
              className="cursor-pointer rounded-[3px] bg-[#555] p-2"
              onClick={() => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-[32px] shrink-0 stroke-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="size-[28px] cursor-pointer stroke-[#777] hover:stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          {/* <!-- middle --> */}
          <div>
            <a href="/">
              {" "}
              <img
                src="https://jobinja.ir/assets/img/logo.png"
                alt="logo"
                className="flex w-[110px] items-center justify-center px-[10px]"
              />
            </a>
          </div>

          {/* <!-- left --> */}
          <div className="flex items-center gap-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="size-[32px] cursor-pointer stroke-[#777] hover:stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-[32px] cursor-pointer fill-[#777] hover:fill-white"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
