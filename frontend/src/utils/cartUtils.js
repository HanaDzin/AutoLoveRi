export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  export const updateCart = (state) => {
    // izracun cijene
    state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
        //cijena isporuke --> ako je vozilo skuplje od 50k nema, inace 1k
      state.shippingPrice = addDecimals(state.itemsPrice > 50000 ? 0 : 1000);

      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice)).toFixed(2);

      // Save the cart to localStorage
      localStorage.setItem('cart', JSON.stringify(state));

      return state;
  }