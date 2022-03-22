console.log(lengthOfLastWord('Aarohi Kiran'));

function lengthOfLastWord(s) {
  let length = 0;
  let lastLength = 0;

  if (s) {
    for (i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
        if (length > 0) {
          lastLength = length;
          length = 0;
        }
      } else {
        length++;
      }
    }
  }

  return length || lastLength;
}
