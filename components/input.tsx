"use client";

import classNames from "classnames";
import { MouseEventHandler, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProvinceComboBox from "./input.select";

export function Input1() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const Inputref = useRef(null);

  // const handleClickOutside = () => {
  //   setOpen(false);
  // };

  // useOnClickOutside(ref, handleClickOutside);
  // useOnClickOutside(Inputref, handleClickOutside);

  return (
    <div
      className="relative mb-[10px] h-full w-full isolate "
      onClick={() => setOpen(!open)}
      ref={ref}
    >
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
        className={classNames(
          "h-full w-full rounded-[3px] border border-[#e5e5e5] p-[10px] pr-[34px] text-[14px] outline-none focus:[box-shadow:inset_0_-1px_0_1px_#d0d0d0] ",
          //   open ? "" : "",
        )}
        placeholder="عنوان شغلی، نام شرکت، مهارت یا..."
      />
    </div>
  );
}

export function Input2() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className=" hidden lg:block w-full ">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="w-full   ">
          <Button
            variant="Input"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-[16px] flex items-center "
          >
            <div className="flex items-center gap-2 ">
              <FaLocationDot className="fill-[#aaa] stroke-[#aaa] shrink-0 size-[18px]" />

              <div className=" text-[14px] flex mt-[1px]  text-[##555] ">
                {value ? (
                  provinceOptions.find((item) => item.value === value)?.label
                ) : (
                  <span className=" text-[14px] flex  text-[##555] ">
                    همه استان‌ها
                  </span>
                )}
              </div>
            </div>
            <div>
              <svg
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className={classNames(
                  " fill-[#aaa] shrink-0 transition-transform duration-200",
                  open ? "rotate-180" : "rotate-0",
                )}
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
              </svg>
            </div>
            {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="!w-[300px] p-0 !rounded-[0px]   ">
          <Command>
            <CommandInput
              placeholder="جستجو..."
              className="border border-[#3ab1e4] !rounded-[0px] !focus:outline-0 !p-[4px] !text-[12px] !px-[15px] !my-[10px] !h-[31px]   "
            />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup className="!max-h-[212px] !overflow-y-auto custom-scroll  scrollbar-thin scrollbar scrollbar-thumb-[#00000080] scrollbar-track-[#00000040]   ">
                {provinceOptions.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    className={classNames(
                      "border-b border-[#e5e5e5] text-[14px] cursor-poiner px-[15px] cursor-poiner py-[6px] text-[#555] hover:bg-[#e5e5e5] font-normal ",
                      value === framework.value ? " bg-[#e5e5e5]" : " ",
                    )}
                  >
                    {/* <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value ? "opacity-100" : "opacity-0",
                          )}
                        /> */}
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function Input3() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className=" hidden lg:block w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="w-full  ">
          <Button
            variant="Input"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-[16px] flex items-center "
          >
            <div className="flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" fill-[#aaa] stroke-[#aaa] shrink-0 size-[18px] "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <div className=" text-[14px] flex  text-[##555] ">
                {value ? (
                  categories.find((item) => item.value === value)?.label
                ) : (
                  <span className=" text-[14px] flex  text-[##555] ">
                    همه دسته بندی‌ها
                  </span>
                )}
              </div>
            </div>
            <div>
              <svg
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className={classNames(
                  " fill-[#aaa] shrink-0 transition-transform duration-200 ",
                  open ? "rotate-180" : "rotate-0",
                )}
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
              </svg>
            </div>
            {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="!w-[300px] p-0 !rounded-[0px]   ">
          <Command>
            <CommandInput
              placeholder="جستجو..."
              className="border border-[#3ab1e4] !rounded-[0px] !focus:outline-0 !p-[4px] !text-[12px] !px-[15px] !my-[10px] !h-[31px]   "
            />
            <CommandList>
              <CommandEmpty>No category found.</CommandEmpty>
              <CommandGroup className="!max-h-[212px] !overflow-y-auto  custom-scroll  scrollbar-thin scrollbar scrollbar-thumb-[#00000080] scrollbar-track-[#00000040] ">
                {categories.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    className={classNames(
                      "border-b border-[#e5e5e5] text-[14px] cursor-poiner px-[15px] cursor-poiner py-[6px] text-[#555] hover:bg-[#e5e5e5] font-normal ",
                      value === framework.value ? "bg-[#e5e5e5]" : "",
                    )}
                  >
                    {/* <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value ? "opacity-100" : "opacity-0",
                          )}
                        /> */}
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

const provinces = [
  "همه‌ی استان‌ها",
  "تهران",
  "خراسان رضوی",
  "اصفهان",
  "البرز",
  "فارس",
  "قم",
  "مازندران",
  "آذربایجان شرقی",
  "گیلان",
  "یزد",
  "خوزستان",
  "کرمان",
  "مرکزی",
  "هرمزگان",
  "قزوین",
  "گلستان",
  "بوشهر",
  "سمنان",
  "آذربایجان غربی",
  "زنجان",
  "کرمانشاه",
  "همدان",
  "اردبیل",
  "کردستان",
  "سیستان و بلوچستان",
  "خراسان شمالی",
  "لرستان",
  "خراسان جنوبی",
  "چهارمحال بختیاری",
  "ایلام",
  "کهکیلویه و بویراحمد",
];

export const provinceOptions = provinces.map((province) => ({
  value: province,
  label: province,
}));

export const categories = [
  { value: "all", label: "همه‌ی دسته‌بندی‌ها" },
  { value: "sales_marketing", label: "فروش و بازاریابی" },
  { value: "web_programming_software", label: "وب،‌ برنامه‌نویسی و نرم‌افزار" },
  { value: "finance_accounting", label: "مالی و حسابداری" },
  { value: "office_admin", label: "مسئول دفتر، اجرائی و اداری" },
  { value: "digital_marketing", label: "دیجیتال مارکتینگ" },
  { value: "content_production_management", label: "تولید و مدیریت محتوا" },
  { value: "design", label: "طراحی" },
  { value: "customer_support", label: "پشتیبانی و امور مشتریان" },
  { value: "it_devops_server", label: "IT / DevOps / Server" },
  {
    value: "industrial_engineering_management",
    label: "مهندسی صنایع و مدیریت صنعتی",
  },
  { value: "education", label: "آموزش" },
  { value: "general_worker", label: "کارگر ساده، نیروی خدماتی" },
  { value: "electrical_engineering", label: "مهندسی برق و الکترونیک" },
  { value: "hr_personnel", label: "منابع انسانی و کارگزینی" },
  { value: "procurement_commerce", label: "خرید و بازرگانی" },
  { value: "civil_engineering_architecture", label: "مهندسی عمران و معماری" },
  { value: "cinema_video", label: "حوزه‌ سینما و تصویر" },
  { value: "technical_technician", label: "تکنسین فنی، تعمیرکار" },
  { value: "warehouse_management", label: "انبارداری" },
  {
    value: "mechanical_aerospace_engineering",
    label: "مهندسی مکانیک و هوافضا",
  },
  { value: "tourism", label: "گردشگری" },
  { value: "product_manager", label: "مدیر محصول" },
  {
    value: "market_research_economic_analysis",
    label: "تحقیق بازار و تحلیل اقتصادی",
  },
  { value: "medical_nursing_pharmacy", label: "پزشکی،‌ پرستاری و دارویی" },
  {
    value: "skilled_worker_industrial_worker",
    label: "کارگر ماهر، کارگر صنعتی",
  },
  { value: "research_development", label: "تحقیق و توسعه" },
  { value: "transportation", label: "حمل و نقل" },
  { value: "food_industry", label: "صنایع غذایی" },
  { value: "driver_delivery", label: "راننده، پیک موتوری" },
  { value: "hospitality", label: "هتلداری" },
  { value: "legal_expert_lawyer", label: "کارشناس حقوقی،‌ وکالت" },
  { value: "public_relations", label: "روابط عمومی" },
  { value: "insurance_management", label: "مدیریت بیمه" },
  { value: "chemical_petroleum_engineering", label: "مهندسی شیمی و نفت" },
  { value: "translation", label: "ترجمه" },
  { value: "hse", label: "HSE" },
  { value: "chemistry_pharmacy", label: "شیمی، داروسازی" },
  { value: "guard", label: "نگهبان" },
  { value: "mining_metallurgy_engineering", label: "مهندسی معدن و متالورژی" },
  { value: "life_sciences_lab", label: "علوم زیستی و آزمایشگاهی" },
  { value: "biomedical_engineering", label: "مهندسی پزشکی" },
  {
    value: "textile_fashion_design",
    label: "مهندسی نساجی، طراحی پارچه و لباس",
  },
  { value: "agricultural_engineering", label: "مهندسی کشاورزی" },
  { value: "journalism", label: "خبر‌نگاری" },
  { value: "polymer_engineering", label: "مهندسی پلیمر" },
  { value: "music_sound", label: "حوزه‌ موسیقی و صدا" },
  { value: "ceo", label: "CEO" },
  { value: "physical_education", label: "تربیت بدنی" },
];
