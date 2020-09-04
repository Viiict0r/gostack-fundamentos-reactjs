const formatDate = (date: Date): string =>
  Intl.DateTimeFormat().format(new Date(date));

export default formatDate;
