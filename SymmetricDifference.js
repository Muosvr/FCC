// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.prototype.reduce()
// Symmetric Difference


function sym(args) {
  var firstArr = arguments[0];
  var firstArrFil = [];
  var secondArrFil = [];
  var result = [];
  
  for (i=1;i<arguments.length;i++){
    var secondArr = arguments[i];
    
      firstArrFil = firstArr.filter(function(val){
      
        if(secondArr.indexOf(val) == -1){
          return true;
        }else {
          return false;
        }
      });
    
      secondArrFil = secondArr.filter(function(val){
         
        if(firstArr.indexOf(val) == -1){
          return true;
        }else{
          return false;
        }
        
      });
    
    firstArr = firstArrFil.concat(secondArrFil);
    
    
  }
  
  firstArr.sort();
  
  for(i=0;i<firstArr.length;i++){
    if (firstArr[i] != firstArr[i+1]){
      result.push(firstArr[i]);
    }
  }
  
  return result;
  
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
