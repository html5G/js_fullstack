 递归 f(n)=!(fn-1) 
 边界

- 动态规划(Dynamic Programing)是常考算法，上楼梯问题
   三个术语：
    ①最优子结构
    ②边界 
    ③状态转移公式 f(n)=!f(n-1)
- 楼梯台阶有12阶， 一步只能走1阶或走2阶，请问有多少走法？
 最优子结构 f(12)
  f(12) f(11) f(10)
 边界 1台阶   1种
      2台阶   2种
 状态转移公式 f(12)=f(11)+f(10)
 
 
