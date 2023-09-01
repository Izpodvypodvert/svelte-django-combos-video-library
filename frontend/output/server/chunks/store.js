import { w as writable } from "./index.js";
const checkResponse = async (res) => {
  if (res.ok) {
    return await res.json();
  }
  return await res.json().then((err) => Promise.reject(err));
};
const createState = () => {
  const { subscribe, set, update } = writable({
    account: null,
    alert: null
  });
  return {
    subscribe,
    signup: async (email, password, username) => {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          username
        })
      });
      const user = await checkResponse(res);
      return user;
    },
    login: async (email, password) => {
      const res = await fetch(
        "http://localhost:8000/api/v1/token/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password
          })
        }
      );
      const token = await checkResponse(res);
      if (token.auth_token) {
        localStorage.setItem("auth_token", token.auth_token);
        return token;
      }
      return null;
    },
    logout: async () => {
      const token = localStorage.getItem("auth_token");
      fetch("http://localhost:8000/api/v1/token/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${token}`
        }
      }).catch((error) => console.log(error));
    },
    alert: async (alert) => update((n) => {
      n.alert = alert;
      return n;
    }),
    getUser: async () => {
      const res = await fetch(`http://localhost:8000/api/v1/users/me/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${localStorage.getItem(
            "auth_token"
          )}`
        }
      });
      const user = await checkResponse(res);
      return user;
    },
    init: async (account = null) => {
      return set({ account, alert: null });
    }
  };
};
const state = createState();
export {
  state as s
};
