const { Kanban } = require('../models')


module.exports = class KanbanController {
  static async list (ctx) {
    const kanban = await Kanban.find();
    ctx.body = kanban
  }
}