import { FC } from "react";
import Image from "next/image";
import Logo from "@assets/NASA_logo.svg";
import { IPicture } from "../../../types/photosResponse";

export const Picture: FC<IPicture> = (picture) => {
  return (
    <div className="h-[84px] flex px-3">
      <Image
        src={picture.hdurl}
        alt="NASA picture"
        width={1000}
        height={1000}
      />
    </div>
  );
};
