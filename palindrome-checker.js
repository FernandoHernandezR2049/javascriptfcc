function palindrome(str) {
  let lowerCaseStr = str.toLowerCase();
  let filteredStr = "";
  let filteredAndReversedStr = "";
  const nonAlphanumericCharacters = /[a-z0-9]/;
  for(let i = 0; i < lowerCaseStr.length; i++){
    if(nonAlphanumericCharacters.test(lowerCaseStr[i])){
      filteredStr = filteredStr + lowerCaseStr[i];
      filteredAndReversedStr = lowerCaseStr[i] + filteredAndReversedStr;
    }
  }
  return filteredStr===filteredAndReversedStr;
}

palindrome("eye");
