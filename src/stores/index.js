import { defineStore } from "pinia";
import axios from "../apis/axios-instance";

export const useIndexStore = defineStore("index", {
  state: () => ({
    isLoggedIn: false,
    products: [],
  }),

  actions: {
    async fetchProduct(query) {
      console.log(query);
      try {
        const { data } = await axios({
          method: "get",
          url: `/pub/products/${query ? query : ""}`,
        });

        console.log(data);
        this.products = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
