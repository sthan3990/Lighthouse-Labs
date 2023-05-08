
const findMedianSortedValue =  (nums1, nums2) => {

  let mergedArray = [];
  let left = 0, right = 0, counter = 0;
  
  while(nums1.length > left && nums2.length > right){
      if(nums1[left] > nums2[right]){
          mergedArray.push(nums2[right]);
          right++;
      }else if(nums1[left] <= nums2[right]){
          mergedArray.push(nums1[left]);
          left++;
      }
  }

  console.log(mergedArray);
  
}

findMedianSortedValue([1,3],[2]);
