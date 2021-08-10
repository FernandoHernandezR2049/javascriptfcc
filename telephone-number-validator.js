function telephoneCheck(str) {
  const firstregex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  const secondregex = /^1\s[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  const thirdregex = /^1*\s*\([0-9]{3}\)\s*[0-9]{3}-[0-9]{4}$/;
  const fourthregex = /^[0-9]{10}$/
  const fifthregex = /^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/;
  return firstregex.test(str) || secondregex.test(str)|| thirdregex.test(str)|| fourthregex.test(str)|| fifthregex.test(str);
}

telephoneCheck("555-555-5555");