import classNames from "classnames";
import { data } from "./data";

export default function Main_left() {
  return (
    <div>
      {/* <!-- titr --> */}
      <div className="flex items-center gap-[20px] border-b border-[#e7e7e7] pb-[9px] [&_div]:cursor-pointer">
        {/* <!-- 1 --> */}
        <div className="text-[14px] font-medium text-[#555] underline decoration-[#1abc9c] decoration-[3px] underline-offset-[15px]">
          آگهی‌های پیشنهادی
        </div>
        {/* <!-- 2 --> */}
        <div className="text-[14px] font-normal text-[#777]">نشان‌شده‌ها</div>
        {/* <!-- 3 --> */}
        <div className="text-[14px] font-normal text-[#777]">
          درخواست‌های من
        </div>
      </div>

      {/* <!-- tozih --> */}
      <div className="mt-[20px] border-b border-[#e7e7e7] pb-[20px] text-[12px] font-normal text-[#a5a5a5]">
        بر اساس آخرین بازدید یا آخرین رزومه ارسالی شما نمایش داده می‌شوند.
      </div>

      {/* <!-- main --> */}
      <div>
        {/* <!-- 1 --> */}

        {/* <!-- right --> */}

        {data.map((item, index) => {
          return (
            <>
              <div className="border-b border-[#e7e7e7] py-[25px]">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:ml-[22px]">
                      {/* <!-- logo --> */}

                      <a
                        href="/"
                        className="flex h-full w-full items-start justify-center"
                      >
                        <img
                          src={item.link}
                          alt="logo"
                          className="mb-[20px] size-[64px] rounded-[3px] bg-[#f5f5f5]"
                        />
                      </a>
                    </div>
                    {/* <!-- txt --> */}
                    <div className="flex-1">
                      <h2 className="mb-[10px]">
                        <a
                          href="/"
                          className={classNames(
                            "text-[16px] font-medium ",
                            item.state
                              ? "text-[#c93d31] hover:text-[#a43228]"
                              : "text-[#3ab0e4] hover:text-[#1988b8]",
                          )}
                        >
                          {item.title}{" "}
                          {item.state ? (
                            <span className="relative top-[-2px] rounded-[3px] bg-[#c93d31] p-[5px] text-[11px] font-medium leading-[1] text-white">
                              استخدام فوری
                            </span>
                          ) : (
                            <span className="relative top-[-2px] rounded-[3px] p-[5px] text-[11px] font-light leading-[1] text-[#777]">
                              ( {item.posted_days_ago} )
                            </span>
                          )}
                        </a>
                      </h2>
                      <div className="mb-[4px] flex items-center">
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_505_6588)">
                            <path
                              d="M11.1123 9.95485H10.8343V0.885711C10.8343 0.672711 10.6616 0.5 10.4486 0.5H1.55144C1.33844 0.5 1.16573 0.672711 1.16573 0.885711V9.95485H0.887695C0.674695 9.95485 0.501984 10.1276 0.501984 10.3406V12.1143C0.501984 12.3273 0.674695 12.5 0.887695 12.5H4.45795C4.45774 12.4947 4.45713 12.4895 4.45713 12.4841V9.1498C4.45713 8.9368 4.62984 8.76409 4.84284 8.76409H7.15713C7.37018 8.76409 7.54284 8.9368 7.54284 9.1498V12.4841C7.54284 12.4895 7.54226 12.4947 7.54202 12.5H11.1123C11.3253 12.5 11.498 12.3273 11.498 12.1143V10.3406C11.498 10.1275 11.3254 9.95485 11.1123 9.95485ZM4.15502 7.16C4.15502 7.373 3.98231 7.54571 3.76931 7.54571H2.50931C2.29631 7.54571 2.1236 7.373 2.1236 7.16V5.9C2.1236 5.687 2.29631 5.51429 2.50931 5.51429H3.76931C3.98231 5.51429 4.15502 5.687 4.15502 5.9V7.16ZM4.15502 4.15142C4.15502 4.36442 3.98231 4.53713 3.76931 4.53713H2.50931C2.29631 4.53713 2.1236 4.36442 2.1236 4.15142V2.89142C2.1236 2.67842 2.29631 2.50571 2.50931 2.50571H3.76931C3.98231 2.50571 4.15502 2.67842 4.15502 2.89142V4.15142ZM7.01573 7.16C7.01573 7.373 6.84302 7.54571 6.63002 7.54571H5.37002C5.15702 7.54571 4.98431 7.373 4.98431 7.16V5.9C4.98431 5.687 5.15702 5.51429 5.37002 5.51429H6.63002C6.84302 5.51429 7.01573 5.687 7.01573 5.9V7.16ZM7.01573 4.15142C7.01573 4.36442 6.84302 4.53713 6.63002 4.53713H5.37002C5.15702 4.53713 4.98431 4.36442 4.98431 4.15142V2.89142C4.98431 2.67842 5.15702 2.50571 5.37002 2.50571H6.63002C6.84302 2.50571 7.01573 2.67842 7.01573 2.89142V4.15142ZM9.87644 7.16C9.87644 7.373 9.70373 7.54571 9.49073 7.54571H8.23073C8.01773 7.54571 7.84502 7.373 7.84502 7.16V5.9C7.84502 5.687 8.01773 5.51429 8.23073 5.51429H9.49073C9.70373 5.51429 9.87644 5.687 9.87644 5.9V7.16ZM9.87644 4.15142C9.87644 4.36442 9.70373 4.53713 9.49073 4.53713H8.23073C8.01773 4.53713 7.84502 4.36442 7.84502 4.15142V2.89142C7.84502 2.67842 8.01773 2.50571 8.23073 2.50571H9.49073C9.70373 2.50571 9.87644 2.67842 9.87644 2.89142V4.15142Z"
                              fill="#CCCCCC"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_505_6588">
                              <rect
                                width="12"
                                height="12"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="mr-[6px] text-[12px] font-light text-[#777]">
                          {item.company}{" "}
                        </span>
                      </div>
                      <div className="mb-[4px] flex items-center">
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_505_6545)">
                            <path
                              d="M6 1.5C4.065 1.5 2.5 3.065 2.5 5C2.5 7.625 6 11.5 6 11.5C6 11.5 9.5 7.625 9.5 5C9.5 3.065 7.935 1.5 6 1.5ZM6 6.25C5.31 6.25 4.75 5.69 4.75 5C4.75 4.31 5.31 3.75 6 3.75C6.69 3.75 7.25 4.31 7.25 5C7.25 5.69 6.69 6.25 6 6.25Z"
                              fill="#CCCCCC"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_505_6545">
                              <rect
                                width="12"
                                height="12"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="mr-[6px] text-[12px] font-light text-[#777]">
                          {item.location}
                        </span>
                      </div>
                      <div className="mb-[4px] flex items-center">
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_505_6552)">
                            <path
                              d="M9.18496 6.8624V1.46646H1.13127V11.5336H4.83595C5.10173 11.5336 5.31917 11.751 5.31917 12.0168C5.31917 12.2826 5.10173 12.5 4.83595 12.5H0.648024C0.382247 12.5 0.16481 12.2826 0.16481 12.0168V0.983214C0.16481 0.717437 0.382274 0.5 0.648024 0.5H9.66814C9.93392 0.5 10.1514 0.717437 10.1514 0.983214V6.8624C10.1514 7.12818 9.93392 7.34562 9.66814 7.34562C9.40237 7.34562 9.18496 7.12818 9.18496 6.8624ZM11.6736 8.03825C11.4722 7.86106 11.1662 7.87717 10.989 8.07852L8.33931 11.0262L7.01046 9.74563C6.81718 9.56039 6.51113 9.56843 6.32589 9.76174C6.14065 9.95505 6.1487 10.2611 6.342 10.4463L8.03327 12.0731C8.12185 12.1617 8.24266 12.2101 8.37151 12.2101C8.37956 12.2101 8.37956 12.2101 8.38763 12.2101C8.51648 12.202 8.64533 12.1456 8.72587 12.049L11.7058 8.73086C11.891 8.52147 11.8749 8.21545 11.6736 8.03825ZM7.41313 3.3188H3.06415C2.79837 3.3188 2.58093 3.53623 2.58093 3.80201C2.58093 4.06779 2.79837 4.28523 3.06415 4.28523H7.41313C7.67891 4.28523 7.89634 4.06779 7.89634 3.80201C7.89634 3.53623 7.67891 3.3188 7.41313 3.3188ZM7.89637 6.45973C7.89637 6.19395 7.67893 5.97652 7.41316 5.97652H3.06415C2.79837 5.97652 2.58093 6.19395 2.58093 6.45973C2.58093 6.72551 2.79837 6.94294 3.06415 6.94294H7.41313C7.67891 6.94294 7.89637 6.72551 7.89637 6.45973ZM3.06415 8.55369C2.79837 8.55369 2.58093 8.77113 2.58093 9.03691C2.58093 9.30268 2.79837 9.52012 3.06415 9.52012H4.35274C4.61852 9.52012 4.83595 9.30268 4.83595 9.03691C4.83595 8.77113 4.61852 8.55369 4.35274 8.55369H3.06415Z"
                              fill="#CCCCCC"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_505_6552">
                              <rect
                                width="12"
                                height="12"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="mr-[6px] text-[12px] font-light text-[#777]">
                          {item.employment_type}
                        </span>
                      </div>
                    </div>

                    {/* <!-- left --> */}
                    <div className="pt-[20px]">
                      <a
                        href="/"
                        className="mb-[10px] flex h-[50px] w-full items-center justify-center bg-[#1abc9c] text-[14px] font-bold text-white hover:bg-[#1dd3af] md:w-[120px]"
                      >
                        ارسال رزومه
                      </a>

                      <button className="flex h-[30px] w-full items-center justify-center gap-1 rounded-[3px] border border-black/5 text-[11px] text-[#878787f2] md:w-[120px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-[14px]"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>
                        نشان کردن
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        {/* <!-- 2 --> */}

        <div className="border-b border-[#e7e7e7] py-[25px]">
          <div>
            {/* <!-- right --> */}
            <div className="flex flex-col md:flex-row md:items-center">
              {/* <!-- logo --> */}
              <div className="md:ml-[22px]">
                <a
                  href="/"
                  className="flex h-full w-full items-start justify-center"
                >
                  <img
                    src="https://thumb2.jobinjacdn.com/a5WDyKK__2tRwEPKQ432Ujvw2ks=/fit-in/128x128/filters:strip_exif():fill(transparent):quality(100)/https://mstorage2.jobinjacdn.com/other/files/uploads/images/709c2d1a-f967-11e9-9370-d6b790452c1a_625c586a-9668-4a84-a049-888c22541fe2/main.png"
                    alt="logo"
                    className="mb-[20px] size-[64px] rounded-[3px] bg-[#f5f5f5]"
                  />
                </a>
              </div>
              {/* <!-- txt --> */}
              <div className="flex-1">
                <h2 className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[16px] font-medium text-[#3ab0e4] hover:text-[#1988b8]"
                  >
                    {" "}
                    برنامه‌نویس ReactJs (دورکاری){" "}
                    <span className="relative top-[-2px] rounded-[3px] p-[5px] text-[11px] font-light leading-[1] text-[#777]">
                      (۱ روز پیش)
                    </span>{" "}
                  </a>
                </h2>
                <div className="mb-[4px] flex items-center">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_505_6588)">
                      <path
                        d="M11.1123 9.95485H10.8343V0.885711C10.8343 0.672711 10.6616 0.5 10.4486 0.5H1.55144C1.33844 0.5 1.16573 0.672711 1.16573 0.885711V9.95485H0.887695C0.674695 9.95485 0.501984 10.1276 0.501984 10.3406V12.1143C0.501984 12.3273 0.674695 12.5 0.887695 12.5H4.45795C4.45774 12.4947 4.45713 12.4895 4.45713 12.4841V9.1498C4.45713 8.9368 4.62984 8.76409 4.84284 8.76409H7.15713C7.37018 8.76409 7.54284 8.9368 7.54284 9.1498V12.4841C7.54284 12.4895 7.54226 12.4947 7.54202 12.5H11.1123C11.3253 12.5 11.498 12.3273 11.498 12.1143V10.3406C11.498 10.1275 11.3254 9.95485 11.1123 9.95485ZM4.15502 7.16C4.15502 7.373 3.98231 7.54571 3.76931 7.54571H2.50931C2.29631 7.54571 2.1236 7.373 2.1236 7.16V5.9C2.1236 5.687 2.29631 5.51429 2.50931 5.51429H3.76931C3.98231 5.51429 4.15502 5.687 4.15502 5.9V7.16ZM4.15502 4.15142C4.15502 4.36442 3.98231 4.53713 3.76931 4.53713H2.50931C2.29631 4.53713 2.1236 4.36442 2.1236 4.15142V2.89142C2.1236 2.67842 2.29631 2.50571 2.50931 2.50571H3.76931C3.98231 2.50571 4.15502 2.67842 4.15502 2.89142V4.15142ZM7.01573 7.16C7.01573 7.373 6.84302 7.54571 6.63002 7.54571H5.37002C5.15702 7.54571 4.98431 7.373 4.98431 7.16V5.9C4.98431 5.687 5.15702 5.51429 5.37002 5.51429H6.63002C6.84302 5.51429 7.01573 5.687 7.01573 5.9V7.16ZM7.01573 4.15142C7.01573 4.36442 6.84302 4.53713 6.63002 4.53713H5.37002C5.15702 4.53713 4.98431 4.36442 4.98431 4.15142V2.89142C4.98431 2.67842 5.15702 2.50571 5.37002 2.50571H6.63002C6.84302 2.50571 7.01573 2.67842 7.01573 2.89142V4.15142ZM9.87644 7.16C9.87644 7.373 9.70373 7.54571 9.49073 7.54571H8.23073C8.01773 7.54571 7.84502 7.373 7.84502 7.16V5.9C7.84502 5.687 8.01773 5.51429 8.23073 5.51429H9.49073C9.70373 5.51429 9.87644 5.687 9.87644 5.9V7.16ZM9.87644 4.15142C9.87644 4.36442 9.70373 4.53713 9.49073 4.53713H8.23073C8.01773 4.53713 7.84502 4.36442 7.84502 4.15142V2.89142C7.84502 2.67842 8.01773 2.50571 8.23073 2.50571H9.49073C9.70373 2.50571 9.87644 2.67842 9.87644 2.89142V4.15142Z"
                        fill="#CCCCCC"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_505_6588">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0 0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="mr-[6px] text-[12px] font-light text-[#777]">
                    توسعه فناوری دینگ | Ding Online Attendance
                  </span>
                </div>
                <div className="mb-[4px] flex items-center">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_505_6545)">
                      <path
                        d="M6 1.5C4.065 1.5 2.5 3.065 2.5 5C2.5 7.625 6 11.5 6 11.5C6 11.5 9.5 7.625 9.5 5C9.5 3.065 7.935 1.5 6 1.5ZM6 6.25C5.31 6.25 4.75 5.69 4.75 5C4.75 4.31 5.31 3.75 6 3.75C6.69 3.75 7.25 4.31 7.25 5C7.25 5.69 6.69 6.25 6 6.25Z"
                        fill="#CCCCCC"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_505_6545">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0 0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="mr-[6px] text-[12px] font-light text-[#777]">
                    تهران، تهران
                  </span>
                </div>
                <div className="mb-[4px] flex items-center">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_505_6552)">
                      <path
                        d="M9.18496 6.8624V1.46646H1.13127V11.5336H4.83595C5.10173 11.5336 5.31917 11.751 5.31917 12.0168C5.31917 12.2826 5.10173 12.5 4.83595 12.5H0.648024C0.382247 12.5 0.16481 12.2826 0.16481 12.0168V0.983214C0.16481 0.717437 0.382274 0.5 0.648024 0.5H9.66814C9.93392 0.5 10.1514 0.717437 10.1514 0.983214V6.8624C10.1514 7.12818 9.93392 7.34562 9.66814 7.34562C9.40237 7.34562 9.18496 7.12818 9.18496 6.8624ZM11.6736 8.03825C11.4722 7.86106 11.1662 7.87717 10.989 8.07852L8.33931 11.0262L7.01046 9.74563C6.81718 9.56039 6.51113 9.56843 6.32589 9.76174C6.14065 9.95505 6.1487 10.2611 6.342 10.4463L8.03327 12.0731C8.12185 12.1617 8.24266 12.2101 8.37151 12.2101C8.37956 12.2101 8.37956 12.2101 8.38763 12.2101C8.51648 12.202 8.64533 12.1456 8.72587 12.049L11.7058 8.73086C11.891 8.52147 11.8749 8.21545 11.6736 8.03825ZM7.41313 3.3188H3.06415C2.79837 3.3188 2.58093 3.53623 2.58093 3.80201C2.58093 4.06779 2.79837 4.28523 3.06415 4.28523H7.41313C7.67891 4.28523 7.89634 4.06779 7.89634 3.80201C7.89634 3.53623 7.67891 3.3188 7.41313 3.3188ZM7.89637 6.45973C7.89637 6.19395 7.67893 5.97652 7.41316 5.97652H3.06415C2.79837 5.97652 2.58093 6.19395 2.58093 6.45973C2.58093 6.72551 2.79837 6.94294 3.06415 6.94294H7.41313C7.67891 6.94294 7.89637 6.72551 7.89637 6.45973ZM3.06415 8.55369C2.79837 8.55369 2.58093 8.77113 2.58093 9.03691C2.58093 9.30268 2.79837 9.52012 3.06415 9.52012H4.35274C4.61852 9.52012 4.83595 9.30268 4.83595 9.03691C4.83595 8.77113 4.61852 8.55369 4.35274 8.55369H3.06415Z"
                        fill="#CCCCCC"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_505_6552">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0 0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="mr-[6px] text-[12px] font-light text-[#777]">
                    قرارداد پاره‌وقت (حقوق توافقی)
                  </span>
                </div>
              </div>

              {/* <!-- left --> */}
              <div className="pt-[20px]">
                <a
                  href="/"
                  className="mb-[10px] flex h-[50px] w-full items-center justify-center bg-[#1abc9c] text-[14px] font-bold text-white hover:bg-[#1dd3af] md:w-[120px]"
                >
                  ارسال رزومه
                </a>

                <button className="flex h-[30px] w-full items-center justify-center gap-1 rounded-[3px] border border-black/5 text-[11px] text-[#878787f2] md:w-[120px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-[14px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  نشان کردن
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- more --> */}
        <div className="mt-[25px]">
          <a
            href="/"
            className="group flex w-full items-center justify-end fill-[#3AB0E4] text-[12px] font-medium text-[#3ab1e4] hover:fill-[#1988b8] hover:text-[#1988b8]"
          >
            مشاهده همه
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className="  "
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.5 13.5L6 9L10.5 4.5L11.55 5.55L8.1 9L11.55 12.45L10.5 13.5Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
