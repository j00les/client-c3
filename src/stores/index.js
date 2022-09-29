import { defineStore } from "pinia";
import axios from "axios";
const baseURL = "http://localhost:3000";

export const useIndexStore = defineStore("index", {
  state: () => ({
    isLogin: false,
  }),

  actions: {},
});
