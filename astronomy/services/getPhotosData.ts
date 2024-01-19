import { IPicture } from "../types/photosResponse";

const API_KEY = "EQT9PjZFJsMNgZcQIs9WDECBDzz4sHbNXpVBYsfY";

export const getPicture = async (date: string | null) => {
  if (date === null) throw new Error("Date undefined.");

  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}&hd=true`
    );
    return response.json();
  } catch {
    throw new Error("API error.");
  }
};
