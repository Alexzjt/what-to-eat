export function calcDaysAgo(dateStr) {
  let time1 = new Date().getTime();
  let time2 = new Date(dateStr).getTime();
  return Math.ceil((time1 - time2)/(1000*60*60*24));
}
