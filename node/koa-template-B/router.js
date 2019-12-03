/**
 * 管理 router
 */

const Router = require('koa-router');
const router = new Router();

const user = {
    name: '1111',
    posts: [
        {
            id: 0,
            title: '小程序指南'
        },
        {
            id: 1,
            title: 'Vue指南'
        }
    ]
}

router.get('/user', async (ctx) => {
    await ctx.render('user', { user });
})

const postsDetail = [
    {
        id: 0,
        content: '89s79s9sa45ascsacsacsacosaasviasvoajs'
    },
    {
        id: 1,
        content: '<strong>经发局号号是U币放你那发动机能</strong>'
    }
]

router.get('/posts', async (ctx) => {
    const { id } = ctx.query;
    const post = postsDetail.find(postItem => postItem.id == id);
    await ctx.render('post', { post });
})

// 浏览器地址栏
router.get('/create', async (ctx) => {
    await ctx.render('create');
})

//submit method = 'post'
router.post('/create',async (ctx) => {
  console.log(ctx.request.body);
  const {title,content} = ctx.request.body;
  let id = Date.now();
  user.posts.push({
      id,
      title
  })
  postsDetail.push({
      id,
      content
  })
  ctx.redirect('/user');
})

module.exports = router