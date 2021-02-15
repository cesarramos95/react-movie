const formatDate = (value) => {
  const date = new Date(value);

  const day = (date.getDate() + 1).toString();
  const dayF = day.length === 1 ? '0'+day: day;

  const month = (date.getMonth() + 1).toString();
  const monthF = month.length == 1 ? '0'+month: month;

  const year = date.getFullYear();

  return `${dayF}/${monthF}/${year}`;
}

export default formatDate;
