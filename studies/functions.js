/*
Definition - Functions are first class objects used to store blocks of code in an 
    easily accessable way so that one may use them as many times as desired.  
    They will often be set up to be flexible, allowing a variety of uses while 
    still utilizing the same block of code.  Setting up a function statement requires 
    a name, parameters, and a block of code inside curly brackets "{}" that will 
    run when the name is referenced with proper parameters.  The parameters of a 
    function are strictly place holders for the arguments passed in, meaning they 
    no values and will print "undefined" until they are given one.
*/    
        function printName (name){
        console.log(name);
      }// this function called "printName" will take in the parameter "name" and
       // print it to the console
/*    
    - to call this function, simply reference the name of the function and fill
        the parameters
*/
        printName("Wesley"); // will print "Wesley" to the console
        
/*    - functions have the option to accept parameters, meaning one can create a 
        parameter-less function and assign it to a variable to create a 
        function expression.  Variables can also be assigned a function to store
        and use later in ones code, simply call the function as one would normally 
        with the variable name and () containing your parameters.
*/        
        var add = function(x,y) {return x + y;}
        var number = add(12, 2);  //returns 14
        console.log(number)
    
/*    - functions only work when properly declared and referenced in their correct scope.
        This means if one tries to call a function that has been declared below
        the call, there will be a reference error.  Parent scopes are the larger
        scopes that contain child scopes, a child scope can reference a parent 
        scope, but the parent cannot reference the child scope.
*/        
        var newName = fullName("Wesley","Schmidt");
        function fullName(nameFirst, nameLast){
            return nameFirst + " " + nameLast;
        } 
        console.log(newName)
          // this won't work because we tried to call the function fullName() before
          // it even existed  
    
/*    - one can nest one function inside of another function to create what is called
        a "closure", which allows it to have open variables that can be freely altered
        inside of a closed off space that won't affect the rest of the code.
*/        
        function dividedSum (x,y){
            function sumTimesTwo (a){
                return a * 2;
            }
            return sumTimesTwo(x) / sumTimesTwo(y);
        }
        console.log(dividedSum(10,2)) // prints 5
        
         // this will put both parameters in the sumTimesTwo function and then
         // divide them by one another
        
/*        - inner functiions in nested functions will be stored as long as the outer
          function is called first.
*/          
          function outer(a){
              function inner(b){
                  return b % a;
              }
              return inner;
            }
            var outNum = outer(7); // basically saying you want to be able to take
            // any number, divide it by 7, and return the remainder
            var answer = outNum(21); // returns 0, because 21 % 7 is equal to 0
            console.log(answer)
            var answer2 = outer(21)(7); // returns 7
            console.log(answer2)
         
