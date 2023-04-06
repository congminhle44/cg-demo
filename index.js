function SpiritualNumber(date) {
  let result = 0;
  const cleanDate = date.replaceAll("/", "");
  for (let i = 0; i < cleanDate.length; i++) {
    result += parseInt(cleanDate[i]);
  }
  if (result > 11) {
    SpiritualNumber(result.toString());
  } else {
    console.log(result);
    return;
  }
}

SpiritualNumber("01/10/1998");
