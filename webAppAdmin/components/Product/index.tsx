import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { Product } from "@/graphql/generated/graphql";
import { motion } from "framer-motion";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { CircularProgress } from "@mui/material";

type Props = {
  product: any;
  onDashboard?: boolean;
  color?: string;
};
export const ProductComp: FC<Props> = ({ product, onDashboard, color }) => {
  useEffect(() => {
    console.log(product.viewed);
  }, [product.viewed]);

  const [viewedTimes, setViewedTimes] = useState(0);
  const [killEyes, setKillEyes] = useState(false);

  useEffect(() => {
    // increment the number of times the product has been viewed each second
    const interval = setInterval(() => {
      if (product.viewed > viewedTimes) {
        setViewedTimes(viewedTimes + 1);
        console.log(viewedTimes);
      }
    }, 800);
    // return the function to clear the interval
    return () => clearInterval(interval);
  }, [viewedTimes]);

  return (
    <Link
      href={
        !onDashboard
          ? `/product/${product.uuid}`
          : `/Seller/products/edit/${product.id}`
      }
      passHref
    >
      <div
        className="w-full relative md:w-1/3 xl:w-1/4 p-6 flex flex-col cursor-pointer border-[5px] border-indigo-500 "
      >
        <div
          style={{
            backgroundImage: `url(${
              product?.image?.length > 0 ? product?.image[0] : ""
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-56 bg-slate-400 "
        ></div>
        <div className="pt-3 flex items-center justify-between">
          <p className="">{product.name}</p>
          <svg
            style={{
              color: color,
            }}
            className="h-6 w-6 fill-current  hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"></path>
          </svg>
        </div>
        {product?.viewed && (
          <div className="flex relative items-center justify-between">
            <p className="text-gray-900">{product.viewed} views</p>
            {Array(viewedTimes)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  initial={{ opacity: 1, y: 0, scale: 0.4 }}
                  animate={{
                    scale: 1.5,
                    opacity: 0,
                    y: -130,
                    x:
                      i % 2
                        ? [0, -20, 0, -30]
                        : i % 3
                        ? [0, 20, 0, 30]
                        : [0, -10, 10, -30],
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute right-0"
                  key={i}
                >
                  <RemoveRedEyeIcon />
                </motion.div>
              ))}
            <div className="">
              <RemoveRedEyeIcon
                sx={{
                  color: color,
                }}
              />
            </div>
          </div>
        )}
        <p className="pt-1 text-gray-900">${product.price}</p>
      </div>
    </Link>
  );
};

ProductComp.defaultProps = {
  onDashboard: false,
  color: "#000",
};
