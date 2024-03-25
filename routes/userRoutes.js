const { Router } = require("express");
const {
  listUsers,
  createUser,
  deleteUser,
  findUserByCPF,
} = require("../controllers/userController");
const userRoute = Router();

userRoute.get("/", listUsers);
userRoute.post("/", createUser);
userRoute.delete("/:id", deleteUser);
userRoute.get("/cpf/:cpf", findUserByCPF);

module.exports = userRoute;
