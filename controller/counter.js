const baseHelper = require("../util/helper");
const counterService = require("../service/counter");

class CounterController {
  constructor() {}

  async create(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
      const data = req.body;
      const response = await counterService.create(data);
      return baseHelper.success(res, response);
    } catch (error) {
      return baseHelper.error(res, error);
    }
  }

  async read(req, res) {
    try {
      const response = await counterService.read();
      return baseHelper.success(res, response);
    } catch (error) {
      return baseHelper.error(res, error);
    }
  }

  async readActiveCounter(req, res) {
    try {
      const response = await counterService.readActiveCounter();
      return baseHelper.success(res, response);
    } catch (error) {
      return baseHelper.error(res, error);
    }
  }

  async update(req, res) {
    try {
      const data = req.body;
      const response = await counterService.update(data);
      return baseHelper.success(res, response);
    } catch (error) {
      return baseHelper.error(res, error);
    }
  }
}

module.exports = new CounterController();
