function countUniqueValues(arr) {

  if (arr.length === 0) return 0
  let left = 0
  let right = 1

  for (i=0; i < arr.length - 1; i++) {
    if(arr[left] === arr[right]) {
      right++
    } else {
      left++
      arr[left] = arr[right]
      right++
    } 
  }
  console.log(arr)
  return left + 1
}






console.log(countUniqueValues([1,2,2,5,7,7,99]))