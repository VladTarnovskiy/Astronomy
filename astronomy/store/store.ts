import { create } from "zustand";
import { IPicture } from "../types/photosResponse";
import { getPicture } from "../services/getPhotosData";

type UsePictures = {
  isPeriodPhotos: boolean;
  photo: IPicture | null;
  periodPhotos: IPicture[] | null;
  datePeriod: {
    from: string | null;
    to: string | null;
  };
  date: string | null;
  loading: boolean;
  getPhoto: () => Promise<void>;
  setDatePeriod: (from: string, to: string) => void;
};

export const usePictures = create<UsePictures>()((set, get) => ({
  photo: null,
  periodPhotos: null,
  loading: false,
  isPeriodPhotos: false,
  datePeriod: {
    from: null,
    to: null,
  },
  date: null,
  getPhoto: async () => {
    set({ loading: true });
    set({ isPeriodPhotos: false });
    const date = get().date;
    const photo = await getPicture(date);
    set({ photo, loading: false });
  },
  setDatePeriod: (from, to) =>
    set({
      datePeriod: {
        from,
        to,
      },
    }),
}));
