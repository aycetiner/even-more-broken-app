function timeWord(timeStr) {
  if (timeStr == "00:00") {
    return "midnight";
  }

  if (timeStr == "12:00") {
    return "noon";
  }

  let [h, m] = timeStr.split(":");

  const hourStr = [
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
  ];

  const onesStr = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const tensStr = ["oh", "", "twenty", "thirty", "fourty", "fifty"];

  //   hour part calculation

  let hour = hourStr[+h % 12];
  let ampm = +h / 12 < 1 ? "am" : "pm";
  let minute;

  //   minute part calculation
  if (m == "00") {
    return `${hour} o'clock ${ampm}`;
  }

  if (m[0] == "1") {
    minute = teens[m[1]];
  } else {
    let tensDigit = tensStr[m[0]];
    let onesDigit = onesStr[m[1]];
    minute = tensDigit + " " + onesDigit;
  }

  let time = `${hour} ${minute.trim()} ${ampm}`;
  return time;
}
