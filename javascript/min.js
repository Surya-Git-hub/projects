const min=(value1,value2) => {
  if (value1>value2) {
    return value2;
  }
  else if (value2>value1) {
    return value1;
  }
  else {
    return value1||value2;
  }
}
console.log(min(0,0));
