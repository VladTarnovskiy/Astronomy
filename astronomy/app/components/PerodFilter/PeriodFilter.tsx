"use client";
import { ChangeEvent, FC, useState } from "react";
import Image from "next/image";
import SearchImg from "@assets/search.svg";
import { usePictures } from "../../../store/store";
import { shallow } from "zustand/shallow";
import { getCurrentDate } from "@/utils/getDate";
import moment from "moment";

export const PeriodFilter: FC = () => {
  const [isPeriodDateError, setIsPeriodDateError] = useState(false);
  const [currentFromDate, setCurrentFromDate] = useState<string>(
    moment().format("YYYY-MM-DD")
  );
  const [currentToDate, setCurrentToDate] = useState<string>(
    moment().format("YYYY-MM-DD")
  );
  const [setDatePeriod, getPeriodPhotos] = usePictures(
    (state) => [state.setDatePeriod, state.getPeriodPhotos],
    shallow
  );
  const pastDate = new Date("07/16/1995");
  const errorMessage = `Date must be between 07/16/1995 and ${getCurrentDate()}`;

  const getPeriodPhotosByClick = () => {
    if (currentFromDate !== undefined && currentToDate !== undefined) {
      const nowDate = new Date(Date.now());
      const chosenFromDate = new Date(currentFromDate);
      const chosenToDate = new Date(currentToDate);
      if (
        chosenFromDate >= nowDate ||
        chosenFromDate <= pastDate ||
        chosenToDate >= nowDate ||
        chosenToDate <= pastDate ||
        chosenToDate < chosenFromDate
      ) {
        setIsPeriodDateError(true);
      } else {
        setDatePeriod(currentFromDate, currentToDate);
        getPeriodPhotos();
        setIsPeriodDateError(false);
      }
    } else {
      setIsPeriodDateError(true);
    }
  };

  const onChangeFromDate = (date: ChangeEvent<HTMLInputElement>) => {
    const newDate = moment(date.target.value).format("YYYY-MM-DD");
    setCurrentFromDate(newDate);
  };

  const onChangeToDate = (date: ChangeEvent<HTMLInputElement>) => {
    const newDate = moment(date.target.value).format("YYYY-MM-DD");
    setCurrentToDate(newDate);
  };

  return (
    <div className="mb-4">
      <div className="flex p-2 justify-center items-start md:items-center">
        <h2 className="mr-2">Period:</h2>
        <div className="flex justify-center flex-col md:flex-row items-center relative">
          <div className="relative flex flex-col justify-start mb-5 md:mb-0 min-w-[200px] mr-2">
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
              min="1995-16-07"
              value={currentFromDate}
              onChange={onChangeFromDate}
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
              min="1995-16-07"
              value={currentToDate}
              onChange={onChangeToDate}
            />
          </div>
          {isPeriodDateError && (
            <div className="absolute w-[332px] left-0 -bottom-5 text-sm text-red-500">
              {errorMessage}
            </div>
          )}
        </div>
        <button
          onClick={getPeriodPhotosByClick}
          className="h-8 w-8 rounded-md hover:cursor-pointer bg-blue-800 flex justify-center items-center hover:scale-[1.03] hover:opacity-80"
        >
          <Image src={SearchImg} alt="search" height={20} width={20} />
        </button>
      </div>
    </div>
  );
};
