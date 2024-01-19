import { FC } from "react";
import Image from "next/image";
import Logo from "@assets/NASA_logo.svg";
import { IPicture } from "../../../types/photosResponse";

interface IProps {
  picture: IPicture;
}

export const Picture: FC<IProps> = ({ picture }) => {
  return (
    <div className=" max-w-[1000px] p-2 shadow-md shadow-blue-800 mb-3 bg-black/60">
      <div className="flex justify-between items-center mb-2">
        <div className="text-lg">{picture.title}</div>
        <div>{picture.date}</div>
      </div>
      <Image
        src={picture.hdurl}
        alt="NASA picture"
        width={1000}
        height={1000}
        className="mb-2"
      />
      <div className="text-sm">{picture.explanation}</div>
    </div>
  );
};
