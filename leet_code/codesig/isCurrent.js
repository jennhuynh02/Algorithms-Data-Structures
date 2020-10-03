const isCurrency = strAmount => {
/*
1.√  amount must consist of base 10 digits
2.√  amount may contain thousands seperators using ','; if present, must be at each thousands increment
3.√  negative amounts may be indicated by '-' OR '()'
4.√  Dollar & Euro may contain amounts of cents, represented by exactly two digits
5.√  if decimal point is present, cents must be specific
6.√  Yen may not contain decimal points
7.√  amounts may not contain leading zero, unless zero Dollars or Euros and cents are specified
8.√  any leading or trailing white space is invalid
*/

  let starter = 0;
  let ender = strAmount.length;
  // starter and ender are the indexes from which we will start checking the base10, decimal, and 0 values, should be assigned after we check for the negative and currency types to know where the base10 characters should start and should end

  const types = new Set(["¥", "€", "$"]);
  // setting currency types in a hashset for constant lookup time
  
  const firstChar = strAmount[0]
  const secondChar = strAmount[1];

  if (firstChar !== "-" && firstChar !== "(") {
    // if the first character is not a negative, it must be the currency type, if not, return false
    if (!types.has(firstChar)) return false;

    // negative value cannot be specified after currency type has been declared, if it is, return false
    if (secondChar === "-") return false;

    // if the currency is Yen, check for "." decimals because Yen's DO NOT include them, would need to return false
    if (firstChar === "¥" && strAmount.includes(".")) return false;
    starter = 1;
  } else {
    // if the first character indicated a negative amount, the second character must be a currency type, else, return false
    if (!types.has(secondChar)) return false;
    
    // if the currency is Yen, check for "." decimals because Yen's DO NOT include them, would need to return false
    if (secondChar === "¥") {
      if (strAmount.includes(".")) return false;
    }

    // also check to see if there is a closing bracket for negative amounts indicated by parentheses, and set the ender to str.length - 1 to not include the last char
    if (firstChar === "(") {
      const lastChar = strAmount[strAmount.length - 1];
      if (lastChar !== ")") return false;
      ender = strAmount.length - 1;
    }
    starter = 2;
  }

  const numberAmount = strAmount.slice(starter, ender);
  // this is the actual amount of the currency, without the type and negative value included in this string
  // we will use this string to check:

  // (1)  if thousands seperators are included, need to check that ALL thousands places are present
  if (numberAmount.includes(',')) {
    const divided = numberAmount.split(",")
    // split the string by its commas into var divided

    const last = divided[divided.length - 1];
    // check if last section includes a decimal, if so, it needs to have a length of 6 to include the 3 digits, decimal, and 2 trailing digits after the decimal

    if (last.includes(".")) {
      if (last.length !== 6) return false;
    } else {
      if (last.length !== 3) return false;
    }
    
    // start iterating through divided parts by the second last section, must have a length of 3
    for (let i = divided.length - 2; i > 0; i--) {
      if (divided[i].length !== 3) return false;
    }

    // check the first section of divided, does not need 3 chars, but should not have more than, else, return false
    if (divided[0].length > 3) return false;
  }

  const checkAmount = /^-?(?:0|[1-9]\d{0,2}(?:,?\d{3})*)(?:\.\d{2})?$/;
  // (2) this regex should check to see if the number amount includes only base numbers, has only appropriate 0's (no unneccessary trailing/leading), and if decimals are followed by only two integers
  return checkAmount.test(numberAmount)
};


let strAmount = "(¥2400)"
let strAmount1 = "¥1200,000"
let strAmount2 = "$-50"
let strAmount3 = "$4,500"
let strAmount4 = "$0"

// console.log(isCurrency(strAmount1))
// console.log(isCurrency(strAmount2))
console.log(isCurrency(strAmount4))