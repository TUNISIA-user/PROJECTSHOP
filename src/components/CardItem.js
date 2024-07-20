import React from "react";
import { Stack, Button } from "react-bootstrap";
import storeItems from "../data/storeItems.json";

import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "./foramtCurrency";

const CardItem = ({ id, quantity }) => {
  const { removeItemFromCart } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id); // Correct the equality check
  if (item == null) return null;

  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
        <img
          src={item.imgUrl}
          alt="cart-img"
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          {item.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x {quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </div>
        <div>
          <h2> {formatCurrency(item.price * quantity)} </h2>{" "}
        </div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeItemFromCart(id)}
        >
          &times;
        </Button>
      </Stack>
    </>
  );
};

export default CardItem;
