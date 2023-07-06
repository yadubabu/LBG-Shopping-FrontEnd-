export const setAllUsers = (users) => {
  return {
    type: "SET_ALL_USERS",
    payload: users,
  };
};
export const setUser = (user) => {
  console.log(user);
  return {
    type: "GET_USER",
    payload: user,
  };
};
