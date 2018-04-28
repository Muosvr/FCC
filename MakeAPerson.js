// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Closures
// Details of the Object Model

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var fullName = firstAndLast;
    
    this.getFullName = function() {
      return fullName;
    };
    
    this.getFirstName = function() {
      var arr = fullName.split(" ");
      return arr[0];
    };
    
    this.getLastName = function() {
      var arr = fullName.split(" ");
      return arr[1];
    };
  
    this.setFirstName = function(newFirstName) {
      var arr = fullName.split(" ");
      arr[0] = newFirstName;
      fullName = arr.join(" ");
      
    };
  
    this.setLastName = function(newLastName) {
      var arr = fullName.split(" ");
      arr[1] = newLastName;
      fullName = arr.join(" ");
    };
    
    this.setFullName = function(newFullName){
      fullName = newFullName;
    };
    
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
Object.keys(bob);

