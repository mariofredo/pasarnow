const { hashSync, hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const request = require("supertest");
const app = require("../app");
const { User, ReadingList } = require("../models/index");

let access_token;
beforeAll(async () => {
  await User.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  const user = await User.create({
    username: "qwerty",
    email: "qwerty@mail.com",
    password: hashSync("qwerty", 10),
  });
  access_token = sign(
    {
      userId: user.id,
      userEmail: user.email,
    },
    process.env.SECRET_KEY
  );
  await ReadingList.bulkCreate([
    {
      userId: user.id,
      link: "LALALA",
      title: "YEYEYE",
    },
    {
      userId: user.id,
      link: "LELELE",
      title: "YEYEYE",
    },
    {
      userId: user.id,
      link: "LELELE",
      title: "YEYEYE",
    },
    {
      userId: user.id,
      link: "LELELE",
      title: "YEYEYE",
    },
  ]);
});

describe("ReadingList feature", () => {
  test("get all readinglist", (done) => {
    request(app)
      .get("/readinglist")
      .set("access_token", access_token)
      .end(function (err, res) {
        console.log(res);
        const dataProperties = Object.keys(res.body[0]);
        // console.log(dataProperties);
        expect(dataProperties).toContain("id");
        expect(dataProperties).toContain("userId");
        expect(dataProperties).toContain("link");
        expect(dataProperties).toContain("title");
        expect(dataProperties).toContain("createdAt");
        expect(dataProperties).toContain("updatedAt");
        expect(res.statusCode).toEqual(200);
        done();
      });
  });
  test("post readinglist", (done) => {
    request(app)
      .post("/readinglist")
      .send({
        link: "lalala",
        title: "YEYEYE",
      })
      .set("access_token", access_token)
      .end(function (err, res) {
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty(
          "message",
          "Readinglist created successfully"
        );
        done();
      });
  });
  test("failed post readinglist duplicate link", (done) => {
    request(app)
      .post("/readinglist")
      .send({
        link: "lalala",
        title: "YEYEYE",
      })
      .set("access_token", access_token)
      .end(function (err, res) {
        expect(res.statusCode).toEqual(409);
        expect(res.body).toHaveProperty("message", "Already exist");
        done();
      });
  });
  test("delete readinglist", (done) => {
    request(app)
      .delete("/readinglist/1")
      .set("access_token", access_token)
      .end(function (err, res) {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty(
          "message",
          "Readinglist deleted successfully"
        );
        done();
      });
  });
});
