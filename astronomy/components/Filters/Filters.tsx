import { FC } from 'react';
import { DayFilter } from '../DayFilter/DayFilter';
import { PeriodFilter } from '../PeriodFilter/PeriodFilter';

export const Filters: FC = () => {
  return (
    <div className="min-h-[84px] flex flex-col lg:flex-row justify-around items-start lg:items-center w-full py-[20px] ">
      <DayFilter />
      <PeriodFilter />
    </div>
  );
};
