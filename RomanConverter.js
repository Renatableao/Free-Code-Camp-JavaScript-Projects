function convertToRoman(num) {
    const references = {"I": 1, "IV": 4, "V": 5, "IX": 9, "X": 10, "XL": 40, "L": 50, "XC": 90, "C": 100, "CD": 400, "D": 500, "CM": 900, "M": 1000};
    let roman = "";
  
    function findroman() {
  
      if (num == 0) {
        return roman;
      }
  
      else {
        let biggesttonum = Math.max(...Object.values(references).filter(item => item <= num));
        roman += Object.keys(references).find(key => references[key] === biggesttonum);
        num -= biggesttonum;
      }
      return findroman();
      }
      
    return findroman();
  }
  
  console.log(convertToRoman(36));
  console.log(convertToRoman(798));
  console.log(convertToRoman(3999));