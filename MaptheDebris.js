// Return a new array that transforms the element's average altitude into their orbital periods.

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Math.pow()


function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  
//   arr[0].avgAlt.Delete();
  
  for (i=0; i<arr.length; i++){
    var oP = Math.round((Math.pow((Math.pow(arr[i].avgAlt+earthRadius,3))/(GM),0.5)) * (Math.PI)*2);
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = oP;
    
  }
  
  
  
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
