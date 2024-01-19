"use client";
import { FC, useState } from "react";
import Image from "next/image";
import SearchImg from "@assets/search.svg";
import { IDatePeriod, usePictures } from "../../../store/store";
import { shallow } from "zustand/shallow";
import { getCurrentDate } from "@/utils/getDate";

export const Filters: FC = () => {
  const [isPictureDateError, setIsPictureDateError] = useState(false);
  const [isPeriodDateError, setIsPeriodDateError] = useState(false);
  const [setDate, setDatePeriod, getPhoto, getPeriodPhotos] = usePictures(
    (state) => [
      state.setDate,
      state.setDatePeriod,
      state.getPhoto,
      state.getPeriodPhotos,
    ],
    shallow
  );
  const [currentDate, setCurrentDate] = useState<string | undefined>(undefined);
  const [currentFromDate, setCurrentFromDate] = useState<string | undefined>(
    undefined
  );
  const [currentToDate, setCurrentToDate] = useState<string | undefined>(
    undefined
  );
  const pastDate = new Date("16/07/1995");

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
        setIsPeriodDateError(false);
      }
    } else {
      setIsPictureDateError(true);
    }
  };

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
        setIsPictureDateError(false);
      }
    } else {
      setIsPeriodDateError(true);
    }
  };

  return (
    <div className="h-[84px] flex p-2 justify-around items-center w-full mb-[20px] ">
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
            onChange={(el) => {
              setCurrentDate(el.target.value);
            }}
          />
          {isPictureDateError && (
            <div className="absolute left-0 -bottom-10 w-[200px] text-sm text-red-500">
              Date must be between 16/07/1995 and {getCurrentDate()}
            </div>
          )}
        </div>
        <button
          onClick={getPhotoByClick}
          className="h-8 w-8 rounded-md hover:cursor-pointer bg-blue-800 flex justify-center items-center hover:scale-[1.03] hover:opacity-80"
        >
          <Image src={SearchImg} alt="search" height={24} width={24} />
        </button>
      </div>
      <div className="flex p-2 justify-center items-center relative">
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
            value={currentFromDate}
            onChange={(el) => {
              setCurrentFromDate(el.target.value);
            }}
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
            value={currentToDate}
            onChange={(el) => {
              setCurrentToDate(el.target.value);
            }}
          />
        </div>
        <button
          onClick={getPeriodPhotosByClick}
          className="h-8 w-8 rounded-md hover:cursor-pointer bg-blue-800 flex justify-center items-center hover:scale-[1.03] hover:opacity-80"
        >
          <Image src={SearchImg} alt="search" height={24} width={24} />
        </button>
        {isPeriodDateError && (
          <div className="absolute left-16 -bottom-4 text-sm text-red-500">
            Date must be between 16/07/1995 and {getCurrentDate()}
          </div>
        )}
      </div>
    </div>
  );
};
