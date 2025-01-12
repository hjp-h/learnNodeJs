const { sendResponse } = require('../../utils/responseHelper');

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello World';
  }
  async getCsrfToken() {
    console.log(this.ctx.csrf)
    sendResponse(this.ctx, this.ctx.csrf, 'csrf token', 200)
  }
}
module.exports = HomeController;
