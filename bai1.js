// bài 1. Sử dụng vòng lặp, tính tổng giá trị các phần tử trong mảng.
//     Input: [0, 5, 4, 2, 8]
// Output: 19

function sumArray(){

    var num=[0,5,4,2,8]
    var sum=0
    for (var i = 0 ; i < num.length ; i ++){
        sum +=num[i];
    }
    console.log(sum);
}
    sumArray()