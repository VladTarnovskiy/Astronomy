export const getCurrentDate = (): string => {
  const dateNow = Date.now();
  const date = new Date(dateNow).toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return date;
};
