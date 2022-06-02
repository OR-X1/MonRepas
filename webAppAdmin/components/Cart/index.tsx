import React, { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedDiv } from "../AnimatedDiv";
import { Product } from "@/graphql/generated/graphql";

type Props = {
  //react useState
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
};
type OrderProps = {
  product: Product;
};

const OrderComp: FC<OrderProps> = ({ product }) => {
  const [closeProduct, setCloseProduct] = useState(true);
  useEffect(() => {
      console.log(product)
    }, [product]);
      

  return (
    <AnimatedDiv closer={closeProduct}>
      <motion.div
        layout
        className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
      >
        <div className="p-2 w-12">
          <img
            src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50"
            alt="img product"
          />
        </div>
        <div className="flex-auto text-sm w-32">
          <div className="font-bold">{product.name}</div>
          <div className="truncate">Product 1 description</div>
          <div className="text-gray-400">Qt: 2</div>
        </div>
        <div className="flex flex-col w-18 font-medium items-end">
          <div
            onClick={() => setCloseProduct(false)}
            className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-trash-2 "
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </div>
          $12.22
        </div>
      </motion.div>
    </AnimatedDiv>
  );
};

export const Cart: FC<Props> = ({ setCart }) => {
  // const productFromLocalStorage = localStorage?.getItem("Cart");
  // const [prodcuts, setProducts] = useState<any[]>([]);
  // const [loadingCart, setLoadingCart] = useState(false);

  // useEffect(() => {
  //   let ProductsNotParsed = JSON.parse(productFromLocalStorage);

  //   let allProducts = []

  //   let ProductsParsed = ProductsNotParsed.map((product: Product) => {
  //       allProducts.push(JSON.parse(JSON.parse(product)[0]))
  //   });
  //   setProducts(allProducts);
  //   console.log({'prodc' :prodcuts});
  //   setLoadingCart(true);
  // }, [setLoadingCart]);

  return (
    <motion.div className="rounded-b border-t-0 bg-white  shadow-xl">
      <div className="flex justify-between">
        <span className="p-3 text-2xl font-bold">Cart</span>
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setCart(false)}
          className="m-3 px-2 p-1 rounded-full bg-red-200"
        >
          close
        </motion.button>
      </div>
      <motion.div layout className=" w-64">
        {/* {loadingCart ? (
          prodcuts?.map((product) => (
            <OrderComp key={product.id} product={prodcuts} />
          ))
        ) : (
          <div className="text-center">Your cart is empty</div>
        )} */}

        <div className="p-4 justify-center flex">
          <button className="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition">
            Checkout $36.66
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
