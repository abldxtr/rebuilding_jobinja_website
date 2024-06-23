"use client";

import classNames from "classnames";
import { MouseEventHandler, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
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
// import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

// import { MdLocationPin } from "react-icons/md";

export function Input1() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const Inputref = useRef(null);

  const handleClickOutside = () => {
    setOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);
  useOnClickOutside(Inputref, handleClickOutside);

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
  const ref = useRef(null);
  const Inputref = useRef(null);

  const handleClickOutside = () => {
    setOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);
  useOnClickOutside(Inputref, handleClickOutside);
  const [query, setQuery] = useState("");

  const people = [
    { id: 1, name: "Tom Cook" },
    { id: 2, name: "Wade Cooper" },
    { id: 3, name: "Tanya Fox" },
    { id: 4, name: "Arlene Mccoy" },
    { id: 5, name: "Devon Webb" },
  ];
  const [selected, setSelected] = useState(people[1]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div
      className=" mb-[10px] h-full w-full isolate "
      // onClick={() => setOpen(!open)}
      // ref={ref}
    >
      <ProvinceComboBox />
    </div>
  );
}

export function Input3() {
  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    // <div
    //   className="relative mb-[10px] h-full w-full isolate "
    //   // onClick={() => listener()}
    //   onClick={() => setOpen(true)}
    //   ref={ref}
    // >
    //   {/* <!-- icone --> */}

    //   <div className="absolute right-[8px] top-[14px]">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke-width="3"
    //       stroke="currentColor"
    //       className="size-[18px] cursor-pointer stroke-[#9d9d9d]"
    //     >
    //       <path
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    //       ></path>
    //     </svg>
    //   </div>
    //   {/* <!-- input --> */}
    //   <input
    //     type="text"
    //     name="search"
    //     id="search-01"
    //     className={classNames(
    //       "h-full w-full rounded-[3px] border border-[#e5e5e5] p-[10px] pr-[34px] text-[14px] outline-none ",
    //       open ? "" : "[box-shadow:inset_0_-1px_0_1px_#d0d0d0]",
    //     )}
    //     placeholder="عنوان شغلی، نام شرکت، مهارت یا..."
    //   />
    //   {/* dropdown menue */}

    //   <div
    //     className={classNames(
    //       " absolute w-full h-[120px] bg-white left-0 top-full mt-[-4px] px-[2px]  ",
    //       open ? "  opacity-100" : " opacity-0 pointer-events-none ",
    //     )}
    //     ref={Inputref}
    //   >
    //     <div className=" px-[15px] pb-[10px]  ">
    //       <input
    //         type="text"
    //         className="w-full rounded-[3px] border border-[#3ab1e4] p-[4px] mt-1 pr-[34px] text-[14px] outline-none focus:[box-shadow:inset_0_-1px_0_1px_#d0d0d0]  "
    //       />
    //     </div>
    //   </div>
    // </div>

    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-full  ">
        <Button
          variant="Input"
          role="combobox"
          aria-expanded={open}
          // className="w-full justify-between"
        >
          {value
            ? provinceOptions.find((item) => item.value === value)?.label
            : "همه دسته بندی ها"}
          {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="!w-[313px] p-0 !rounded-[0px] !max-h-[212px] !overflow-hidden ">
        <Command>
          <CommandInput
            placeholder=""
            className="border border-[#3ab1e4] !rounded-[0px] !focus:outline-0 !p-[4px] !text-[12px] !px-[15px] !mb-[10px]   "
          />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup className="!max-h-[212px] !overflow-hidden">
              {provinceOptions.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="border-b border-[#e5e5e5] text-[12px] px-[15px] cursor-poiner p-[6px] text-[#555] hover:bg-[#e5e5e5] font-normal "
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
