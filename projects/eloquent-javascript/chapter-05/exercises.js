// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {
  return arrays.reduce(function(a,b) {
    return a.concat(b)
  })
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)){
    body(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(collection, func) {
  
  if (Array.isArray(collection)){

        for (let i = 0; i < collection.length; i++){
            if (typeof func !== 'function'){
                if (!collection[i]){
                    return false
                }
            } else if (!func(collection[i], i, collection)){
                return false
            }
        }

    } else {
        
        for (var key in collection){
            if (typeof func !== 'function'){
                if (!collection[key]){
                    return false
                }
            }else if (!func(collection[key], key, collection)){
                return false
            }
        }
    }
     return true
}


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let counted = countBy(text, i => {
    let script = characterScript(i.codePointAt(0))
    return script ? script.direction : 'none';
  }).filter(({name}) => name !== 'none');
  if (counted.lenthg == 0){
    return 'ltr'
  }
  return counted.reduce((a,b) => a.count > b.count ? a : b).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
