const dayjs = require("dayjs");

module.exports = {
  formatTime: (time) => dayjs(time * 1000).format("YYYY-MM-DD HH:mm:ss"),
};
