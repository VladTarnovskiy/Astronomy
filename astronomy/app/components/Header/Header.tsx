import { FC } from "react";
import Image from "next/image";
import Logo from "@assets/NASA_logo.svg";

export const Header: FC = () => {
  return (
    <header className="h-[100px] flex justify-start items-center p-3">
      <Image src={Logo} alt="NASA Logo" width={100} height={84} priority />
    </header>
  );
};
