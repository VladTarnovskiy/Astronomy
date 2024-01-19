import { FC } from "react";
import { DateFilter } from "../DateFilter/DateFilter";
import { PeriodFilter } from "../PeriodFilter/PeriodFilter";

export const Filters: FC = () => {
  return (
    <div className="min-h-[84px] flex flex-col lg:flex-row justify-around items-start lg:items-center w-full py-[20px] ">
      <DateFilter />
      <PeriodFilter />
    </div>
  );
};
