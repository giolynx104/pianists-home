import CourseMaterialListItem from "@/app/[language]/learn/course/[id]/home/welcome/_components/course-material-list-item";
import { Drawer, List } from "@mui/material";

const Layout = ({ params }: { params: { id: string } }) => {
  return (
    <Drawer variant="permanent" anchor="left" className="w-fit">
      <List>
        <CourseMaterialListItem courseId={params.id} />
      </List>
    </Drawer>
  );
};

export default Layout;
