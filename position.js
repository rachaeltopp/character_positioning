function countLetters(string) {
  var letterCount = {};                    //empty object
  string = string.replace(/ /g ,"");       //getting rid of spaces with regExp
  for(var i = 0; i < string.length; i++) {    //for loop to loop thru string

    var letter = string[i].toLowerCase();     //set letter variable to be the current string positions letter

    if (letterCount[letter]) {               //if current letter is in object
      letterCount[letter].count++;               //add 1 to the letter key
      letterCount[letter].position.push(i);      //and push the index to the position array
    } else {                                  //if current letter is not already in object
      letterCount[letter] = {
        count: 1,                             //add it to the object as another object and set its key value "count" to 1
        position: [i]                         //set its position value as i (an array value)
      }
    }
  }
  return letterCount;
}

console.log(countLetters('lighthouse in the house'));



