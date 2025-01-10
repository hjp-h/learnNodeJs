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

