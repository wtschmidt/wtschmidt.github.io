/*
Definition - Strings can be manipulated in many of the same ways one can alter
    other data types, though they differ in some ways.
    
- Operator manipulation - strings can use the "+" operator, in this case known as
    the concatenation operator, which combines the string with whatever is on the 
    other end.
*/    
    - console.log("Wesley" + " " + "Schmidt"); //returns "Wesley Schmidt"
    - console.log("You're number is: " + 17); //returns "You're number is: 17"
/*    
- Method manipulation - strings can also be manipulated with methods like length,
    square bracket notation, toUpperCase(), and toLowerCase().
    
    - the length method with strings will simply return the length of a string
        in the form of a number.
*/        
        var name = "Wesley";
          console.log(name.length);  //returns 6
          
//  - square brackt notation is used to access a single character in a string.
    
        console.log(name[3]) //returns 'l'
        
//  - toUpperCase() will take any string inserted and make all existing characters
//      capitalized
        
        console.log(name.toUpperCase());  //returns "WESLEY"
        
//  - toLowerCase() is very similar but returns characters to the lower case.
    
        console.log(name.toLowerCase());  //returns "wesley"
/*    
    - indexOf() will return the index value of a string that is in an array, or
        it will return '-1' indicating that the referenced string cannot be found
        in the array.
*/        
        var array = ['John','Wesley','Sarah','Tom'];
        
          console.log(array.indexOf("Wesley"));  //returns '1'
          console.log(array.indexOf("Timmy"));  //returns '-1'
          
//  - replace() will take two parameters to replace a string with another string.
        
        var string = 'This sentence represents a series of strings!';

          string.replace(" ", "");
          console.log(string)  //should print "Thissentencerepresentsaseriesofstrings!"
