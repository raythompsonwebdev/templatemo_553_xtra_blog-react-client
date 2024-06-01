//convert date to readable format
const convertDate = (date: string) => {
  const dateFormat = new Date(date);
  const result = dateFormat.toDateString();
  return result;
};

export { convertDate };
