import { ColumnContainer, ColumnTitle } from "../../style";
import { AddNewItem } from "../AddNewItem";
import { useAppGlobalState } from "../../state/AppStateContext";
import { Card } from "../Card";

// type React.PropsWithChildren<P> = P & {children ?: React.ReactNode}

type ColumnProps = {
    text: string;
    id: string;
}

// Another implementation
// type ColProps = {
//     text: string;
//     children?: ReactNode;
// }

export const Column = ({ text, id }: ColumnProps) => {
  const { getTaskByListId } = useAppGlobalState();

  const tasks = getTaskByListId(id); 
  console.log(`In column ${tasks}`);
  return (
    <ColumnContainer>
      <ColumnTitle>{text ? text : "Column Title"}</ColumnTitle>
      {tasks.map(task => (
          <Card id={task.id} text={task.text} />
      ))}
      <AddNewItem 
        toggleButtonText={`+ Add another task in ${text}`}
        onAdd={() => console.log("not implemented yet")}
        dark
      />
    </ColumnContainer>
  );
};
