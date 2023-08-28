function sort(arr) {

    if(arr.length < 2) {
        return arr;
    }

    if (arr.length === 2) {
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);

    const leftSortedArray = sort(leftArray)
    const rightSortedArray = sort(rightArray)

    const mergedArr = [];
    let leftArrIndex = 0;
    let rightArrIndex = 0

    while (leftArrIndex < leftSortedArray.length || rightArrIndex < rightSortedArray.length) {

        console.log(mergedArr, 'merge array')
        console.log(leftSortedArray, rightSortedArray, 'these are the two arrays')

        if (leftArrIndex >= leftSortedArray.length || leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]) {

            console.log(leftSortedArray, rightSortedArray, leftArrIndex, rightArrIndex, 'right element added but these are the two arrays being looked at')
            console.log(rightSortedArray[rightArrIndex], 'this is being pushed R')
            mergedArr.push(rightSortedArray[rightArrIndex]);
            rightArrIndex++;
            
        } else {
            console.log(leftSortedArray, rightSortedArray, 'left element added but these are the two arrays being looked at')
            console.log(leftSortedArray[leftArrIndex], 'this is being pushed L')
            mergedArr.push(leftSortedArray[leftArrIndex]);
            leftArrIndex++;
        }
    }

    console.log(mergedArr, 'merge array')

    return mergedArr

}

const sortedArray = sort([-10, 33, 5, 10, 99]);
console.log(sortedArray);