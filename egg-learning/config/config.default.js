exports.keys = '1234567890';
// 添加view配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};
exports.robot = {
  ua: [
    /Baiduspider/i,
  ],
};

// 配置中间件
exports.middleware = ['robot'];

// 配置数据库
exports.sequelize = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'testDb',
  username: 'root',
  password: 'hjp0516@',
  timezone: '+08:00',
  define: {
    timestamps: true,
    timezone: '+08:00',
    createdAt: 'created_at',// 将默认的 createdAt 映射到 created_at
    updatedAt: 'updated_at',// 将默认的 updatedAt 映射到 updated_at
  },
  pool: {
    max: 5,        // 连接池中最大连接数
    min: 0,        // 连接池中最小连接数
    idle: 10000,   // 如果一个连接池 10 秒内没有被使用，则释放
    acquire: 30000 // 连接池尝试获取连接的最长时间（毫秒）
  }
};
