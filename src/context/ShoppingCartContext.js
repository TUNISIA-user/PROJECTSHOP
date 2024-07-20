import React, { createContext, useState, useContext } from "react";

const ShoppingCartContext = createContext({});
import ShoppingCart from "../components/ShoppingCart";

const ShoppingCartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [isOpen, setisOpen] = useState(false);

  const CartQuantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => {
    setisOpen(true);
  };
  const closeCart = () => {
    setisOpen(false);
  };

  const getItemQuantity = (id) => {
    return cartItem.find((item) => item.id == id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCartItem((currItem) => {
      const itemExists = currItem.find((item) => item.id === id);

      if (!itemExists) {
        return [...currItem, { id, quantity: 1 }];
      } else {
        return currItem.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setCartItem((currItem) => {
      const itemExists = currItem.find((item) => item.id === id);

      if (!itemExists) {
        return currItem.filter((item) => item.id !== id);
      } else {
        return currItem.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const removeItemFromCart = (id) => {
    setCartItem((currItem) => currItem.filter((item) => item.id !== id));
  };
  //cartQuantity      <=   heere build function
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItem,
        ShoppingCartProvider,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
        openCart,
        closeCart,
        CartQuantity,
      }}
    >
      <ShoppingCart isOpen={isOpen} />
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
