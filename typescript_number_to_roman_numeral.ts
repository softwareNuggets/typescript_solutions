function intToRoman(n: number): string {

  const num = [1000, 900, 500, 400,  100,  90,  50,   40,  10,   9,    5,   4,    1 ];
  const sym = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let roman_numeral = '';
  let current_number = n;
  let index_pos = 0;
    

    while (current_number > 0 && index_pos < num.length) {
        if (current_number - num[index_pos] >= 0) {
              roman_numeral += sym[index_pos];
              current_number -= num[index_pos];
        } else {
          index_pos++;
        }
  }

  return roman_numeral;
}

// Example usage:
console.log(intToRoman(3)); // Output: "III"
console.log(intToRoman(65)); // Output: "LXV"
console.log(intToRoman(1965)); // Output: "MCMLXV"
console.log(intToRoman(2023)); // Output: "MMXXIII"