export const LoginStart = (userAuth) => ({
  type: "LOGIN_START",
});

export const LoginSuccessful = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const BadLogin = () => ({
  type: "BAD_LOGIN",
});

export const Logout = () => ({
  type: "LOGOUT",
});
