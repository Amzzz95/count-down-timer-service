const db = {
  url: process.env.dbURL,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

module.exports = db;
