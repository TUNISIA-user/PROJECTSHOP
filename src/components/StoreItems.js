import React from "react";
import { Card, Button } from "react-bootstrap";
import foramtCurrency from "./foramtCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const StoreItems = (props) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();

  const Counter_Quantity_Proudct = getItemQuantity(props.id);

  return (
    <Card>
      <Card.Img
        src={props.imgurl}
        variant="top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-tems-baseline">
          <span className="fs-2">{props.name}</span>
          <span className="text-muted me-2">{foramtCurrency(props.price)}</span>
        </Card.Title>

        <div className="mt-auto">
          {Counter_Quantity_Proudct == 0 ? (
            <Button
              ClassName=" w-100"
              onClick={() => increaseCartQuantity(props.id)}
            >
              Add to Card
            </Button>
          ) : (
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center">
                <Button onClick={() => decreaseCartQuantity(props.id)}>
                  -
                </Button>
                <span className="fs-3">{Counter_Quantity_Proudct} in cart</span>
                <Button onClick={() => increaseCartQuantity(props.id)}>
                  +
                </Button>
                <br /> <br />
              </div>
              <br />
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItemFromCart(props.id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItems;
