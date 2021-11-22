import { ColumnContainer, ColumnTitle } from "../../style";
import { AddNewItem } from "../AddNewItem";
import { useAppGlobalState } from "../../state/AppStateContext";
import { Card } from "../Card";
import { addTask, moveList } from "../../state/action";
import { useRef } from "react";
import { useItemDrag } from "../../utils/useItemDrag";
import { useDrop } from "react-dnd";

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
  const { draggedItem, getTaskByListId, dispatch } = useAppGlobalState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({type:"COLUMN", id, text});

  const [, drop] = useDrop({
    accept:"COLUMN",
    hover(){
      if(!draggedItem) return;
      if(draggedItem.type === "COLUMN"){
        if(draggedItem.id === id) return;
      }
      dispatch(moveList(draggedItem.id, id));
    }
  })

  drag(drop(ref));

  const tasks = getTaskByListId(id); 
  console.log(`In column ${tasks}`);
  return (
    <ColumnContainer ref={ref}>
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
