'use strict';
const env = 'dev'

const defaultAlerMessage = '傻了吧，出不来吧，换个手机试试！';

const defaultShareText = {
    en:"iKcamp听力四级！"
}

const defaultBarTitle = {
    en:'iKcamp学习！'
}

const defaultImg = {
    articleImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png',
    coverImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
};

let core ={
    env:env,
    defaultAlerMessage:defaultAlerMessage,
    defaultImg:defaultImg,
    defaultShareText:defaultShareText['en'],
    defaultBarTitle:defaultBarTitle['en'],
    isDev:env === 'dev',
    isProduction:env === 'production'
}

export default core; 