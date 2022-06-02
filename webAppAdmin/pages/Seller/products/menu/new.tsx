import React, { FC, useEffect, useState } from "react";
import {
  GetAllProductsDocument,
  Product,
  useCreateMenuMutation,
} from "@/graphql/generated/graphql";
import { useQuery } from "@apollo/client";
import { PrimaryBtn } from "@/components/PrimaryBtn";
import { CircularProgress } from "@mui/material";

type Props = {
  products: Product[];
  id: number;
  setProductIds: (productIds: string[]) => void;
  productIds: string[];
};

const OneCard: FC<Props> = ({ products, id, setProductIds, productIds }) => {
  const [selectedProduct, setSelectedProduct] = useState(products[0] || {});

  const handleChange = (id: number, idx: string): void => {
    let newArray = [...productIds];
    newArray[id] = idx;
    setProductIds(newArray);
  };

  return (
    <div className="flex justify-center gap-3 flex-col w-fit ">
      <div
        className="w-[150px] h-[150px] bg-center bg-cover "
        style={{
          backgroundImage: `url(${selectedProduct.image[0]})`,
        }}
      >
        {/* <button onClick={() => deleteByIndex(id)}>remove</button> */}
      </div>
      <select
        className="border-2 border-blue-600  border-solid rounded-md p-2"
        onChange={(e) => {
          if (products) {
            setSelectedProduct(
              // @ts-ignore
              products[+e.target.value]
            );
            handleChange(id, products[+e.target.value].id);
          }
        }}
      >
        {products.map((product, i) => (
          <option key={i} value={i}>{`${product.name.slice(0, 15)}${
            product.name.length > 15 ? "..." : ""
          }`}</option>
        ))}
      </select>
    </div>
  );
};

const New = () => {
  const { data, loading, error } = useQuery(GetAllProductsDocument);
  const [menuName, setMenuName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState([
    data?.getAllProducts[0],
  ]);

  const goBack = () => {
    window.history.back();
  };

  const [createMenu, { loading: createMenuLoading }] = useCreateMenuMutation();

  const handleCreateMenu = async () => {
    const { data: createdProduct } = await createMenu({
      variables: {
        input: {
          name: menuName,
          productIds: productIds,
        },
      },
    });
    if(createdProduct) {
      goBack();
    }
  };

  const [productIds, setProductIds] = useState([data?.getAllProducts[0].id]);

  useEffect(() => {
    if (data?.getAllProducts) {
      setSelectedProduct([data.getAllProducts[0], data.getAllProducts[0]]);
      setProductIds([data.getAllProducts[0].id, data.getAllProducts[0].id]);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error!</div>;

  return (
    <div className="m-4">
      {createMenuLoading && (
        <div className="flex justify-center items-center w-screen h-screen bg-white bg-opacity-20">
          <CircularProgress />
        </div>
      )}
      <div className="flex justify-between w-full">
        <h1 className=" mb-3">
          <span className="text-3xl font-black">Create New Menu</span>
        </h1>
        <PrimaryBtn onClick={handleCreateMenu}>create now</PrimaryBtn>
      </div>
      <div className="flex justify-between items-end">
        <div className="w-[80vw]">
          <label
            htmlFor="nameProduct"
            className="block text-gray-700 text-2xl font-bold mb-3"
          >
            Menu Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="nameProduct"
            placeholder="Product Name "
            value={menuName}
            onChange={(e) => setMenuName(e.target.value)}
          />
        </div>

        <PrimaryBtn
          onClick={() =>
            setSelectedProduct([...selectedProduct, data.getAllProducts[0]])
          }
          className="w-20 bg-blue-400"
        >
          <span>Add</span>
        </PrimaryBtn>
      </div>
      <div className="flex gap-3 p-3 max-w-[98vw] overflow-auto">
        {selectedProduct?.map((_, idx) => (
          <>
            {selectedProduct.length > 0 && (
              <OneCard
                setProductIds={setProductIds}
                id={idx}
                products={data?.getAllProducts}
                key={idx}
                productIds={productIds}
              />
            )}
            {idx != selectedProduct.length - 1 && (
              <div className="w-[20px] flex justify-center items-center text-4xl font-bold">
                +
              </div>
            )}
          </>
        ))}
      </div>
      <div className="">
        {(productIds || [])?.map((_, idx) => (
          <h3 key={idx}>{_}</h3>
        ))}
      </div>
    </div>
  );
};

export default New;
