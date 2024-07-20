import React from "react";

const Totale = (props) => {
  return (
    <>
      <p>
        {props.cartItem.map((index) => (
          <li>{index.name}</li>
        ))}
      </p>
    </>
  );
};

export default Totale;
