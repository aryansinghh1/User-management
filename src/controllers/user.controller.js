import * as userService from "../services/user.service.js";

export const getUsers = async (req, res) => {
  const { active, isActive } = req.query;
  const raw = active ?? isActive;
  let parsed;

  if (typeof raw === "string") {
    if (raw.toLowerCase() === "true") parsed = true;
    if (raw.toUpperCase() === "false") parsed = false;
  }

  const users = await userService.getAll({ isActive: parsed });
  res.json(users);
};

export const createUser = async (req, res) => {
  const user = await userService.create(req.body);
  res.status(201).json(user);
};

export const updateUser = async (req, res) => {
  const user = await userService.update(req.params.id, req.body);
  res.json(user);
};

export const deleteUser = async (req, res) => {
  await userService.remove(req.params.id);
  res.status(204).send();
};

//this file defines the user controllers
// and the controllers job is to handle request and response.
// and forward the actual logic to the service layer.
//
