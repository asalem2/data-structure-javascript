/*  Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. */

const isPalindrome= (inputStr) => {
  var replaced = inputStr.toLowerCase().replace(/[^a-zA-Z]/g, '');
  var count = 0;
  
  if(replaced === ' ') {
    return true;
  }
  
  if((replaced.length) % 2 === 0) {
    count = (replaced.length) / 2;
  }
  else {
    if(replaced.length === 1) {
      return true;
    } else {
      count = (replaced.length -1)/2;
    }
  }
    for(var x =0; x < count; x++){
      if(replaced[x] != replaced.slice(-1-x)[0]) {
        return false;
      }
    }
  return true;
}

//I am on a phone call. I've done the code. please review



console.log(isPalindrome('dollop'));  // >false
console.log(isPalindrome('level'));  // >true
console.log(isPalindrome('Ana'));  // >true
console.log(isPalindrome('A car, a man, a maraca.'));  // >true
console.log(isPalindrome('ab13ba')); // true
console.log(isPalindrome('')); //True

