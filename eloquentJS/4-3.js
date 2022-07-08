// Your code here.

function arrayToList(array) {
	//init
  	let list = {};
  	
  	//loop
  	for (let i=array.length - 1; i>=0; i--) {
    	if (i === array.length-1){
          	list = {value: array[i],
                   rest: null}
        }
      	else {
        	list = {value: array[i],
                   rest: list}
        }
    }	
  
  	//return
    return list
}

function listToArray(list){
	//init
  	array=[]
  	//loop
  	while(list != null) {
    	array.push(list.value);
      	list = list.rest;
    }
  	//return
  	return array
}

function prepend(elem, list){
  //add elem in front
  list = {value: elem,
         rest: list}
  
  //return
  return list
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20