// Inventory Update 
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Global Array Object


function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
//check if items betwen new and current inventory matches, if does, add up quantity
  for (i=0; i< arr2.length;i++){
    var exist = false;
    for (j=0; j<arr1.length;j++){
      if(arr2[i][1] == arr1[j][1]){
        arr1[j][0] += arr2[i][0];
        exist = true;
      }
    }
    //if item does not exist in current inventory, add to current inventory
    if (exist == false){
      arr1.push(arr2[i]);
    }
  }
  
  //sort array by alphabatical order
  arr1.sort(function(a,b){
    return a[1].charCodeAt(0)-b[1].charCodeAt(0);
  });
  
  
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Aair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
