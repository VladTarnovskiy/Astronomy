'use client';
import { shallow } from 'zustand/shallow';
import { usePictures } from '../store/store';
import { Filters } from '../components/Filters/Filters';
import { Picture } from '../components/Picture/Picture';

export default function Main() {
  const [isPeriodPhotos, photo, periodPhotos, count, setCount] = usePictures(
    (state) => [
      state.isPeriodPhotos,
      state.photo,
      state.periodPhotos,
      state.count,
      state.setCount,
    ],
    shallow
  );
  const setNextPage = () => {
    setCount(count + 1);
  };

  return (
    <main className="px-3">
      <Filters />
      <div className="m-auto w-fit mb-10">
        {!isPeriodPhotos && photo && <Picture picture={photo} />}
        {isPeriodPhotos && periodPhotos && (
          <div>
            {periodPhotos.map((periodPhoto, index) => {
              if (index < count * 6)
                return <Picture picture={periodPhoto} key={periodPhoto.url} />;
            })}
            <div className="flex justify-center items-center">
              {count * 6 < periodPhotos.length && (
                <button
                  onClick={setNextPage}
                  className="w-32 h-12 bg-blue-800 rounded-sm text-lg font-semibold hover:scale-[1.02] transition-all"
                >
                  Show more
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
