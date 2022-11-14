function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = word.split('');
  const reversedArray = wordArray.reverse();
  let drow = reversedArray.join('');
  if (word === drow) {
    return true;
  }else {return false;}
}

/* 
  Add your pseudocode here
*/
// if (word === makeBackwards(word){
  //   return true;
//}else {return false}
//makeBackwards(word){
  
//}
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
