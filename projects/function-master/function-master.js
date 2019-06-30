//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    
    var array = []
    for (var key in object){
        array.push(object[key])
    }
    return array
    
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    
    return Object.keys(object).join(" ")
    
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
    var array = []
    for (var key in object){
        array.push(object[key])
    }
    
    for (var i = 0; i < array.length; i ++){
        if (typeof array[i] !== "string"){
            array.splice(i,1)
        }
    }
    return array.join(" ")
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        
        return "array"
    } else if (typeof collection === "object"){
        return "object"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    var restOfWord = ""
    for (var i = 1; i < string.length; i++){
        restOfWord += string[i]
    }
    return string[0].toUpperCase() + restOfWord
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) { 
    
    var word = ""
    var arr = string.split(" ");
    
    for (var i = 0; i < arr.length; i++){
        var capLetter = arr[i][0].toUpperCase()
        capLetter += arr[i].slice(1) + " "
        word += capLetter
    }
    return word.trim()     
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

    var restOfWord = ""
    for (var i = 1; i < object.name.length; i++){
        restOfWord += object.name[i]
    }
    
    return "Welcome " + object.name[0].toUpperCase() + restOfWord + "!"
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    
    var restOfWord = ""
    for (var i = 1; i < object.name.length; i++){
        restOfWord += object.name[i]
    }
    var otherWord = ""
    for (var i = 1; i < object.species.length; i++){
        otherWord += object.species[i]
    }

    
    return object.name[0].toUpperCase() + restOfWord + " is a " + object.species[0].toUpperCase() + otherWord
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    
    var noises = ""
    if (Array.isArray(object.noises) && object.noises. length > 0){
        noises = object.noises.join(" ")
    } else {
        noises = "there are no noises"
    }
    return noises 
    
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
    var arr = string.split(" ")
    var truth = false
    for (var i = 0; i < arr.length; i++){
        if (arr[i].toLowerCase() === word.toLowerCase()){
            return true
        }
      
    }
   return false   
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
    object.friends.push(name)
    return object

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
    //var counter = 0
    if (object.friends === undefined){
        return false
    }
    for (var i = 0; i < object.friends.length; i++){
        if (name === object.friends[i]){
            return true
        //} else {
        //    counter++
        }
    }
    // if (counter === object.friends.length){
        return false
    //}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    
    var notFriends = [];
    
    for (var i = 0; i < array.length; i++){
        if (name !== array[i].name && array[i].friends.includes(name) === false){
            notFriends.push(array[i].name)
        }
    }
    return notFriends
}



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
   
    for (var lock in object){
        
        if (lock === key && value !== undefined){
            
            object[lock] = value;
        
        } else if (lock !== key && value !== undefined){
            
            object[key] = value
        
        }
            
    }
    
    return object
    
}


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

    
    for (var key in object){
        for (var i = 0; i < array.length; i++){
            if (object.hasOwnProperty(array[i])){
                delete object[array[i]]
            }
        }
    }
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
    let newArray = []
    for (var i = 0; i < array.length; i++){
        if (newArray.indexOf(array[i]) === -1){
            newArray.push(array[i])
        }
    }
    return newArray
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}