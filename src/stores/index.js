import { defineStore } from "pinia";
import axios from "../apis/axios-instance";

export const useIndexStore = defineStore("index", {
  state: () => ({
    isLoggedIn: false,
    products: [],
  }),

  actions: {
    async fetchProduct(query) {
      try {
        const { data } = await axios({
          method: "get",
          url: `/pub/products/${query ? query : ""}`,
        });

        this.products = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
