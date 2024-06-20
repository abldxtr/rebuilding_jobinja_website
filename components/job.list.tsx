export default function Job_list() {
  return (
    <div className=" bg-[#f9f9f9] mt-[40px] pb-8 ">
      <div>
        <div className="container mx-auto">
          {/* <!-- title --> */}
          <div className="border-b border-[#eee] pb-[10px] text-center">
            <h2 className="text-[16px] pt-[20px] font-medium text-[#555]">
              لیست مشاغل جابینجا
            </h2>
          </div>
          {/* <!-- list --> */}
          <div className="selection: mx-auto mb-10 mt-[30px] grid w-full grid-cols-3 place-items-center">
            {/* <!-- 1 --> */}
            <div>
              <ul className="first:[&_li]:lititr [&_li]:lilist flex flex-col gap-3">
                <li>جستجو‌های پرطرفدار</li>
                <li>دورکاری</li>
                <li>ادمین</li>
                <li>وردپرس</li>
                <li>حسابدار</li>
                <li>تولید محتوا</li>
              </ul>
            </div>

            {/* <!-- 2 --> */}
            <div>
              <ul className="first:[&_li]:lititr [&_li]:lilist flex flex-col gap-3">
                <li>بر اساس استان</li>
                <li>تهران</li>
                <li>خراسان رضوی</li>
                <li>اصفهان</li>
                <li>البرز</li>
                <li>فارس</li>
              </ul>
            </div>
            {/* <!-- 3 --> */}
            <div>
              <ul className="first:[&_li]:lititr [&_li]:lilist flex flex-col gap-3">
                <li>بر اساس دسته‌بندی</li>
                <li>فروش و بازاریابی</li>
                <li>وب، برنامه نویسی و نرم افزار</li>
                <li>مالی و حسابداری</li>
                <li>مسئول دفتر، اجرائی و اداری</li>
                <li>دیجیتال مارکتینگ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
