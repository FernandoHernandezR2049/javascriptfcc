function detectNumberRange(num){
  if(num >= 1000){
    return "thousands";
  }
  else if(num >= 100){
    return "hundreds";
  }
  else if (num >= 10){
    return "tens";
  }
  else{
    return "units";
  }
}

function units(num,romanNumeral){
  const numeralsPerRange = {
    thousands:[1000,"","","","M"],
    hundreds:[100,"CM","D","CD","C"],
    tens:[10,"XC","L","XL","X"],
    units:[1,"IX","V","IV","I"]
  }
  let numberRange = detectNumberRange(num);

  if (num < 10*numeralsPerRange[numberRange][0] && num >= 9*numeralsPerRange[numberRange][0]){
    num -= 9*numeralsPerRange[numberRange][0];
    romanNumeral+=numeralsPerRange[numberRange][1];
    return units(num,romanNumeral);
  }
  else if (num < 9*numeralsPerRange[numberRange][0] && num >= 5*numeralsPerRange[numberRange][0]){
    num -= 5*numeralsPerRange[numberRange][0];
    romanNumeral += numeralsPerRange[numberRange][2];
    return units(num,romanNumeral);
  }
  else if (num >= 4*numeralsPerRange[numberRange][0] && num < 5*numeralsPerRange[numberRange][0]){
    num -= 4*numeralsPerRange[numberRange][0];
    romanNumeral += numeralsPerRange[numberRange][3];
    return units(num,romanNumeral);
  }
  else if (num < 4*numeralsPerRange[numberRange][0] && num >= 1*numeralsPerRange[numberRange][0]){
    num -= 1*numeralsPerRange[numberRange][0];
    romanNumeral += numeralsPerRange[numberRange][4];
    return units(num,romanNumeral);
  }
  else if(num === numeralsPerRange[numberRange][0]){
    return units(num,romanNumeral);
  }
  else if(num <= 0){
    return [num,romanNumeral];
  }
  else{
    return units(num,romanNumeral);
  }
}

function convertToRoman(num) {
  let result = units(num,"")
 return result[1];
}

convertToRoman(36);