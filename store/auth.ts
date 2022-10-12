import { defineStore } from "pinia";

type CreateAccountWithCredentialsType = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

type AuthWithCredentialsType = {
  email: string;
  password: string;
};

type RecoveryPasswordType = {
  email: string;
};

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
    getUser(state): User {
      return state.user;
    },
  },
  actions: {
    async createAccountWithCredentials(
      data: CreateAccountWithCredentialsType
    ): Promise<void> {
      await new Promise((r) => setTimeout(() => r(""), 4000));

      console.log(data);
    },
    async authWithCredentials(data: AuthWithCredentialsType): Promise<void> {
      await new Promise((r) => setTimeout(() => r(""), 4000));

      console.log(data);

      this.user = {
        name: "Flavio",
        lastName: "Gomes",
        fullName: "Flavio Gomes",
        avatar: "https://avatars.githubusercontent.com/u/25141448?v=4",
      };
    },
    async recoveryPassword(data: RecoveryPasswordType): Promise<boolean> {
      await new Promise((r) => setTimeout(() => r(""), 4000));

      console.log(data);

      return !!Math.floor(Math.random() * 2);
    },
  },
});
