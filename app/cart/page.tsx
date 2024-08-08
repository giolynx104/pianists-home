"use client";

import { Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const CartItems = dynamic(() => import("@/components/group/cart/cart-items"), {
  ssr: false,
});

//TODO: Add checkout

const Page = () => {
  return (
    <Container className="mt-10">
      <Stack spacing={2}>
        <Typography variant="h4">Shopping Cart</Typography>
        <CartItems />
      </Stack>
    </Container>
  );
};

export default Page;
