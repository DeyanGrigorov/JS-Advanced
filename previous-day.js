function previousDay(year, month, day) {
  let dateString = year + "-" + month + "-" + day;
  let event = new Date(dateString);
  event.setDate(day - 1);
  // let yearW = event.getFullYear()
  // let monthW = Number(event.getMonth()+1)
  // let dateW = event.getDate()
  console.log(
    event.getFullYear() +
      "-" +
      Number(event.getMonth() + 1) +
      "-" +
      event.getDate()
  );
}

previousDay(2016, 9, 30);
