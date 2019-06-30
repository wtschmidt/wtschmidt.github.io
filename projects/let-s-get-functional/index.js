// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-wtschmidt');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */


var maleCount = function(array) {
    var males = 0;
    if (Array.isArray(array)){
        _.filter(array, function(element, i, array){
            if (element.gender === 'male'){
                males++
            }
        })
    }
    return males
};

var femaleCount = function(array) {
    var females = 0;
    if (Array.isArray(array)){
        _.reduce(array, function(previousSum, currentValue, index){
            if (currentValue.gender === 'female'){
                females++
            }
        }, 0)
    }
    return females
};

var oldestCustomer = function(array){
    var oldest = '';
    var oldestAge = 0;
    
    for (var i = 0; i < array.length; i++){

    if (array[i]['age'] > oldestAge){
      oldestAge = array[i]['age']
      oldest = array[i]['name']
    }
  }
  return oldest
};

var youngestCustomer = function(array){
    var youngest = '';
    var youngestAge = 1000;
    
    for (var i = 0; i < array.length; i++){

    if (array[i]['age'] < youngestAge){
      youngestAge = array[i]['age']
      youngest = array[i]['name']
    }
  }
  return youngest
};;

var averageBalance = function(array){
    let num;
    var average = 0;
    var counter = 0;

    for (let i = 0; i < array.length; i++){
      num = array[i]['balance']
      var text = num.replace(/[$,]+/g,"");
      var other = parseFloat(text)
      //console.log(other)
      average += Math.round(other)
      //console.log(average)
      counter++
      //console.log(counter)
    }
   return average/ counter
   
};

var firstLetterCount = function (array, letter){
  var counter = 0;  
    for (let i = 0; i < array.length; i++){
      
      if (array[i]['name'][0].toLowerCase() === letter.toLowerCase()){
        counter++
      }
    }
  return counter
};

var friendFirstLetterCount = function (array, customer, letter){
    var counter = 0;
    for (let i = 0; i < array.length; i++){
      if (customer.toLowerCase() === array[i]['name'].toLowerCase()){
        for (let j = 0; j < array[i]['friends'].length; j++){
          if (array[i]['friends'][j]['name'][0].toLowerCase() === letter.toLowerCase()){
            counter++
        }
      }  
    }
    
  }
  return counter
}

var friendsCount = function(array, name){
  var friendsArr = [];
  if(Array.isArray(array)){
      for (let i = 0; i < array.length; i++){
          
        for (let j = 0; j < array[i]['friends'].length; j++){
            
          if (array[i]['friends'][j]['name'] === name){
              
            friendsArr.push(array[i]['name'])
          }    
      }
    }
  }
  return friendsArr
}

var topThreeTags = function(array){



    let tagCount = _.reduce(array, (count, customer) => {
      _.each(customer.tags, tag => {
        if (count[tag]){
          count[tag]++;
        } else {
          count[tag] = 1;
        }
      });
      return count;
    }, {});
    tagCount = _.map(tagCount, (count, key) => {
      return [key, count];
    });
    tagCount.sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      return 0;
    });
    tagCount = tagCount.slice(0, 3);
    return _.map(tagCount, tag => tag[0]);
};  



    // let allTags = [];
    // let tag;
    // let count = 0;
    // let countedTags = [];
   
    // while(allTags.length > 0){
    //   count = 0;
    //   for(let i = 0; i < allTags.length; i++){
    //       if(i === 0){
    //           tag = allTags[i];
    //       }

    //       if(tag === allTags[i]){
    //           count++;
    //           allTags.splice(i, 1);
    //       }
    //   }
    //   countedTags.push([tag, count]);
    // }

    // let answer = [];
    // let counter = 0;
    // let index;
    // while(answer.length <= 2){
    //     for(let m = 0; m < countedTags.length; m++){
    //         if(counter < countedTags[m][1]){
    //           counter = countedTags[m][1];
    //           index = m;
    //         }
    //     }
    //     answer.push(countedTags[index]);
    //     countedTags.splice(index, 1);
    // }

    // return(answer);
//}

var genderCount = function(array){
  var genders = {male: 0, female: 0, transgender: 0};
    if (Array.isArray(array)){
      _.reduce(array, function(seed, currentValue, index){
        if (currentValue.gender === 'female'){
          genders.female++
        } else if (currentValue.gender === 'male'){
          genders.male++
        } else {
          genders.transgender++
        }
    }, 0) 
  } 
  return genders   
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
