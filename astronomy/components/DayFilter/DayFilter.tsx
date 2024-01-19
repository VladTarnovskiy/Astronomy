'use client';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import Image from 'next/image';
import SearchImg from '@/public/search.svg';
import { usePictures } from '../../store/store';
import { shallow } from 'zustand/shallow';
import moment from 'moment';

export const DayFilter: FC = () => {
  const dateNow = moment().subtract(1, 'days').format('YYYY-MM-DD');
  const [isPictureDateError, setIsPictureDateError] = useState(false);
  const [currentDate, setCurrentDate] = useState<string>(dateNow);
  const [setDay, getPhoto] = usePictures(
    (state) => [state.setDay, state.getPhoto],
    shallow
  );

  const pastDate = new Date('07/16/1995');
  const errorMessage = `Date must be between 07/16/1995 and ${dateNow}`;

  const onChangeDate = (date: ChangeEvent<HTMLInputElement>) => {
    const newDate = moment(date.target.value).format('YYYY-MM-DD');
    setCurrentDate(newDate);
  };

  const getPhotoByClick = () => {
    const nowDate = new Date(dateNow);
    const chosenDate = new Date(currentDate);
    if (chosenDate > nowDate || chosenDate <= pastDate) {
      setIsPictureDateError(true);
    } else {
      setIsPictureDateError(false);
      setDay(currentDate);
      getPhoto();
    }
  };

  useEffect(() => {
    setIsPictureDateError(false);
    setDay(currentDate);
    getPhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex p-2 justify-center items-center mb-8">
      <h2 className="mr-2">Day:</h2>
      <div className="flex flex-col justify-start w-[200px] mr-2 relative">
        <label
          htmlFor="date"
          className="text-xs absolute left-2 -top-3 text-blue-800 bg-white rounded-md px-2"
        >
          Day
        </label>
        <input
          className="rounded-md h-8 border-[1px] border-color-white text-black outline-none focus:border-blue-800 p-1"
          type="date"
          id="date"
          placeholder="day"
          value={currentDate}
          min="1995-07-16"
          onChange={onChangeDate}
        />
        {isPictureDateError && (
          <div className="absolute left-0 -bottom-5 text-sm text-red-500 w-[332px]">
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
  );
};
