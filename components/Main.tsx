import Main_left from "./M.left";
import Main_right from "./M.right";

export default function Main() {
  return (
    <main className="container mx-auto ">
      <div className=" max-w-[1100px] mx-auto mt-10 flex flex-col px-[10px] lg:flex-row  ">
        {/* <!-- first 1 --> */}
        <div className="mt-[40px] w-full rounded-[4px] border border-[#e7e7e7] px-[20px] pt-[20px] lg:w-[270px]">
          <Main_right />
        </div>

        {/* <!-- second 2--> */}
        <div className="mb-[20px] mt-[40px] w-full rounded-[4px] border border-[#e7e7e7] px-[20px] pb-[100px] pt-[20px] lg:mr-[20px] lg:w-[850px]">
          <Main_left />
        </div>
      </div>
    </main>
  );
}
