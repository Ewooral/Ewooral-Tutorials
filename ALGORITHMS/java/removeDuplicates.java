class Solution {
    
    public int[] remElement(int[] arr, int index) {
        
        //
        // Overwrite the element at the given index by 
        // moving all the elements to the right of the
        // index, one position to the left.
        //
        for (int i = index + 1; i < arr.length; i++) {
            arr[i - 1] = arr[i];
        }

        return arr;
    }
    
    public int removeDuplicates(int[] nums) {
        
        // Initialize the counter and the array index.
        int i = 1, count = 1, length = nums.length;
         //
        // Start from the second element of the array and process
        // elements one by one.
        //
        while (i < length) {
            
            //
            // If the current element is a duplicate, 
            // increment the count.
            //
            if (nums[i] == nums[i - 1]) {
                
                count++;

                 
                //    
                // If the count is more than 2, this is an unwanted duplicate element
                // and hence we remove it from the array.
                //    
                if (count > 2) {
                    
                    this.remElement(nums, i);

                    //
                    // Note that we have to decrement the array index value to
                    // keep it consistent with the size of the array.
                    //    
                    i--;

                    //
                    // Since we have a fixed size array and we can't actually
                    // remove an element, we reduce the length of the array as
                    // well.
                    //
                    length--;
                }
            } else {
            
            //
            // Reset the count since we encountered a different element
            // than the previous one.
            //
            count = 1;
         }
                
            // Move on to the next element in the array
            i++;
        }
            
        return length;

    }
                
        
}
/**
 * Complexity Analysis
 * 
 * Time Complexity: Let's see what the costly operations in our array are:
 * We have to iterate over all the elements in the array. Suppose that the
 * original array contains N elements, the time taken here would be O(N)O(N).
 * Next, for every unwanted duplicate element, we will have to perform a delete
 * operation and deletions in arrays are also O(N)O(N).
 * The worst case would be when all the elements in the array are the same. In
 * that case, we would be performing N - 2N−2 deletions thus giving us O(N^2)O(N2) complexity for deletions
 * Overall complexity = O(N) + O(N^2) \equiv O(N^2)O(N)+O(N2)≡O(N2)
 * Space Complexity: O(1)O(1) since we are modifying the array in-place.
 */


//  second Approach

class SecondSolution {

    public int removeDuplicates(int[] nums) {

    //
    // Initialize the counter and the second pointer.
    //
        int j = 1, count = 1;

         //
        // Start from the second element of the array and process
        // elements one by one.
        //