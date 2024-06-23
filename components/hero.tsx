import { Input1, Input2, Input3 } from "./input";

export default function Hero() {
  return (
    <div className="isolate z-10 bg-[linear-gradient(89.01deg,#3ab0e4_-10.97%,#1abc9c_99.15%)] pt-[90px] text-center   ">
      <h1 className="text-center font-medium text-white">
        <span className="cursor-pointer underline underline-offset-4 hover:text-[#006b99]">
          30,219
        </span>{" "}
        آگهی استخدام فعال در{" "}
        <span className="cursor-pointer underline underline-offset-4 hover:text-[#006b99]">
          12,287
        </span>{" "}
        شرکت ایرانی
      </h1>
      <h2 className="mt-[5px] text-[12px] font-bold text-white/70">
        جابینجا: کاریابی آنلاین با بیشترین تعداد آگهی استخدام در ایران
      </h2>
      {/* <!-- form --> */}
      <div className=" max-w-[1100px] mx-auto mt-[20px] flex w-full flex-col px-[10px] lg:flex-row lg:gap-3">
        {/* <!-- 1 input --> */}
        <Input1 />

        {/* <!-- 2 --> */}
        <Input2 />

        {/* <!-- 3 --> */}
        <Input3 />

        {/* <!-- 4 input : button --> */}
        <div className="shrink-0 lg:w-max lg:flex-nowrap">
          <button className="w-full bg-[#ffcd70] text-[14px] font-medium leading-[44px] text-[#222] [box-shadow:inset_0_-3px_0_0_#ffb833] hover:bg-[#ffd68a] lg:px-[18px]">
            جستجو در مشاغل
          </button>
        </div>
      </div>
      <div className="mt-[17px] flex w-full items-center justify-center pb-4 text-center">
        <div className="flex cursor-pointer items-center text-white">
          مشاهده همه آگهی‌های استخدام
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 13.5L6.5 9L11 4.5L12.05 5.55L8.6 9L12.05 12.45L11 13.5Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
