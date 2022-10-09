import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
  state: () => {
    return {
      user: {},
    };
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    emailLogin(email, password) {
      console.log({
        email,
        password,
      });

      this.user = {
        name: "Flavio",
        lastName: "Gomes",
        fullName: "Flavio Gomes",
      };
    },
  },
});
