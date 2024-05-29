//1
function shiftArrayToFront(X) {
    if (X.length === 0) return X;
    let lastElement = X[X.length - 1];
    for (let i = X.length - 1; i > 0; i--) {
        X[i] = X[i - 1];
    }
    X[0] = lastElement;
    return X;
}
let X = [2, 1, 6, 4, -7];
console.log(shiftArrayToFront(X));

//2
function removeNegatives(array) {
    if (array.length === 0) {
        return [];
    }
    if (array[0] < 0) {
        return removeNegatives(array.slice(1));
    } else {
        return [array[0]].concat(removeNegatives(array.slice(1)));
    }
}
let X = [1, -2, 4, 1];
console.log(removeNegatives(X));

//3
function selectionSort(IntArr) {
    let n = IntArr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
             if (IntArr[j] < IntArr[minIndex]) {
            minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = IntArr[i];
            IntArr[i] = IntArr[minIndex];
            IntArr[minIndex] = temp;
        }
    }
    return IntArr;
}
let IntArr = [2, 7, 1, -2];
console.log(selectionSort(IntArr));

//4

function largestOfEachSubArray(arr) {
    let result = [];
   for (let i = 0; i < arr.length; i++) {
        let subArr = arr[i];
        let max = subArr[0];
        for (let j = 1; j < subArr.length; j++) {
            if (subArr[j] > max) {
                max = subArr[j];
            }
        }
        result.push(max);
    }

    return result;
}
let arr = [
    [2, 7, 1, -2],
    [8, 3, 4, 10],
    [5, 12, 9, 6],
    [0, -3, 14, 2]
];
console.log(largestOfEachSubArray(arr));

//5
function largestOfEachSubArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let subArr = arr[i];
        let max = subArr[0];
        for (let j = 1; j < subArr.length; j++) {
            if (subArr[j] > max) {
                max = subArr[j];
            }
        }
        result.push(max);
    }
    return result;
}
let arr = [
    [2, 7, 1, -2],
    [8, 3, 4, 10],
    [5, 12, 9, 6],
    [0, -3, 14, 2]
];
console.log(largestOfEachSubArray(arr));