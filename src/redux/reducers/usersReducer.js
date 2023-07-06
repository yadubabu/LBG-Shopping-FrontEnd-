const initialValue = {
  users: [],
};

export const usersReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case "SET_ALL_USERS":
      return payload;
    default:
      return state;
  }
};

// export default userReducer;
