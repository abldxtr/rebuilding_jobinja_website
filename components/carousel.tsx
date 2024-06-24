"use client";

import * as React from "react";
import { companies_data } from "./data";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSpacing() {
  return (
    <>
      <div className=" h-[36px] my-[20px]  ">
        <div className=" flex w-full  items-center justify-center   ">
          <p className="bg-[#f9f9f9] py-[6px] px-[10px] cursor-normal rounded-[40px] text-[12px] text-[#555]   ">
            یک رزومه در جابینجا به شرکت{" "}
            <span className=" text-[#3ab1e4] hover:text-[#1988b8] cursor-pointer text-[12px]  ">
              اسمایلینو
            </span>{" "}
            ارسال شد.
          </p>
        </div>
      </div>

      <Carousel
        className="w-full max-w-[1100px] mx-auto overflow-hidden group "
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className=" mx-10  ">
          {companies_data.companies.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 sm:basis-1/3 lg:basis-1/6"
            >
              <div className=" flex flex-col justify-center items-center cursor-pointer group  ">
                {/* img */}
                <div className=" size-[90px] ">
                  <img src={item.logo_url} alt="logo" />
                </div>
                {/* txt */}
                <div className=" flex flex-col mt-[20px] ">
                  <div className=" text-[#a5a5a5] font-normal text-[11px] ">
                    {item.job_count}
                  </div>
                  <div className="  font-semibold text-[#3ab1e4] group-hover:text-[#1988b8] text-[11px] ">
                    {item.name}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="lg:flex items-center justify-center hidden !-left-0 opacity-0 group-hover:opacity-100 " />
        <CarouselNext className="lg:flex items-center justify-center hidden !-right-0 opacity-0 group-hover:opacity-100  " />
      </Carousel>

      {/*  */}
    </>
  );
}
