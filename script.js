function minDate(dates) {
  if (dates.length === 0) return "";

  let min = dates[0];

  for (let i = 1; i < dates.length; i++) {
    if (dates[i] < min) {
      min = dates[i];
    }
  }

  return min;
}