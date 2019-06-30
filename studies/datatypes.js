/*
Simple/Primitive:
        
    Definition - a data type that is not an object and is immutable, meaning 
        they can't be changed, it also has no methods.  When called they are
        copied to other variables rather than completely moving them.
        
    Simple data types:    
    
    - Number - a type of data that simply holds a number, which can be an 
        interger (like 7) or a floating-point (like 7.1).
*/
        console.log(7);
/*        
        - NaN - a type of number that stands for "Not-a-Number", shows if a value
            is simply not a legal number.
*/              console.log(NaN);
/*              
        - Infinity - a type of number that is greater than all other positive 
            numbers.  Any number multiplied by infinity equals infinity, and any
            number divided by infinity equals 0.  Finally, infinity divided by
            infinity equals NaN.
*/              console.log(Infinity);
/*
        - "-Infinity" -  a type of number that acts similar to positive infinity,
            negative infinity is the smallest number possible.  Any positive 
            number multiplied by negative infinity equals negative infinity, and
            any negative number times negative infinity equals positive infinity.
            The same rule applies when negative infinity is divided by either 
            positive or negative infinity, it will result in NaN.
*/              console.log(-Infinity);
/*
    - String - a type of data that can store a series of characters (or text),
        and are found in quotations in a block of code (like "Wesley").
*/          console.log("Wesley");
/*
    - Boolean - a type of data that stores a true or false value, often found
        in conditional statements.
*/          console.log(true);
/*
    - Undefined - a type of data that is displayed when a variable is declared,
        but never assigned any value.
*/          console.log(undefined);
/*
    - Null - a type of data that is assigned to a declared variable with the 
        intention of it not being defined, similar to undefined, but is usually
        declared intentionally (var x = null).
*/          console.log(null);
/*
            
Complex:
    
    Definition - a type of data that can be as large as the creator desires it
        to be.  Rather than being directly copied like primitive types, complex
        data types must be refenced to their original location in order to access 
        them.  If a variable is called in a function and changed within its new
        scope, it is actually changed on the variable itself.
*/        
              var changeName = function(name){
                name = "Wesley";
              }
              var myName = "Adam";
              console.log(changeName(myName));  //will change the variable myName to "Wesley"
        
/*    Complex data types:
    
    - Object - a type of data that acts as a collection of properties, each with
        their own key pairing.  Are declared with curly brackets (var myObj = {}).
*/            console.log({});
/*    - Array - a type of data that acts as a list, similar to objects, but without
        key/value pairs.  Instead they are accessed through indices that start at
        0 and are declared with single brackets (var myArr = []).
*/            console.log([]);
/*    - Function - a group of statements that are all in the same scope used to
        complete one task.  Can be declared with no paramenter or as many as
        needed (function myFunc(){ }).
*/            var myFunc = function(){};
              console.log(myFunc);