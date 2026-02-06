let users = [];

export const getAll = (filter = {}) => {
  if (Object.keys(filter).length === 0) {
    return users;
  }

  return users.filter((user) => {
    return Object.keys(filter).every(
      (key) => user[key] === filter[key]
    );
  });
};

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

  users[index] = { ...users[index], ...data };
  return users[index];
};

export const remove = (id) => {
  users = users.filter((u) => u.id !== id);
};
