
exports.login = async (req,res) => {
    console.log(req.body)
    // 参数的验证、抽象模块
    const msg = req.checkBody({
        username: {
            required: '用户名不能为空'
        },
        password: {
            required: '密码不能为空'
        },
        code: {
            required: '验证码不能为空'
        }
    })
    console.log(msg)
    if (msg) {
        // 出错处理
        return res.handleError(msg)
    }
    // if (req.body.username === '') {
    //     res.json({
    //         mes: '用户名不能为空'
    //     })
    // }
    // await model.query
    res.json({
        page: '登录'
    })
}