// Gets iso string date and returns DD.MM.YYYY

export const dateParser = (date: string): string => {
  const day = date.substring(8, 10);
  const month = date.substring(5, 7);
  const year = date.substring(0, 4);

  return `${day}.${month}.${year}`;
};
