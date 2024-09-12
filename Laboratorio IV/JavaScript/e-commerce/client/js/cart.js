const modalOverlay = document.getElementById("modal-overlay");
const modalContainer = document.getElementById("modal-container");

const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

const displayCart = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "block";
  modalOverlay.style.display = "block";
  // Modal Header
  const modalHeader = document.createElement("div");

  const modalClose = document.createElement("div");
  modalClose.innerText = "❌";
  modalClose.className = "modal-close";
  modalHeader.append(modalClose);

  modalClose.addEventListener("click", () => {
    modalContainer.style.display = "none";
    modalOverlay.style.display = "none";
  });

  const modalTitle = document.createElement("div");
  modalTitle.innerText = "Carrito";
  modalTitle.className = "modal-title";
  modalHeader.append(modalTitle);

  modalContainer.append(modalHeader);

  if(cart.length>0){

  // Modal Body
  cart.forEach((productos) => {
    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    modalBody.innerHTML = `
        <div class="product">
                <img class="product-img" src="${productos.img}"/>
                <div class="product-info">
                    <h4>${productos.productName}</h4>
                </div>
            <div class="quantity">
                <span class="quantity-btn-decrese">-</span>
                <span class="quantity-input">${productos.quanty}</span>
                <span class="quantity-btn-increse">+</span>
            </div>
                <div class="price">${productos.price * productos.quanty} $</div>
                <div class="delete-product">❌</div>
        </div>
        `;
    modalContainer.append(modalBody);

    // Funcion para disminuir la cantidad de productos por el boton -
    const decrese = modalBody.querySelector(".quantity-btn-decrese");
    decrese.addEventListener("click", () => {
      if (productos.quanty !== 1) {
        productos.quanty--;
        displayCart();
        displayCartCounter();
      }
    });

    // Funcion para aumentar la cantidad de productos por el boton +
    const increse = modalBody.querySelector(".quantity-btn-increse");
    increse.addEventListener("click", () => {
      productos.quanty++;
      displayCart();
      displayCartCounter();
    });

    // Funcion para eliminar el producto por el boton ❌
    const deleteProducto = modalBody.querySelector(".delete-product");

    deleteProducto.addEventListener("click", () => {
      deleteCartProduct(productos.id);
    });
  });

  // modal footer
  const total = cart.reduce((acc, el) =>
    acc + el.price * el.quanty, 0
  );

  const modalFooter = document.createElement("div");
  modalFooter.className = "modal-footer";
  modalFooter.innerHTML = `
    <div class="total-price"> Total $ ${total}.00</div>
    `;

  modalContainer.append(modalFooter);

  } else {
    const modalText = document.createElement("h2");
    modalText.className = "modal-body";
    modalText.innerHTML = "Tu carrito está vacío";
    modalContainer.append(modalText);
  }
};

cartBtn.addEventListener("click", displayCart);

const deleteCartProduct = (id) => {
  const foundId = cart.findIndex((element) => element.id === id);
  cart.splice(foundId, 1);
  displayCart();
  displayCartCounter();
};

const displayCartCounter = () => {
  const cartLength = cart.reduce((acc, el) => acc + el.quanty, 0);
  if (cartLength > 0) {
    cartCounter.style.display = "block";
    cartCounter.innerText = cartLength;
  } else {
    cartCounter.style.display = "none";
  }
};
