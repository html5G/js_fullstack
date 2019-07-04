fullstack 全栈
Front Enginner
Backend  /api

restful api
  浏览器于服务器通信方式的一种设计风格

- restful的世界里一切皆资源
- url 来唯一定位资源的识别符
  /posts/:id/comments
- 加一条comment 怎么办
  {
      id: 2,
      body: '7777',
      postId: 1
  }
  /comments 设计好的URl  POST

- 设计有意义的URl
  资源 状态改变
  POST /comments 加一个评论 id: 2
  修改一下内容
    PUT /comments/2  定位资源  body: '888'
    
    操作       SQL方法    HTTP动词
    CREATE     INSERT      POST
    READ       SELECT      GET
    UPDATE     UPDATE      PUT/PATCH {body: '',postId: 1}
    PATCH 只要给一部分，修改一部分
    PUT将全部交给PUT，才可以修改
    DLETE      DELETE     DELETE
