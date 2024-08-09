export const initialState = {
  basket: [
    {
      id: "1234",
      title:
        "Apple iPad (10th generation): with A14 Bionic chip, 27.69 cm (10.9″) Liquid Retina display, 64GB, Wi-Fi 6, 12MP front/12MP back camera, Touch ID, all-day battery life – Blue",
      price: 30900,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/61uA2UVnYWL._SX679_.jpg",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action); // Remember to remove or wrap in a dev check for production

  switch (action.type) {
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
