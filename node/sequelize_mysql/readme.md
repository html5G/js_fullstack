- sequelize 数据库脚手架
  mysql2 数据库驱动
  sequelize orm工具 table -> object
  对底层的sql API 化  model
  sequelize-cli 命令行工具

- config
   ./node_modules/.bin/sequelize init //初始化，构建目录
   ./node_modules/.bin/sequelize db:create 创建数据库
   ./node_modules/.bin/sequelize migration:create --name create-shops-tabel  //添加表或者迁移文件   建表或者删除表
   ./node_modules/.bin/sequelize db:migrate  执行迁移

    ./node_modules/.bin/sequelize seed:create --name init-shops 初始化
    ./node_modules/.bin/sequelize db:seed:all 插入数据
    select * from shops; 查询数据