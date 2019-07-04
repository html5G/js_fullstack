const Hapi = require('hapi');

const server = new Hapi.Server();
const routeHelloHapi = require('./routes/hello-hapi');
const config = require('./config');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const routesShop = require('./routes/shops');
const routesOrders =require('./routes/orders');
// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
    await server.register([
        ...pluginHapiSwagger
    ]);
  server.route([
    // 创建一个简单的 hello hapi 接口
    ...routeHelloHapi,
    ...routesShop,
    ...routesOrders
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
