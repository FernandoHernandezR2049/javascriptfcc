function cidTotal(cid){
  let sum = 0;
    for (let i = 0; i < 9; i++){
      sum += cid[i][1];
    }
    return sum;
}

function computeChange(cid, change, changecid){
  while( change >= 100 && cid[8][1] >= 100){
    change = (change - 100).toFixed(2);
    cid[8][1] -= 100;
    changecid[8][1] += 100;
  }
  while( change >= 20 && cid[7][1] >= 20){
    change = (change - 20).toFixed(2);
    cid[7][1] -= 20;
    changecid[7][1] += 20;
  }
  while( change >= 10 && cid[6][1] >= 10){
    change = (change - 10).toFixed(2);
    cid[6][1] -= 10;
    changecid[6][1] += 10;
  }
  while( change >= 5 && cid[5][1] >= 5){
    change = (change - 5).toFixed(2);
    cid[5][1] -= 5;
    changecid[5][1] += 5;
  }
  while( change >= 1 && cid[4][1] >= 1){
    change = (change - 1).toFixed(2);
    cid[4][1] -= 1;
    changecid[4][1] += 1;
  }
  while( change >= 0.25 && cid[3][1] >= 0.25){
    change = (change - 0.25).toFixed(2);
    cid[3][1] -= 0.25;
    changecid[3][1] += 0.25;
  }
  while( change >= 0.1 && cid[2][1] >= 0.1){
    change = (change - 0.1).toFixed(2);
    cid[2][1] -= 0.1;
    changecid[2][1] += 0.1;
  }
  while( change >= 0.05 && cid[1][1] >= 0.05){
    change = (change - 0.05).toFixed(2);
    cid[1][1] -= 0.05;
    changecid[1][1] += 0.05;
  }
  while( change >= 0.01 && cid[0][1] >= 0.01){
    change = (change - 0.01).toFixed(2);
    cid[0][1] -= 0.01;
    changecid[0][1] += 0.01;
  }
  if (change < 0){
    return 'error';
  }
  else if ( change == 0.00){
    return changecid;
  }
  else{
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
}

function filterChange(changecid){
  let filteredChangeCid = [];
  for(let i = 0; i < 9; i++){
    if(changecid[i][1] !==0){
      filteredChangeCid.unshift(changecid[i]);
    }
  }
  return filteredChangeCid;
}

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let cidSum = cidTotal(cid);
  if (cidSum === change){
    return {status: "CLOSED", change: cid};
  }
  else if (cidSum < change){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  else{
    let changecid = [
  ["PENNY", 0],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
];
  change = (cash - price).toFixed(2);
  const computedChange = computeChange(cid, change,changecid);
    if(Array.isArray(computedChange)){
      const filteredChange = filterChange(computedChange);
      return {status: "OPEN", change: filteredChange};
    }
    return{status: "INSUFFICIENT_FUNDS", change: []};
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


