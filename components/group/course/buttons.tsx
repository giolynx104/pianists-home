import { Course } from "@prisma/client";
import BuyButton from "./buy-button";
import AddToCartButton from "./add-to-cart-button";
import { Stack } from "@mui/material";

const Buttons = ({course} : {course: Course}) => {
return <Stack spacing={2} direction="row">
    <BuyButton course={course} />
    <AddToCartButton course={course} />
    </Stack>
}

export default Buttons;