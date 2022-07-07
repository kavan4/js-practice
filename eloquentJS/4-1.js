// Your code here.
function range(start, end, step = start<end ? 1 : -1) {
	let array = [];
  	if(step > 0) {
      for (let i=start; i<=end; i=i+step) {
  		array.push(i)
  		}
    }
  	if(step < 0) {
    	for (let i=start; i>=end; i=i+step) {
  		array.push(i)
  		}
    }
  return array
}

function sum(array) {
	//init
  	let arraySum = 0
    
  	//loop
  	for (let elem of array){
    	arraySum += elem
    }
    
  	//return
  return arraySum 
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55