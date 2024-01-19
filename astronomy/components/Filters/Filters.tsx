import { FC } from "react";
import { PeriodFilter } from "../PerodFilter/PeriodFilter";
import { DateFilter } from "../DateFilter/DateFilter";

export const Filters: FC = () => {
  return (
    <div className="min-h-[84px] flex flex-col lg:flex-row justify-around items-start lg:items-center w-full py-[20px] ">
      <DateFilter />
      <PeriodFilter />
    </div>
  );
};
