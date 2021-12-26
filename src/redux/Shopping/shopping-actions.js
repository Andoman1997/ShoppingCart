import * as actionTypes from "./shopping-types";

export const removeCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_CART,
    payload: {
      id: itemID,
    },
  };
};

export const filterCart = (itemID) => {
  return {
    type: actionTypes.FILTER_CART,
    payload: {
      id: itemID,
    },
  };
};


export const likedCart = (itemID) => {
  return {
    type: actionTypes.LIKED_CART,
    payload: {
      id: itemID,
    }
  }
};