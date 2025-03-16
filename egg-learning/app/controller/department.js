const { sendResponse } = require("../../utils/responseHelper")

// 拿到父类Controller
const Controller = require("egg").Controller

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class DepartmentController extends Controller {
  async index() {
    const { ctx } = this
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset)
    }
    const allDepartment = await ctx.model.Department.findAll(query)
    sendResponse(ctx, allDepartment, 'Department found', 200)
  }

  async show() {
    const ctx = this.ctx;
    const { id } = ctx.params;
    const user = await ctx.model.Department.findByPk(id);
    if (!user) {
      sendResponse(ctx, null, 'user not found', 200)
    } else {
      sendResponse(ctx, user, 'user found', 200)
    }
  }

  async create() {
    const ctx = this.ctx;
    const { name, age } = ctx.request.body;
    const user = await ctx.model.Department.create({ name, age })
    sendResponse(ctx, user, 'user created', 201)
  }

  async update() {
    const ctx = this.ctx;
    const { id } = ctx.params;
    const user = await ctx.model.Department.findByPk(id);
    if (!user) {
      sendResponse(ctx, null, 'user not found', 200)
      return
    }
    const { name, age } = ctx.request.body;
    await user.update({ name, age })
    sendResponse(ctx, user, 'update user success', 200)
  }

  async destroy() {
    const ctx = this.ctx;
    const { id } = ctx.params;
    const user = await ctx.model.Department.findByPk(id);
    await user.destroy();
    sendResponse(ctx, null, 'user deleted', 204)
  }
}

module.exports = DepartmentController