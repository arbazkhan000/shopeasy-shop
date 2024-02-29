import React from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../slice/cartSlice";

const Product = ({ products, loading }) => {
  const dispatch = useDispatch();

  const addItem = (item) => {
    console.log("add item", item);
    dispatch(addToCard(item));
  };

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {products.length > 0 ? (
        products?.map((item) => (
          <div className="border-1 shadow-lg p-8" key={item.id}>
            <img
              className="h-40 max-w-[200px] object-cover"
              src={item.image}
              alt=""
            />
            <h1 className="text-center min-w-0 max-w-[200px] overflow-hidden overflow-ellipsis">
              {item.title}
            </h1>
            <div className="flex mt-3 ">
              <p className="p-3 ">Rs:{item.price}</p>
              <button
                onClick={() => addItem(item)}
                className="p-3  bg-[#2B2B2B] text-[#FFFFFF] rounded-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 >
          loading product .....
        </h1>
      )}
    </div>
  );
};

export default Product;
