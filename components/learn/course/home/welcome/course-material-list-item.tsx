"use client";

import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem2 } from "@mui/x-tree-view/TreeItem2";
const CourseMaterialListItem = ({ courseId }: { courseId: string }) => {
  const modules = ["Module 1", "Module 2", "Module 3", "Module 4"];
  console.log(courseId);
  return (
    <SimpleTreeView>
      <TreeItem2 itemId="course-material" label="Course Material">
        {modules.map((module) => (
          <TreeItem2 key={module} itemId={module} label={module} />
        ))}
      </TreeItem2>
    </SimpleTreeView>
  );
};

export default CourseMaterialListItem;
