// 缓存计算结果，不要重复计算，将计算的结果保存。
let cache = {};
// key string <= arguments 类数组

function mult(...args) {
//   参数数量是不定的
  let a = 1;
  let key = Array.prototype.join.call(arguments,',');
//   args 相关 数组=> string key
  if (cache[key]) {       
      console.log('从缓存中取');
      return cache[key];
  }
  for (var i = 0, l = args.length;i < l;i++)
  {
     a = a*arguments[i];
  }
 cache[key] = a;
 return a;
} 
mult(1,2,3);
console.log(mult(1,2,3));
console.log(mult(1,2,3));
console.log(mult(1,2,3));