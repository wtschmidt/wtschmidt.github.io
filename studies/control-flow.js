/*
Definition - The flow of the code, or the sequence of how everything is proccessed.
    Essentially it decides what should and should not be run and what priority
    it has over other statements.  This is especially true for conditional
    statements, which control the flow of code using boolean values (true or
    false).
    
Types of Conditional Statements:
*/
//- if statement:

    var inBounds = false;
    if (inBounds === false){
          console.log("Out of Bounds!")
      }
    
/*  - this statement checks the conditional to see if the variable inBounds is
        false, in which case it will return "Out of Bounds!", and if not the code
        block will not run at all.
        
- else-if statement:
*/
      let color = 'red'
      if (color === 'red'){
          console.log("The color is red!")
      } else if (color === 'blue'){
          console.log("The color is blue!")
      }
/*    
    - this statement checks two specific conditionals, looking to see if the variable 
        color is assigned to 'red' first, and if that returns false it will then
        check if it is assigned to 'blue'.

- if else statement:
*/    
      var health
      if (health > 0){
          console.log("Still alive and kickin'!")
      } else {
          console.log("Dead!")
      }
/*    
    - this statement is checking a player's status on their health, deciding whether
        or not they are still alive.  It first reads the top line, checking the
        conditional of whether the variable "health" is greater than 0 and either
        return "Still alive and kickin'!" if this is true, or, if false, it
        will transfer priority to the else statement and return "Dead!" as a 
        default.
        
- switch statemnt:
*/    
      var music = 'rock';
      switch (music) {
          case 'rock':
              console.log("Rock N' Roll!");
              break;
          case 'jazz':
              console.log("Smooth, Sensual Jazz");
              break;
          case 'edm':
              console.log("WUB WUB WUB!");
              break;
          default:
              console.log("The sound of silence...");
      }

        console.log(music)
/*    
    - this statement is used when the user wants to have multiple cases as a conditional.
        If music is assigned to 'rock' it will return "Rock N' Roll!" or if it is
        assigned to 'edm' it will return "WUB WUB WUB!".  There is no limit to the
        amount of cases one can have.  It is very important to include a break 
        between cases, otherwise the block will carry over to the next case and
        provide unexpected results.
*/