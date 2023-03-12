import { products } from "./data.js";

const service = {
  getPaineProducts() {
    return products.filter((x) => x.categorie === "Paine");
  },
  getPrajituriProducts() {
    return products.filter((x) => x.categorie === "Prajituri");
  },
};

export default service;
