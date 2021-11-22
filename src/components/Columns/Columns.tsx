import { ColumnContainer, ColumnTitle } from "../../style";
import { AddNewItem } from "../AddNewItem";
import { useAppGlobalState } from "../../state/AppStateContext";
import { Card } from "../Card";
import { addTask } from "../../state/action";

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
  const { getTaskByListId, dispatch } = useAppGlobalState();

  const tasks = getTaskByListId(id); 
  console.log(`In column ${tasks}`);
  return (
    <ColumnContainer>
      <ColumnTitle>{text ? text : "Column Title"}</ColumnTitle>
      {tasks.map(task => (
          <Card id={task.id} text={task.text} key={task.id} />
      ))}
      <AddNewItem 
        toggleButtonText={`+ Add another task in ${text}`}
        onAdd={text => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
};
