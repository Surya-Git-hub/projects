  let checkBalance=(money)=> {
  let bal=0;
  for (let i = 0; i < money.length; i++) {
  bal+=money[i][1]}
  bal=bal.toFixed(2);
  return bal;}

let coincalculator=(numcoin)=>{
  let coins=[
    Math.ceil(numcoin[8][1]/100),
    Math.ceil(numcoin[7][1]/20),
    Math.ceil(numcoin[6][1]/10),
    Math.ceil(numcoin[5][1]/5),
    Math.ceil(numcoin[4][1]/1),
    Math.ceil(numcoin[3][1]/0.25),
    Math.ceil(numcoin[2][1]/0.10),
    Math.ceil(numcoin[1][1]/0.05),
    Math.ceil(numcoin[0][1]/0.01)]
  return coins;}

  let value=[
    ["HUNDRED",100],
    ["TWENTY",20],
    ["TEN",10],
    ["FIVE",5],
    ["ONE",1],
    ["QUARTER",0.25],
    ["DIME",0.10],
    ["NICKEL",0.05],
    ["PENNY",0.01]]

let checkCashRegister=(price, cash, cid)=>{
  let change=(cash-price);
  console.log(change);
  let balance=checkBalance(cid)
  let numOfcoins=coincalculator(cid);
  let result={status:"",change:[]}

  if (balance<change) {
    result.status="INSUFFICIENT_FUNDS";
    return (result);}
  else if (balance==change) {
    result.status="CLOSED";
    result.change=cid;
    return result;
  }
  else {
    result.status="OPEN"
        let j=0,numc;


    for (let v of value) {
      if (change>v[1]){
        if(change<=(numOfcoins[j]*v[1]).toFixed(2)){
          if(v[1]==0.01){change=parseFloat(change.toFixed(2))}
          numc =Math.floor(change/v[1]);
          console.log(numc,change);
          if((change%v[1])===0){
          result.change.push([v[0],change]);
          return result;
          }
          result.change.push([v[0],numc*v[1]]);
          change-=numc*v[1]
          }
        else if(change>(numOfcoins[j]*v[1])){
          numc =change/v[1];
          result.change.push([v[0],numOfcoins[j]*v[1]]);
          change-=numOfcoins[j]*v[1]
          }
      }
    j++}
if(change>0.01){result.status="INSUFFICIENT_FUNDS";result.change=[];}return result;
  }




  }
  console.log(checkCashRegister(19.5, 20,
  [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]));
  console.log(checkCashRegister(3.26, 100,
  [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]]));
//{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15],
//["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
