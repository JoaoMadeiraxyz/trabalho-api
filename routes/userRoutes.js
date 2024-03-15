const { Router } = require("express");
const {
  listUsers,
  createUser,
  deleteUser,
} = require("../controllers/userController");
const userRoute = Router();

userRoute.get("/", listUsers);
userRoute.post("/", createUser);
userRoute.delete("/:id", deleteUser);

module.exports = userRoute;
