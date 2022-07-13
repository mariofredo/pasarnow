const { hashSync, hash } = require("bcryptjs");
const request = require("supertest");
const app = require("../app");
const { User } = require("../models/index");

beforeAll(async () => {
  await User.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await User.create({
    username: "zxcvb",
    email: "zxcvb@mail.com",
    password: hashSync("zxcvb", 10),
  });
});

describe("User feature", () => {
  test("login success with correct parameter", (done) => {
    request(app)
      .post("/users/login")
      .send({
        email: "zxcvb@mail.com",
        password: "zxcvb",
      })
      .end(function (err, res) {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("access_token");
        expect(res.body.access_token).toEqual(expect.any(String));
        done();
      });
  });
  test("login failed with invalid password", (done) => {
    request(app)
      .post("/users/login")
      .send({
        email: "zxcvb@mail.com",
        password: "qwerty",
      })
      .end(function (err, res) {
        expect(res.statusCode).toEqual(401);
        expect(res.body.message).toEqual("Invalid Email or Password");
        done();
      });
  });
  test("login failed with invalid email", (done) => {
    request(app)
      .post("/users/login")
      .send({
        email: "zxcvb@email.com",
        password: "zxcvb",
      })
      .end(function (err, res) {
        expect(res.statusCode).toEqual(401);
        expect(res.body.message).toEqual("Invalid Email or Password");
        done();
      });
  });
  test("register success with correct input", (done) => {
    request(app)
      .post("/users/register")
      .send({
        username: "asdfg",
        email: "asdfg@mail.com",
        password: "asdfg",
      })
      .end(function (err, res) {
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("message", "Register success");
        done();
      });
  });
  test("register failed with null email", (done) => {
    request(app)
      .post("/users/register")
      .send({
        username: "asdfg",
        password: "asdfg",
      })
      .end(function (err, res) {
        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual("Email cannot be null");
        done();
      });
  });
  test("register failed with null password", (done) => {
    request(app)
      .post("/users/register")
      .send({
        username: "asdfg",
        email: "asdfg@mail.com",
      })
      .end(function (err, res) {
        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual("Password cannot be null");
        done();
      });
  });
  test("failed register with invalid email format", (done) => {
    request(app)
      .post("/users/register")
      .send({
        username: "asdfg",
        email: "asdfgmail.com",
        password: "asdfg",
      })
      .end(function (err, res) {
        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual("Invalid email format");
        done();
      });
  });
  test("failed register with email that already been used", (done) => {
    request(app)
      .post("/users/register")
      .send({
        username: "asdfg",
        email: "asdfg@mail.com",
        password: "asdfg",
      })
      .end(function (err, res) {
        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual("Email must be unique");
        done();
      });
  });
});
