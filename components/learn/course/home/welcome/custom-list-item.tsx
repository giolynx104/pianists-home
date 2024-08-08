import { ListItem } from "@mui/material";
import Link from "next/link";

const CustomListItem = ({
  courseId,
  item,
}: {
  courseId: string;
  item: string;
}) => {
  return (
    <ListItem className="before:content-['|']">
      <Link href={`/learn/course/${courseId}/home/${item}`}>{item}</Link>
    </ListItem>
  );
};

export default CustomListItem;
