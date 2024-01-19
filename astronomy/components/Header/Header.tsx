import { FC } from 'react';
import Image from 'next/image';
import Logo from '@/public/NASA_logo.svg';
import Link from 'next/link';

export const Header: FC = () => {
  return (
    <header className="h-[100px] flex justify-start items-center p-3">
      <Link href="/">
        <Image src={Logo} alt="NASA Logo" width={100} height={84} priority />
      </Link>
    </header>
  );
};
