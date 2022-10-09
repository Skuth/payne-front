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
    authWithCredentials(email, password) {
      this.user = {
        name: "Flavio",
        lastName: "Gomes",
        fullName: "Flavio Gomes",
        avatar: "https://avatars.githubusercontent.com/u/25141448?v=4",
      };
    },
  },
});
