function palindrome(str) {
  let s=[];
  str=str.toLowerCase();
  str = str.replace(/[^a-zA-Z 0-9]+/g,"");
  for(let v of str){
    if (v==' ') {
    }
    else{
      s.push(v);
    }
  }
  console.log(s)
  if((s.length%2)!=0)
{
    let middle=Math.floor(s.length/2);
    for (let i = 0; i < middle; i++)
    {
        if (s[i]!=s[s.length-(i+1)])
          {
            return false;
          }
    }
    return true;
}
  else
{
    let middle=((s.length/2)-1);
    for (let i = 0; i <= middle; i++)
    {
        if (s[i]!=s[s.length-(i+1)])
          {
            return false;
          }

    }
      return true;
}
}


console.log(palindrome("ey e#"));
