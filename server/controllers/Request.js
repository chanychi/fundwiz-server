class Request {
  constructor(model, data) {
    this.model = model;
    this.data = data;
  }

  async getData() {
    const modelData = await this.fetchData();

    if (this.isEmpty(modelData)) {
      await this.seedData(this.data);
    }

    const data = await this.fetchData();
    return data;
  }

  async fetchData() {
    return this.model.find();
  }

  async seedData(data) {
    await this.model.insertMany(data);
  }

  isEmpty(data) {
    return !data.length;
  }
}

module.exports = Request;