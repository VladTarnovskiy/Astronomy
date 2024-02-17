import NotFoundImg from '@/public/notfound-dino.svg';
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <div className="error_wrapper flex flex-col items-center mt-24">
      <div className="error_code text-6xl mt-3 font-bold">404</div>
      <div className="error_description text-5xl mb-10 font-thin">
        The page you are looking for not found!
      </div>
      <Image
        src={NotFoundImg}
        alt="Not found"
        height={400}
        width={650}
        className="h-[400px] w-[650px]"
      />
    </div>
  );
}
