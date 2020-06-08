function convertToRoman(num) {
  let places=(num.toString()).length;
  let parray=[];

  for (let i=0;i<places;i++) {
    let p=Math.floor(num%10);
    parray.push(p);
    num=num/10;
  }
  let ones=['I','II','III','IV','V','VI','VII','VIII','IX']
  let tens=['X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
  let hund=['C','CC','CCC','CD','D','DC','DCC','DCCC','CM']
  let thous=['M','MM','MMM']
  let R=''
  for (let i = 0; i < parray.length; i++) {
    if(i==0){
      if(parray[i]!=0){
      R=ones[parray[i]-1];}}
      if(i==1){
        if(parray[i]!=0){
        R=tens[parray[i]-1]+R;
      }}
      if (i==2) {
        if(parray[i]!=0){
        R=hund[parray[i]-1]+R;
      }}
      if (i==3) {
        if(parray[i]!=0){
        R=thous[parray[i]-1]+R;
      }}
  }
  return R;
}

console.log(convertToRoman(891));
