"use client";

import * as React from "react";
import { companies_data } from "./data";
import Autoplay from "embla-carousel-autoplay";

// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSpacing() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // setCount(api.scrollSnapList().length)
    // setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      //   setCurrent(api.selectedScrollSnap() + 1)
    });
  }, [api]);
  return (
    <>
      <div className=" th-[36px] my-[20px]  ">
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
        className="max-w-[1100px] mx-auto pt-[20px] "
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
        opts={{
          align: "start",
        }}
        setApi={setApi}
      >
        <CarouselContent className="-ml-1">
          {companies_data.companies.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/3 lg:basis-1/6"
            >
              <div className=" w-[178px]  flex flex-col justify-center items-center cursor-pointer group  ">
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
