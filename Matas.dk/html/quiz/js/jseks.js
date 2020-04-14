//-variabler: JavaScript variables are containers for storing data values.

//-arrays: JavaScript arrays are used to store multiple values in a single variable

var cars = ["Saab", "Volvo", "BMW"];

//You access an array element by referring to the index number.

var name = cars[0];

    
//-objekter: Objects are variables too. But objects can contain many values. JavaScript objects are containers for named values called properties or methods

var car = {type:"Fiat", model:"500", color:"white"};

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//access object properties

objectName.propertyName  OR objectName["propertyName"]


-gøres brug af DOM
-operatorer 
-kontrolstrukturer herunder:

//if-else: Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

if (hour < 18) {
  greeting = "Good day";
}

//Use the else statement to specify a block of code to be executed if the condition is false.

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
     
    
 //-loops
     
     for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}


//Statement 1 sets a variable before the loop starts (var i = 0).

//Statement 2 defines the condition for the loop to run (i must be less than 5).

//Statement 3 increases a value (i++) each time the code block in the loop has been executed.



Det vi så ikke har været igennem endnu, men som i nok får svært ved at undgå at have med (i behøves ikke).

//-funktioner: A JavaScript function is a block of code designed to perform a particular task.

function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


-events