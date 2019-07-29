- 项目要经过开发，测试，上线
  env cross-env
  运维

- Dockerfile文件
  FROM 拉取镜像来到本地 跨机器安装时很方便
  WOKDIR /app 设置镜像中的目录
  COPY package.json /app 拷贝文件
  RUM cnpm i 安装node包
  COPY . /app
  EXPOSE 8080
  CMD node index.js
- 根据Docherfile 构建间构建镜像 
  docker build -t image-name .
  docker images
  docker container run -p 4001:8080 first-docker-node