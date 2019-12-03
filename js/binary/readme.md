二分查找 binary_search
  加速查找的前提必须有序
  有序数组，折半排序，可以将查找得到时间复杂度从n => log2N
  [1,2,3,10,8,9].sort()
  [1,2,3,6,7,10] 6 =>时间复杂度为1

  javascript heap out of memory
  什么会出问题呢？
  1亿左右的大数相加 CPU ？
  arr[] 物理空间 下标的引用
  0 -1亿 for 没有问题
  mid = (min + max) / 2

- 内存问题
  LRU 管理相关
  Binary Search 内存的优化
  溢出
 
- 大数相加
  Infinity 怎么来确定一个数呢？
  用数值类型都无法表达了怎么办？
  字符串化