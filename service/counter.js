const Counter = require("../modal/counter");

class CounterService {
  async create(data) {
    try {
      const insertObj = new Counter(data);
      const response = await insertObj.save();
      console.log(`counter created: ${response._id}`);
      return response._id;
    } catch (err) {
      console.error(err);
      throw Error(err.message);
    }
  }

  async read() {
    try {
      const response = await Counter.find().sort({ createdTime: -1 });
      console.log(`fetched countdowns count: ${response.length}`);
      return response;
    } catch (err) {
      console.error(`error in read countdown service: ${err.message}`);
      throw Error(err);
    }
  }

  async readActiveCounter() {
    try {
      const response = await Counter.find({
        $and: [
          { deleteDate: { $exists: false } }, // Entries without a deleted time
        ],
      }).sort({ createdTime: -1 });
      console.log(`fetched countdowns count: ${response.length}`);
      return response;
    } catch (err) {
      console.error(`error in read countdown service: ${err.message}`);
      throw Error(err);
    }
  }

  async update(data) {
    const { id, activeTimeInSeconds, deletionDate } = data;
    try {
      const response = await Counter.findByIdAndUpdate(
        id,
        {
          activeDuration: activeTimeInSeconds,
          deleteDate: deletionDate,
        },
        { new: true }
      );
      console.log("response", JSON.stringify(response));
      return response;
    } catch (err) {
      console.error(`error in update counter service: ${err.message}`);
      throw Error(err);
    }
  }
}

module.exports = new CounterService();
