const users = require("../models/userModel");

const listUsers = async (req, res) => {
  try {
    const user = await users.findAll();
    res.status(200).send({ ...user });
  } catch (err) {
    res.status(500).send(err);
  }
};

const createUser = async (req, res) => {
  console.log({ body: req.body });

  try {
    const data = { ...req.body };
    console.log(data);
    const user = await users.create(data);
    res.status(200).send({ ...user });
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await users.findByPk(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ error: `User with id ${req.params.id} not found!` });
    }
    await user.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};

const findUserByCPF = async (req, res) => {
  try {
    const cpf = req.params.cpf;
    const user = await users.findOne({ where: { cpf: cpf } });

    if (!user) {
      return res.status(404).json({ error: `User with CPF ${cpf} not found!` });
    }

    res.status(200).send({ ...user });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { listUsers, createUser, deleteUser, findUserByCPF };
