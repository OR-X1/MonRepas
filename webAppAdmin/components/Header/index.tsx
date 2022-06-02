import React, { FC, useEffect, useRef, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreIcon from "@mui/icons-material/Store";
import Badge from "@mui/material/Badge";
import Link from "next/link";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import { PrimaryBtn } from "../PrimaryBtn";
import SearchIcon from "@mui/icons-material/Search";
import { AnimatePresence, motion } from "framer-motion";
import { Cart } from "../Cart";
import { AnimatedDiv } from "../AnimatedDiv";
import { useOnClickOutside } from "@/firebase/Hooks";

type Props = {
  setLoginPopup: (e: any) => void;
  title?: string;
  imageProductAdded?: string;
  addToCart?: boolean;
  setAddToCart?: (e: any) => void;
};
const Header: FC<Props> = ({
  setLoginPopup,
  title,
  imageProductAdded,
  addToCart,
  setAddToCart,
}) => {
  const [becameSeller, setBecameSeller] = useState(true);
  const [user, setUser] = useState<any>(false);
  const [cartTimes, setCartTimes] = useState(0);
  const [cart, setCart] = useState(false);

  const Router = useRouter();
  useEffect(() => {
    const setAddToCartTimeout = setTimeout(() => {
      setCartTimes(cartTimes + 1);
      //@ts-ignore
      setAddToCart(false);
    }, 800);

    return () => clearTimeout(setAddToCartTimeout);
  }, [addToCart]);

  const cartRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(cartRef, () => {
    setCart(false);
  });

  return (
    <>
      <div className="header w-screen flex fixed top-0 left-0 bg-slate-200 shadow-lg z-50 p-5 justify-between">
        <div ref={cartRef} className="absolute top-[100px] right-8 z-[88]">
          <AnimatedDiv closer={cart}>
            <Cart setCart={setCart} />
          </AnimatedDiv>
        </div>
        <div className="header__logo">
          <Link href="/" passHref>
            <h2 className="text-2xl font-black hover:text-blue-500 transition-all cursor-pointer">
              MEGASTORE {title && ` ⨉ ${title}`}
            </h2>
          </Link>
        </div>
        <div className="ml-36 hidden md:flex">
          <div className="flex justify-center items-center text-gray-600">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="bg-white hover:shadow-lg transition-all w-[500px] h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            />
            <label
              htmlFor="search"
              className="-ml-10 rounded-full hover:border-gray-300 transition-all border-2 border-white border-solid p-1 cursor-pointer"
            >
              <SearchIcon />
            </label>
          </div>
        </div>
        <div className=" flex gap-3 ">
          {becameSeller ? (
            <Link href="/Seller" passHref={true}>
              <button className="p-2 hidden md:flex rounded-full hover:bg-blue-50 hover:text-blue-500 transition-all bg-blue-500 text-white px-4">
                <span>Become a seller</span>
                <StoreIcon className=" " />
              </button>
            </Link>
          ) : (
            <Link
              href="/Personalise/store/[slug]"
              as={`/Personalise/store/${user?.store?.id}`}
              passHref
            >
              <PrimaryBtn>
                edit store &nbsp;
                <EditIcon />
              </PrimaryBtn>
            </Link>
          )}

          <button onClick={() => setCart(true)} className="relative">
            <Badge badgeContent={cartTimes} color="primary">
              <ShoppingBasketIcon className=" hover:text-blue-500 transition-all cursor-pointer" />
            </Badge>
            {addToCart && (
              <motion.div
                initial={{ opacity: 1, y: 0, scale: 2 }}
                animate={{ opacity: 0, y: -45, scale: 0.5 }}
                transition={{ duration: 0.8 }}
                style={{
                  backgroundImage: `url(${imageProductAdded})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="p-3 absolute -bottom-8 rounded-full bg-blue-600"
              />
            )}
          </button>
          <button className="">
            <Badge badgeContent={4} color="primary">
              <CircleNotificationsIcon className=" hover:text-blue-500 transition-all cursor-pointer" />
            </Badge>
          </button>
          <button className="" onClick={() => setLoginPopup(true)}>
            <AccountCircleIcon className=" hover:text-blue-500 transition-all cursor-pointer" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

Header.defaultProps = {
  title: "",
  imageProductAdded: "",
  addToCart: false,
  setAddToCart: () => false,
};
