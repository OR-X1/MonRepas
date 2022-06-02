import type { NextPage, GetServerSideProps } from "next";
// import {
  
// } from "@/graphql/generated/graphql";
import { HomeComp } from "@/components/Home";
import { LoginPopup } from "@/components/Login";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { SubscriptionComp } from "@/components/Subscription";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

export type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <>
      <h1>Hello go to products</h1>
      <Link href="/Seller/products/new">
        <a>Go to products</a>
      </Link>
    </>
  );
};
export default Home;
