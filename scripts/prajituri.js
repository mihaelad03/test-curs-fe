import service from "./service.js";

const praji = {
  loadAndRendeR() {
    const prajituri = service.getPrajituriProducts();
    const container = document.getElementById("container-prajituri");

    prajituri.forEach((prajitura) => {
      const el = document.createElement("div");
      el.classList.add("Caramel");
      el.innerHTML = `
      <h4>${prajitura.name}</h4>
      <img src="${prajitura.img}" height="200px" width="200" />
      <p>Eclere cu ciocolata, ness sau caramel.</p>
      <p>Cost- ${prajitura.pret} Ron/Bucata;</p>
    `;

      const btn = document.createElement("button");
      btn.innerText = "Adauga in Cos";
      btn.addEventListener("click", (ev) => {
        this.addToCart(prajitura);
      });
      el.appendChild(btn);

      container.appendChild(el);
    });
  },

  addToCart(product) {
    console.log(product);
    let cart =
      localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {};
      cart.products = [];
    }

    const checkProduct = cart.products.find(
      (x) => x.product.name === product.name
    );
    if (checkProduct) {
      checkProduct.quantity++;
    } else {
      cart.products.push({ product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  },
};

window.praji = praji;
export default praji;
