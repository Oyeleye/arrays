function printReverse (arr){
	for(i=arr.length - 1; i>=0; i--){
	  console.log(arr[i]);	
	}
}

printReverse ([2,4,3,1,7]);

//** isUniform***
function isUniform(arr) {
	var firstItem = arr[0];
	for(var i=1; i<arr.length; i++) {
		if(arr[i] !== firstItem) {
			return false
		} 
	}
	return true;
}


//function isUniform(arr) {
//	var firstItem = arr[0];
//	arr.forEach( function (element){
//		if(element[i] !== firstItem) {
//			return false
//		} 
//	});
//	return true;
//}


//****sumArrsy()***
function sumArray(arr) {
	var total= 0;
   arr.forEach( function (element){
   	total += element;
   });
   return total;
}


//****sumArray()***
function max(arr) {
	var maxItem= arr[0];
	for (var i=1; i<arr.length; i++) {
		if(arr[i] > maxItem){
        maxItem= arr[i];
		}
		
	}
   return maxItem;
}
