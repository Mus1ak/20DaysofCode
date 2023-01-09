function count_digits(n) {
  numDigits = 0;
  integers = Math.abs(n);

  while (integers > 0) {
    integers = (integers - integers % 10) / 10;
    numDigits++;
  }
  return numDigits;
}

var n1 = 2700;
var n2 = 100092019;
console.log("output for n1 :" + n1);
console.log(count_digits(n1));
console.log("output for n2 :" + n2);
console.log(count_digits(n2));
