"use client";

import React from "react";
import { CartProvider } from "react-use-cart";

const CartClient = ({ children }: { children: React.ReactNode }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default CartClient;
