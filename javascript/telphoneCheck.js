function telephoneCheck(str) {
  let s=''
  for (let v of str) {
    if(v!=' '){
      s+=v;
    }
  }
  let pattern=/^1?(\(\d{3}\)|\d{3})-?\d{3}-?\d{4}$/;
  console.log(pattern.test(s));
}

telephoneCheck("1 555-555-5555");
