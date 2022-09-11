export let thumbnailDate = (dateParam) => {
  const date = new Date(dateParam);
  let month = date.toLocaleString("default", { month: "long" }).substring(0, 3);
  let day = date.getDate();
  return day + " " + month;
};
