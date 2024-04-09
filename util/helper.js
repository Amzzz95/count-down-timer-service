class Helper {
  success(res, data, status = 200) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(status).json({ status: 200, data: data });
  }
  error(res, error, status = 400) {
    res.status(status).json({ status, error });
  }
}

module.exports = new Helper();
