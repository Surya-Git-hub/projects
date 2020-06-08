
function generatechessboard(size) {


let char1='O';
let char2='#';
let row;
for (var i = 1; i <=size ; i++) {
  row='';
  for (var j = 1; j <=size; j++) {
    if (i%2==0) {

      if(j%2==0) {
      row+=char2;
    }
      else {
      row+=char1;
      }
  }
  else {
    if(j%2!=0) {
    row+=char2;
  }
    else {
    row+=char1;
    }
  }

  }
  console.log(row);

}
}

generatechessboard(5);
