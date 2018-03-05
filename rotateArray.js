function minNumberInRotateArray(rotateArray) {
  if (rotateArray.length == 0) {
    return 0;
  } else {
    return findMid(rotateArray, 0, rotateArray.length - 1);
  }
  function findMid(arr, left, right) {
    if (left == right) {
      return arr[left];
    }
    let mid = parseInt((left + right) / 2);
    if (arr[mid] > arr[right]) {
      return findMid(arr, mid + 1, right);
    } else {
      return findMid(arr, left, mid);
    }
  }
}
// public static int minNumberInRotateArray(int[] array) {
//     if (array.length == 0)
//         return 0;
//     int left = 0;
//     int right = array.length - 1;
//     int middle = -1;
//     while (array[left]>=array[right]) {
//         if(right-left==1){
//             middle = right;
//             break;
//         }
//         middle = left + (right - left) / 2;
//         if (array[middle] >= array[left]) {
//             left = middle;
//         }
//         if (array[middle] <= array[right]) {
//             right = middle;
//         }
//     
//     return array[middle];
// }
;
