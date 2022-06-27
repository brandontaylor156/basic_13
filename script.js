function print1to255() {
    for (let i = 1; i <= 255; i++) {
        console.log(i);
    }
}

//print1to255();

function print0to255andSums() {
    var sum = 0;
    for (let i = 0; i <= 255; i++) {
        sum += i;
        console.log(i, sum);
    }
}

//print0to255andSums();

var myArr = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
function findAndPrintMax(arr) {
    var max = arr[0];    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

findAndPrintMax(myArr);