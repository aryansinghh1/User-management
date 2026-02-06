let users = [];

export const getAll = () => users;

export const create = (data) => {
  const user = {
    id: Date.now().toString(),
    ...data,
  };
  users.push(user);
  return user;
};

export const upate = (id, data) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) throw new Error("User not found");

  user[index] = { ...users[index], ...data };
  return users[index];
};

export const remove = (id) => {
  users = users.filter((u) => u.id !== id);
};
