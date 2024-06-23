import React from "react";
import Select from "react-select";

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

const ProvinceComboBox = () => {
  return (
    <div className="h-full w-full rounded-[3px] border border-[#e5e5e5] p-[10px] pr-[34px] text-[14px] outline-none focus:[box-shadow:inset_0_-1px_0_1px_#d0d0d0]   ">
      {/* <label htmlFor="provinces">انتخاب استان:</label> */}
      <Select
        id="provinces"
        options={provinceOptions}
        defaultValue={provinceOptions[0]}
        classNames={{
          control: (state) =>
            state.isFocused ? "text-red-400 bg-[#e5e5e5]" : "border-grey-300",
        }}
      />
      {/* border-b border-[#e5e5e5] text-[12px] px-[15px] cursor-poiner p-[6px] text-[#555] bg-[#e5e5e5] font-normal */}
    </div>
  );
};

export default ProvinceComboBox;
