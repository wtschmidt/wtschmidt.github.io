/*
Definition - Built-in-constraints that allows for the use of the same block of code
    as many, or as little, times deemed necessary.
    
Types of Loops:

    - For Loop - a statement the uses three otional expressions, the variable 
        initialization, the condition, and the updater.  These expressions are 
        found in the parentheses directly after the for loop declaration, followed
        by the code block which will be executed inside curly brackets {}.
*/
        for (var i = 0; i < 5; i++) {
              console.log(i);    
          }
/*          
        - translated, the above loop is first declaring the variable "i" and 
            assigning it to be 0, and as long as i is less than 5 it will 
            continue to loop through.  After it returns i, the variable will then
            be updated by an increment of 1.  This code will return the numbers
            1 to 4, stopping when i is assigned the value of 5.
            
        - for loops are also specifically useful for looping through arrays, both
            forwards and backwards, with the help of the .length method.
*/            
            var arr = [];
            for (var i = 0; i < arr.length; i++){
              console.log(arr[i])
            } /*this will loop forward through an array as long as the variable
                'i' is less than the length of the array and return the assigned
                value of each index.
              */            
            var arr = [];
            for(var i = arr.length - 1; i > -1; i--){
              console.log(arr[i])
            } /*similar to the loop above, but this will loop through an array
                backwards, returning the assinged value of each index starting 
                from the end.
              */
/*    - While Loop - a statement that will loop through a block of code as long as 
        the condition, written inside parenthises (), resolves true.
*/        
        var x = 14;
        while (x > 7) {
              console.log(x + 2);
              x--;
          }
/*       
        - translated the above code reads as while x is greater than 7 (conditional),
            return x + 2, and then decrement x by one.
            
        - unlike a for loop, a while loop dosen't have a built in incrament, so it
            is important to remeber one after your return statement.  While loops
            are useful when given a specific conditional, rather than one that is 
            pre-determined, to loop through a block of code an unspecified amount 
            of times.  For example you can have a block of code run forever so long
            as the "G" button is never pressed, which would look like:
*/            
            var keyPressed = 'g';
            while (keyPressed !== 'g'){console.log("That's not 'g'")}
/*
    - For-in Loop - a statement that will loop through non-Symbol properties such as
        Arrays and Objects.  They are declared with the key-words "for in" before
        parenthises inside which are the variable declaration for the key and object
        to be accessed.
*/        
        var myObject = {};
        
        for (var key in myObject){
              myObject[key] = 'name';
              myObject.name = "Wesley";
          }
        console.log(myObject); //the object should now include the keyname "name"
        //assigned to the value of "Wesley"
