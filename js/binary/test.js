// let str = '123';
// let str2 = '456';
// console.log(+str + (+str2));
var str1 = '911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111';
var str2 = '222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222';

function addTwoNumbers(str1,str2) {
    //字符串不能相加
    //新的数据结构来打理[]存储每一位的相加，进位
    //字符串有index
    //join方法
    let carry = 0, //是否有进位
    l1 = str1.length, //数的长度
    l2 = str2.length, //数的长度
    arr =[];
   
    //像写加法
    //
    var max = Math.max(l1,l2);//最长的位数
    for (let i = l1 - 1,j = l2 - 1, n = max - 1; n >= 0; n--,i--,j--) {
        var sum = (+str1[i] ||0) + (+str2[j] ||0) + carry;
        if (sum >= 10) {
            carry = 1;
            arr.push(sum - 10);
        } else {
            carry = 0;
            arr.push(sum);
        }
    }
    if( carry > 0) 
        arr.push(carry)
      return arr.reverse().join('');
}
console.log(addTwoNumbers(str1,str2))
