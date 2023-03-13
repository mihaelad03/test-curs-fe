const cart = {
  renderCartProducts() {
    const container = document.getElementById("cart-container");
    const cartCollection =
      localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"));

    if (cartCollection && cartCollection.products.length) {
      let totalCost = 0;
      cartCollection.products.forEach((entry) => {
        const el = document.createElement("div");
        const cost = entry.product.pret * entry.quantity;
        el.innerHTML = `
                    <p>${entry.product.name} - Cantitate: ${entry.quantity} - Cost: ${cost} RON</p>
                `;

        totalCost += cost;
        container.appendChild(el);
      });

      const totalElement = document.createElement("div");
      totalElement.innerHTML = `<hr /><p><b>Total:</b> ${totalCost} RON</p>`;
      container.appendChild(totalElement);

      const golesteBtn = document.createElement("button");
      golesteBtn.innerText = "Goleste Cos";
      golesteBtn.addEventListener("click", (ev) => {
        this.emptyCart();
        window.location.reload();
      });
      container.appendChild(golesteBtn);
    } else {
      container.innerHTML = "Nu aveti nici un produs in cos.";
    }
  },
  submit() {
    console.log("submited");
  },

  emptyCart() {
    localStorage.removeItem("cart");
  },
};

window.cart = cart;
