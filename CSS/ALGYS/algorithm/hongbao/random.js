// let ran_num = Math.random();
// 函数表达式
const hognbao =(total,num ) =>{
 const arr=[];//定义金额的数组
 //定义计算量
 let restAmout = total,
 restNum =num;
 for(let i=0;i <num-1;i++){
     //前n-1随机
     let amount = parseFloat( Math.random()*((restAmout/restNum)*2-0)).toFixed(2);
     restAmout -= amount;
     restNum--;
     arr.push(amount)
 }
 arr.push(restAmout.toFixed(2));
 return arr;
}
console.log(hognbao(25,2));//25是金钱，2是人数