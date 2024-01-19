import { FC } from "react";
import Image from "next/image";
import SearchImg from "@assets/search.svg";
import { usePictures } from "../../../store/store";

export const Filters: FC = () => {
  const [setSearch, getPicturesBySearch] = usePictures(
    (state) => [state.se, state.getPicturesBySearch],
    shallow
  );

  return (
    <div className="h-[84px] flex p-2 justify-around items-center w-full">
      <div className="flex p-2 justify-center items-center">
        <h2 className="mr-2">Date:</h2>
        <div className="relative flex flex-col justify-start min-w-[200px] mr-2">
          <label
            htmlFor="date"
            className="text-sm absolute left-2 -top-4 text-blue-800 bg-white rounded-md px-2"
          >
            Date
          </label>
          <input
            className="rounded-md h-8 border-[1px] border-color-white text-black outline-none focus:border-blue-800 p-1"
            type="date"
            id="date"
            placeholder="date"
          />
        </div>
        <button className="h-8 w-8 rounded-md hover:cursor-pointer bg-blue-800 flex justify-center items-center hover:scale-[1.03] hover:opacity-80">
          <Image src={SearchImg} alt="search" height={24} width={24} />
        </button>
      </div>
      <div className="flex p-2 justify-center items-center">
        <h2 className="mr-2">Period:</h2>
        <div className="relative flex flex-col justify-start min-w-[200px] mr-2">
          <label
            htmlFor="from"
            className="text-sm absolute left-2 -top-4 text-blue-800 bg-white rounded-md px-2"
          >
            From
          </label>
          <input
            className="rounded-md h-8 border-[1px] border-color-white text-black outline-none focus:border-blue-800 p-1"
            type="date"
            id="from"
            placeholder="from"
          />
        </div>
        <div className="relative flex flex-col justify-start min-w-[200px] mr-2">
          <label
            htmlFor="to"
            className="text-sm absolute left-2 -top-4 text-blue-800 bg-white rounded-md px-2"
          >
            To
          </label>
          <input
            className="rounded-md h-8 border-[1px] border-color-white text-black outline-none focus:border-blue-800 p-1"
            type="date"
            id="to"
            placeholder="to"
          />
        </div>
        <button className="h-8 w-8 rounded-md hover:cursor-pointer bg-blue-800 flex justify-center items-center hover:scale-[1.03] hover:opacity-80">
          <Image src={SearchImg} alt="search" height={24} width={24} />
        </button>
      </div>
    </div>
  );
};
