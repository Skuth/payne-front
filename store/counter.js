import { defineStore } from "pinia";

export const useCounterStorage = defineStore("counter", {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    getCount(state) {
      return state.count
    }
  },
  actions: {
    add(number = 1) {
      this.count += number
    },
    remove(number = 1) {
      this.count -= number
    }
  }
})