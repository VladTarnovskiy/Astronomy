import { IPicture } from '../types/photosResponse';
import { getPeriodPictures, getPicture } from '../services/getPhotosData';
import { createWithEqualityFn } from 'zustand/traditional';

export interface IDatePeriod {
  from: string | null;
  to: string | null;
}

type UsePictures = {
  isPeriodPhotos: boolean;
  photo: IPicture | null;
  periodPhotos: IPicture[] | null;
  datePeriod: IDatePeriod;
  date: string | null;
  isLoading: boolean;
  count: number;
  getPhoto: () => Promise<void>;
  getPeriodPhotos: () => Promise<void>;
  setDatePeriod: (from: string, to: string) => void;
  setDay: (date: string) => void;
  setCount: (count: number) => void;
};

export const usePictures = createWithEqualityFn<UsePictures>()((set, get) => ({
  photo: null,
  periodPhotos: null,
  isLoading: false,
  count: 1,
  isPeriodPhotos: false,
  datePeriod: {
    from: null,
    to: null,
  },
  date: null,
  getPhoto: async () => {
    set({ isLoading: true });
    set({ isPeriodPhotos: false });
    const date = get().date;
    const photo = await getPicture(date);
    set({ photo, isLoading: false });
  },
  getPeriodPhotos: async () => {
    set({ isLoading: true });
    set({ isPeriodPhotos: true });
    const datePeriod = get().datePeriod;
    const periodPhotos = await getPeriodPictures(datePeriod);
    set({ periodPhotos, isLoading: false });
  },
  setDatePeriod: (from, to) =>
    set({
      datePeriod: {
        from,
        to,
      },
    }),
  setDay: (date) => set({ date: date }),
  setCount: (count) =>
    set({
      count,
    }),
}));
