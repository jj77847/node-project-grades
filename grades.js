const grade = (num) => {
  if (num > 90 && num <= 100) {
    return "A";
  } else if (num > 80 && num <= 90) {
    return "B";
  } else if (num > 70 && num <= 80) {
    return "C";
  } else if (num > 60 && num <= 70) {
    return "D";
  } else {
    return "F";
  }
};
