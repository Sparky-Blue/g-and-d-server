const app = require("../app");
const request = require("supertest")(app);
const { expect } = require("chai");

describe("/api", () => {
  describe("/route1", () => {
    it("GET returns status 200 and an object of ....", () => {
      return request
        .get("/api/route1")
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an("object");
          expect(res.body.array).to.be.an("array");
          expect(res.body.array[0].value).to.equal("value");
        });
    });
  });
});