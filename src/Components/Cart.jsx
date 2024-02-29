import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const items = useSelector((state) => state.cart);

  return (
    <div>
      {items.map((product) => (
        <div className="border-1 shadow-lg p-8" key={product.id}>
          <img
            className="h-40 max-w-[200px] object-cover"
            src={product.image}
            alt=""
          />
          <h1 className="text-center min-w-0 max-w-[200px] overflow-hidden overflow-ellipsis">
            {product.title}
          </h1>
          <div className="flex mt-3">
            <p className="p-3">Rs:{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
