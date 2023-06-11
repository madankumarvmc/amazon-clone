export const initialState = {
  basket: [],
  total: 0,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const newItem = action.item;
      const newBasket = [...state.basket, newItem];
      const newTotal = state.total + newItem.price; // Calculate the new total amount

      return {
        ...state,
        basket: newBasket,
        total: newTotal, // Update the total amount in the state
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newRemovalBasket = [...state.basket];
      if (index >= 0) {
        newRemovalBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the Basket`
        );
      }
      return {
        ...state,
        basket: newRemovalBasket,
      };

    default:
      return state;
  }
};

export default reducer;
