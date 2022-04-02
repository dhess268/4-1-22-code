// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)


// function hero(bullets, dragons){
//   return bullets >= dragons * 2
// }

const hero = (bullets, dragons) =>  bullets >= dragons * 2










// write the function isAnagram
var isAnagram = function(test, original) {
    let testArr = test.toLowerCase().split('').sort()
    let origArr = original.toLowerCase().split('').sort()
    console.log(testArr)
    console.log(origArr)
    for(let i = 0; i < testArr.length; i++){
      if(testArr[i] !== origArr[i]){
        return false
      }
    }
    return true
  };

  
// Checks if 2 words are anagrams. There is a better way to do this by .join-ing the arrays but I didnt think of it beforehand

  // write the function isAnagram
var isAnagram = function(test, original) {
    //sorts strings into arrays with the same sorting order
    let testArr = test.toLowerCase().split('').sort()
    let origArr = original.toLowerCase().split('').sort()
    
    //tests initially if arrays are the same; if yes no testing needed
    if(testArr === origArr){
      return true
    }
    
    //if lengths are wrong the following loop will not work so can check if lengths arent equal for base check
    if(testArr.length !== origArr.length){
      return false
    }
  
    //iterates through the array and checks if every element is equal to one another. this works because the arrays are sorted
    for(let i = 0; i < testArr.length; i++){
      if(testArr[i] !== origArr[i]){
        return false
      }
    }
    
    //if no elements are found to not be equal it must be an anagram
    return true
  };