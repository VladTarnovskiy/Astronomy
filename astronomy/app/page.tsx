"use client";

import { shallow } from "zustand/shallow";
import { usePictures } from "../store/store";
import { Filters } from "./components/Filters/Filters";
import { Picture } from "./components/Picture/Picture";
import { Loader } from "./components/Loader/Loader";

export default function Main() {
  const [isPeriodPhotos, photo, periodPhotos, isLoading] = usePictures(
    (state) => [
      state.isPeriodPhotos,
      state.photo,
      state.periodPhotos,
      state.isLoading,
    ],
    shallow
  );

  return (
    <main>
      <Filters />
      <div className="m-auto w-fit mb-10">
        {!isPeriodPhotos && photo && <Picture picture={photo} />}
        {isPeriodPhotos &&
          periodPhotos &&
          periodPhotos.map((periodPhoto) => (
            <Picture picture={periodPhoto} key={periodPhoto.url} />
          ))}
      </div>
    </main>
  );
}
