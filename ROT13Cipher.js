/*A common modern use is the ROT13 cipher, where the values of the letters are
shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a
decoded string.*/
function rot13(str) {
let alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
'S','T','U','V','W','X','Y','Z']
let decode='';
let index;
for (let c of str) {
  if(alpha.includes(c)){
    console.log(alpha.indexOf(c));
    index=alpha.indexOf(c)-13;
    console.log(index);
    if(index<0){
      index=alpha.length+index;
    }
     decode+=alpha[index];
  }
  else {
    decode+=c;
  }
}
  return decode;
}

console.log(rot13("SERR PBQR PNZC"));
