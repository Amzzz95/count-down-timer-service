const db = {
  url: process.env.dbURL,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};

module.exports = db;
