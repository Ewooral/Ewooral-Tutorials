function bubbleSort(nums){
    let swapped = false;
    do{
        swapped = false;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] > nums[i + 1]){
                const temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                swapped = true
            }
        }
    }
    while(swapped);
    return nums;

}

function bubbleSorting(nums) {
  let swapped = false;
  while (swapped) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i] + 1) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  }

  return nums;
}
console.log(bubbleSort([10,5,3,8,2,6,4,7,9,1]));
console.log(bubbleSorting([20,5,3,18,2,6,4,17,9,11]));