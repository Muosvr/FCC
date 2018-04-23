// Exact Change 
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

// Otherwise, return change in coin and bills, sorted in highest to lowest order.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Global Object


function checkCashRegister(price, cash, cid) {
  //setup
  var change= cash-price;
  var count=0;
  var totalCid = 0;
  var face = 
      [["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]];
  
  var template = [];
  var result = [];
  var changeTest = [];
  
  //check if change is greater than cid total
  for (i=0;i<cid.length;i++){
    totalCid += cid[i][1];
  }
  
  if (totalCid < change){
    return "Insufficient Funds";
  }
  
  //check if change is euqal to cid total
  if (totalCid == change){
    return "Closed";
  }
  
  
  for (i=face.length-1;i>=0;i--){
    count ++;
    if (change % face[i][1] != change){
      var value = Math.floor(change/face[i][1])*face[i][1];
      if (value > cid[i][1]){
        value = cid[i][1];
      }
      
      result.push([face[i][0],value]);
      change -= value;
      change = round(change,2);
      changeTest.push(change);
    }
    
    if(i == 0 && change !=0){
      return "Insufficient Funds";
    }
  }
  
  //rounding function
  function round(number, precision) {
  var shift = function (number, precision, reverseShift) {
    if (reverseShift) {
      precision = -precision;
    }  
    var numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
  };
  return shift(Math.round(shift(number, precision, false)), precision, true);
}
  
  
  // Here is your change, ma'am.
  
  return result;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
