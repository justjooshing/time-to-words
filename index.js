const timeInNumbers = (time) => {
  const [strHours, strMinutes] = time.split(":");

  return { hours: Number(strHours), minutes: Number(strMinutes) };
};

const convertUnitToWord = (num) =>
  ({
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "quarter",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty-one",
    22: "twenty-two",
    23: "twenty-three",
    24: "twenty-four",
    25: "twenty-five",
    26: "twenty-six",
    27: "twenty-seven",
    28: "twenty-eight",
    29: "twenty-nine",
    30: "half",
  }[num]);

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const { hours, minutes } = timeInNumbers(time);
  const modifier = minutes <= 30 ? "past" : "to";

  const convertedMinutes = convertUnitToWord(
    minutes >= 30 ? 60 - minutes : minutes
  );
  const convertedHours = convertUnitToWord(minutes > 30 ? hours + 1 : hours);

  if (time === "0:00") return "midnight";
  if (time === "12:00") return "midday";
  if (minutes === 0) return `${convertUnitToWord(hours)} o'clock`;

  return `${convertedMinutes} ${modifier} ${convertedHours}`;
}

module.exports = { convertTimeToWords };
