function rot13PerLetter(letter){
  const rot13Table = {
  N:"A",
  O:"B",
  P:"C",
  Q:"D",
  R:"E",
  S:"F",
  T:"G",
  U:"H",
  V:"I",
  W:"J",
  X:"K",
  Y:"L",
  Z:"M",
  A:"N",
  B:"O",
  C:"P",
  D:"Q",
  E:"R",
  F:"S",
  G:"T",
  H:"U",
  I:"V",
  J:"W",
  K:"X",
  L:"Y",
  M:"Z"
}
  return rot13Table[letter];
}
function rot13(str) {
  const lettersRegex = /[A-Z]/;
  let resultStr = "";
  for (let i = 0; i < str.length; i++){
    if(lettersRegex.test(str[i])){
      resultStr += rot13PerLetter(str[i]);
    }
    else{
      resultStr += str[i];
    }
  }
  return resultStr;
}

rot13("SERR PBQR PNZC");