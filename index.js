// function compareTriplets(a, b) {
//     // Write your code here
//     var bobScore = 0;
//     var aliceScore = 0;
//     var alice = a.split(' ');
//     var bob = b.split(' ');
//     console.log(`Alice: ${alice}`);
//     console.log(`Bob: ${bob}`);
//     console.log(bob);
//     for(var i = 0; i < alice.length; i++){
//         console.log("Loop")
//         if(alice[i] > bob[i]){
//             console.log('Alice Scored');
//             aliceScore+=1;
            
//         } else if(alice[i] < bob[i]){
//             bobScore+=1;
//         }else{
//             bobScore = bobScore;
//         }
//     }
//     var score = `${aliceScore} ${bobScore}`;
//     return score;
// }
// console.log(compareTriplets('1 3 4', '3 4 5'));
// function aVeryBigSum(ar) {
//     // Write your co
//     var total = [0];
//     for(var i = 0; i < ar.length; i++){
//         total[0] += ar[i];
//     } 
//     return total[0];
// }
// console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))
function diagonalDifference(arr) {
    // Write your code here
    var leftToRight = 0;
    var RightToLeft = 0;
    for(var i = 0; i < arr[0]; i++){
        console.log(leftToRight)
        leftToRight += (arr[i+1][i]);
        RightToLeft += (arr[i+1][arr[0] - (i+1)])
        
    }
    var dif = Math.abs( leftToRight - RightToLeft);
    console.log(dif)    
    return dif;
}
// consol.log(diagonalDifference(
//     [ 3,
//         [11, 2, 4],
//         [4, 5, 6],
//         [10, 8, -12]]
//         ));
//         [ 3,
// [11, 2, 4],
// [4, 5, 6],
// [10, 8, -12]]

// [2,
// [6, 8],
// [-6, 9]]






// var str = "6 \n-4 3 -9 0 4 1";
// console.log(str);

// function plusMinus(str) {
//     // Write your code here
//     var elements = str.split('\n');
//     console.log(elements);
//     var data = str.split(' ');
//     var len = parseInt(data[0].split('')) ;
//     var elem = elements[1].split(' ');
//     console.log(len);
//     var plus = 0.00;
//     var minus = 0.00;
//     var zero = 0.00;
//     console.log(elem)
//     for(var i = 0; i < len; i++){
//         if(parseInt( elem[i]) < 0 ){
//             minus++;
//         }else if(parseInt( elem[i]) > 0){
//             plus++;
//         }else{
//             zero++;
//         }
//     }
//     console.log((plus / len).toPrecision(6));
//     console.log((minus / len).toPrecision(6));
//     console.log((zero / len).toPrecision(6));

// }
// plusMinus(str);