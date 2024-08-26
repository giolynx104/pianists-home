"use client";

/**
 * We have to use CartClient because CartProvider is client-side only
 */

import { CartProvider } from "react-use-cart";

export const CartClient = ({ children }: { children: React.ReactNode }) => {
  return <CartProvider>{children}</CartProvider>;
};