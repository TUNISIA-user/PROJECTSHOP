import React from "react";
import { Row, Col } from "react-bootstrap";
import storeItems from "../data/storeItems.json";
import StoreItems from "./StoreItems";

const Store = () => {
  return (
    <>
      <h1>STORE 2</h1>
      <Row  >
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItems
              id={item.id}
              price={item.price}
              name={item.name}
              imgurl={item.imgUrl}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
