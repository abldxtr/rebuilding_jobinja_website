export default function Hero() {
  return (
    <div className="isolate z-10 bg-[linear-gradient(89.01deg,#3ab0e4_-10.97%,#1abc9c_99.15%)] pt-[90px] text-center">
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
      <div className="container mx-auto mt-[20px] flex w-full flex-col px-[10px] lg:flex-row lg:gap-3">
        {/* <!-- 1 input --> */}
        <div className="relative mb-[10px] h-full w-full">
          {/* <!-- icone --> */}

          <div className="absolute right-[8px] top-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="size-[18px] cursor-pointer stroke-[#9d9d9d]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              ></path>
            </svg>
          </div>
          {/* <!-- input --> */}
          <input
            type="text"
            name="search"
            id="search-01"
            className="h-full w-full rounded-[3px] border border-[#e5e5e5] p-[10px] pr-[34px] text-[14px] outline-none focus:[box-shadow:inset_0_-1px_0_1px_#d0d0d0]"
            placeholder="عنوان شغلی، نام شرکت، مهارت یا..."
          />
        </div>
        {/* <!-- 2 --> */}
        <div className="relative mb-[10px] hidden h-full w-full lg:block">
          {/* <!-- icone --> */}

          <div className="absolute right-[8px] top-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="size-[18px] cursor-pointer stroke-[#9d9d9d]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              ></path>
            </svg>
          </div>
          {/* <!-- input --> */}
          <input
            type="text"
            name="search"
            id="search-01"
            className="h-full w-full rounded-[3px] border border-[#e5e5e5] p-[10px] pr-[34px] text-[14px] outline-none focus:[box-shadow:inset_0_-1px_0_1px_#d0d0d0]"
            placeholder="عنوان شغلی، نام شرکت، مهارت یا..."
          />
        </div>
        {/* <!-- 3 --> */}
        <div className="relative mb-[10px] hidden h-full w-full lg:block">
          {/* <!-- icone --> */}

          <div className="absolute right-[8px] top-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="size-[18px] cursor-pointer stroke-[#9d9d9d]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              ></path>
            </svg>
          </div>
          {/* <!-- input --> */}
          <input
            type="text"
            name="search"
            id="search-01"
            className="h-full w-full rounded-[3px] border border-[#e5e5e5] p-[10px] pr-[34px] text-[14px] outline-none focus:[box-shadow:inset_0_-1px_0_1px_#d0d0d0]"
            placeholder="عنوان شغلی، نام شرکت، مهارت یا..."
          />
        </div>
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
