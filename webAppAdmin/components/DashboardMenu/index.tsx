import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProductComp } from "../Product";
import { PrimaryBtn } from "../PrimaryBtn";
import Link from "next/link";
import { Product, Menu } from "@/graphql/generated/graphql";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

type Props = {
  menu: Menu[];
};

const DashboardMenu: FC<Props> = ({ menu }) => {
  const { query } = useRouter();
  const [store, setStore] = useState<string>("");

  useEffect(() => {
    if (query?.slug) {
      console.log(query?.slug[0]);
      setStore(query?.slug[0]);
    }
  }, [query]);

  return (
    <>
      <div className="flex justify-between w-full">
        <span className="text-3xl font-black">My Menu</span>
        <div className="flex gap-3">
          {/* <Link href={`/Seller/products/${store}`} passHref>
          <PrimaryBtn className="text-white bg-green-700 hover:text-black">
            <span >Refresh</span>
          </PrimaryBtn>
        </Link> */}
          <Link href="/Seller/products/menu/new" passHref>
            <PrimaryBtn className="text-white bg-green-700 hover:text-black">
              <span>Add new Menu</span>
            </PrimaryBtn>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap  ">
        {(menu || [])?.map((m, index) => {
          return (
            <>
              <div className="p-2 m-2 bg-white rounded-md shadow-lg">
                <div
                  // style={{
                  //   backgroundImage: `url(${m?.productIds[0]?.image[0]})`,
                  // }}
                  className="p-6 bg-center bg-cover"
                >
                  <AvatarGroup max={3}>
                    {m?.productIds?.map(
                      (
                        product,
                        index
                      ) => (
                        <Avatar
                          key={index}
                          alt="Remy Sharp"
                          // @ts-ignore
                          src={product?.image[0]}
                        />
                      )
                    )}
                  </AvatarGroup>
                </div>
                <span className="text-xl font-bold">{m.name}</span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DashboardMenu;
