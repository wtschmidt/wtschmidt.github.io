/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  
   Variables are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
console.log(myVariable)

/*
- var vs let vs const:
    - var declared variables are the first to be processed when running a block of
        code, no matter where they are declared, this is a process called hoisting.
        
*/      name = "Wesley";
        var name;
        console.log(name)
        
/*  - const declared variables, also known as constants, cannot be altered once
        declared, nor can they be hoisted.  Their use is limited to the scope they
        are created in and its child scope and cannot be undefined.
*/        
        const myFirstName = "Wesley";
        //name = "Tom";  //will NOT change the variable 'name' to 'Tom'
        console.log(name)
        
/*  - let declared variables are block scope variables, similar to const variables,
        that also cannot be hoisted, but their assigned values CAN be changed.
*/        
        let newName = "Wesley";
        name = "Tom";  //WILL change the assigned value of 'name' to "Tom"
        console.log(name)