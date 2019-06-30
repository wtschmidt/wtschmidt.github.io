/*
Definition - Operators allow users to interact with the data in different ways, like
    assigning new values or comparing them to create a boolean expression.  A
    unary operator only works with one value, while a binary uses two, and a 
    ternary operator uses three.
    
Types of Operators:
    
    - Assignment Operators - assigns the value to a variable using "=" (simple
        assignment), "+=" (additional assignment), "-=" (subtraction assignment),
        "*=" (multiplication assignment), "/=" (division assignment), and "%="
        (modulo assignment).  These will alter and change the value of the 
        variable it is being assigned to.
*/        
            let a = 2 //when referenced x will resolve to 1
            let b = 0
            console.log(b += a) //b = b + a => 2
            let c = 4
            console.log(c -= a) //c = c - a => 2
            let d = 2
            console.log(d *= a) //d = d * a => 4
            let e = 10
            console.log(e /= a) //e = e / a => 5
            let f = 10
            console.log(f %= a) //f = f % a => 0
/*            
    - Arithmatic Operators - simply allow users to alter values using mathamatic
        expressions like "+" (addition), "-" (subtraction), "*" (multiplication), 
        "/" (division) and "%" (modulo).  While the others are self explanlitory,
        modulo acts as a division that returns the remainder.
*/        
            - console.log(1 + 1) //returns 2
            - console.log(2 - 1) //returns 1
            - console.log(2 * 4) //returns 8
            - console.log(16 / 8) //returns 2
            - console.log(13 % 2) //returns 1, because 2 goes into 13 six times
                //with 1 left over
/*                
    - Comparison Operators - evaluates a boolean expression by comparing two
        values to one another using "<" (less than), ">" (greater than), "<=" (less 
        than and equal to), ">=" (greater than and equal to), "==" (equal to), and 
        "===" (strictly equal to).  While "==" will convert operands to be 
        the same data type, "===" will not, and will return false if both data 
        types arn't the same. Users can also check if values are "!==" (not equal 
        to) and "!===" (strictly not equal to).
*/        
            - console.log(1 > 2); //will resolve false
            - console.log(1 == "1"); //will resolve true
            - console.log(1 === "1"); //will resolve false
            - console.log(1 !== 2); //will resolve true
/*            
    - Logical Operators - a way to check multiple conditions to resolve a single
        boolean value using "&&"" (and), "||"" (or), and "!" (bang).  The "&&" 
        operator makes it to where the expression must pass both comparison operators
        in order for it to resolve to true.  The "||" operator allows either 
        operator entered to pass as true in oder to resolve to true.  The "!" 
        operator simply flips the boolean expression, allowing one to ask if
        a certain value is NOT whatever they may assign it
*/        
            - console.log(7 > 5 && 2 > 9); //will resolve false because while
                //7 is greater than 5, 2 is not greater than 9
            - console.log(5 > 6 || 1 < 2); //will resolve true because though
                //5 is not greater than 6, 1 is still less than 2 and passes
            - console.log(1 !== 7); //will resolve true    
/*            
    - Unary Operators - an operator with a single operand, meaning it only needs
        one data type to operate.  delete, typeof, and instanceof are all unary 
        operators.
        
        
        - the delete operator can delete an object, a property of an object,
            or anything from a specific index of an array.
*/          
            let myObj = {name: "Wesley", age: 24};
            let myArr = [1,2,4]
            - delete myObj.name; //deletes a property of an object
                console.log(myObj)
            - delete myObj.age; //deletes the age property of myObj
                console.log(myObj)
            - delete myArr[1]; //deletes a specific index in an array
            
/*        - the typeof operator is used to check the data type of what follows it
            and will return a string.
*/          - typeof "Wesley"; //returns string
            - typeof 7; //returns number
            - typeof true; //returns boolean
            var newObj = {};
                console.log(typeof newObj); //returns object
            var myFunc = new function(a, b){};
            console.log(typeof myFunc)
                //typeof myFunc;  //returns function
/*      - the instanceof operator returns true if the object matches the
             specified object type.
*/            function List(name, age, gender){
                  this.name = name;
                  this.age = age;
                  this.gender = gender;
              };
              
              var wesley = new List("Wesley", 24, 'male')
              var sarah
              
              console.log (wesley instanceof List) //returns true
              console.log (wesley instanceof Object) //return true
              console.log (sarah instanceof List) //returns false
                  
/*    - Ternary Operators - the only conditional operator that uses three operands
        and resolves to one boolean value.  It begins with a conditional and is 
        followed shortly by two results depending on the truth of the condition.
*/        
        let x = 6
        console.log((x > 5)? true : false);
        var name = "Wesley"
        console.log(name = "Wesley" ? "yes" : "no");
        
