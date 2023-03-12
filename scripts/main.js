import service from "./service.js";

const main = {
  loadPaineProducts() {
    const prod = service.getPaineProducts();
    console.log(prod);
  },

  loadPrajituriProducts() {
    const prod = service.getPrajituriProducts();
    console.log(prod);
  },

  loadProductCategories() {
    return service.loadProductCategories();
  },

  loadProductByCategory() {
    return service.loadProductByCategory();
  },

  loadProductDetails() {
    return service.loadProductDetails();
  },
};

window.main = main;
