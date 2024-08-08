import { Box, Button } from "@mui/material";
import Link from "next/link";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <Box className="h-screen flex justify-center items-center">
      <Link href={`/learn/course/${params.id}/home/welcome`} >
        <Button variant="contained">Finish simulated payment</Button>
      </Link>
    </Box>
  );
};

export default Page;
