"use client";
import { ChangeEvent, FC, useState } from "react";
import Image from "next/image";
import SearchImg from "@assets/search.svg";
import { usePictures } from "../../../store/store";
import { shallow } from "zustand/shallow";
import { getCurrentDate } from "@/utils/getDate";
import { PeriodFilters } from "../PerodFilter/PeriodFilter";
import moment from "moment";

export const Filters: FC = () => {
  const [isPictureDateError, setIsPictureDateError] = useState(false);
  const [currentDate, setCurrentDate] = useState<string>(
    moment().format("YYYY-MM-DD")
  );
  const [setDate, getPhoto] = usePictures(
    (state) => [state.setDate, state.getPhoto],
    shallow
  );

  const pastDate = new Date("07/16/1995");
  const errorMessage = `Date must be between 07/16/1995 and ${getCurrentDate()}`;

  const onChangeDate = (date: ChangeEvent<HTMLInputElement>) => {
    const newDate = moment(date.target.value).format("YYYY-MM-DD");
    setCurrentDate(newDate);
  };

  const getPhotoByClick = () => {
    if (currentDate !== undefined) {
      const nowDate = new Date(Date.now());
      const chosenDate = new Date(currentDate);
      if (chosenDate >= nowDate || chosenDate <= pastDate) {
        setIsPictureDateError(true);
      } else {
        setDate(currentDate);
        getPhoto();
        setIsPictureDateError(false);
      }
    } else {
      setIsPictureDateError(true);
    }
  };

  return (
    <div className="min-h-[84px] flex flex-col lg:flex-row p-2 justify-around items-start lg:items-center w-full py-[20px] ">
      <div className="flex p-2 justify-center items-center">
        <h2 className="mr-2">Date:</h2>
        <div className="relative flex flex-col justify-start w-[200px] mr-2">
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
            value={currentDate}
            min="1995-16-07"
            onChange={onChangeDate}
          />
          {isPictureDateError && (
            <div className="absolute left-0 -bottom-10 w-[200px] text-sm text-red-500">
              {errorMessage}
            </div>
          )}
        </div>
        <button
          onClick={getPhotoByClick}
          className="h-8 w-8 rounded-md hover:cursor-pointer bg-blue-800 flex justify-center items-center hover:scale-[1.03] hover:opacity-80"
        >
          <Image src={SearchImg} alt="search" height={20} width={20} />
        </button>
      </div>
      <PeriodFilters />
    </div>
  );
};
