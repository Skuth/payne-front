import { defineStore } from "pinia";

export interface User {
  name: string;
  lastName: string;
  fullName: string;
  avatar: string;
}

export const useAuth = defineStore("auth", {
  state: () => {
    return {
      user: {} as User,
    };
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    authWithCredentials(_email: string, _password: string) {
      this.user = {
        name: "Flavio",
        lastName: "Gomes",
        fullName: "Flavio Gomes",
        avatar: "https://avatars.githubusercontent.com/u/25141448?v=4",
      };
    },
  },
});
