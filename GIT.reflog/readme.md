git 
 hash码
 git reset --hard 回滚

 - 如果字符超过140字，返回false
 - 如果是空字符串，返回false
 - 以#开始
 - 每个单词都大写

 - 将单词字符串，变成单词数组 split(' ')
 - 数组里每个元素都是单词，首字母要大写
  map 遍历每个元素，使用箭头函数
 - 每个单词 charAt(0) 第一个字符toUpperCase()
 - 除了第一个字符后，其余呢？slice(1)

 