const formatDate = (inputDateStr: string): string => {
  const inputDate = new Date(inputDateStr);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate: string = inputDate.toLocaleDateString('en-US', options);

  return formattedDate;
};

export default formatDate;
