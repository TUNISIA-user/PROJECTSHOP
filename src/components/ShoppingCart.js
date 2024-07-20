import React, { useState, useEffect } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CardItem from "./CardItem";
import Totale from "./TotaleCurrency";
const ShoppingCart = ({ isOpen }) => {
  const { cartItem, closeCart } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={4}>
          {cartItem.map((item) => (
            <CardItem key={item.id} {...item} />
          ))}
        </Stack>

        <div className="Price">
          <Totale cartItem={cartItem} />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
