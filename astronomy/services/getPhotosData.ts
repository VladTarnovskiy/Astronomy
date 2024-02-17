import { IDatePeriod } from '@/store/store';

const API_KEY = 'EQT9PjZFJsMNgZcQIs9WDECBDzz4sHbNXpVBYsfY';

export const getPicture = async (date: string | null) => {
  if (date === null) throw new Error('Date undefined.');

  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}&hd=true`
    );
    const data = await response.json();
    return data;
  } catch {
    throw new Error('API error.');
  }
};

export const getPeriodPictures = async ({ from, to }: IDatePeriod) => {
  if (from === null || to === null) throw new Error('Date undefined.');

  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${from}&end_date=${to}&hd=true`
    );
    const data = await response.json();
    return data;
  } catch {
    throw new Error('API error.');
  }
};
