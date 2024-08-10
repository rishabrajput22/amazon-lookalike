export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action); // Remember to remove or wrap in a dev check for production

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // Find the index of the item to remove
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1); // Remove the item if found
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
