function twoNumberSum(array, targetSum) {
  // Write your code here.
	// targetSum = current + x(anynumber)
	// x = targetSum - current  
    // time complexity: O(n^2)
    // space complexity: O(1)
	let i
	let j
	for (i = 0; i < array.length; i++) {
		 for(j = i+1; j < array.length; j++) {
			 if(array[i] + array[j] == targetSum){
				 return [array[i], array[j]]
			 }
			 
		 }
		
	}
	return []
	
}
console.log(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163));