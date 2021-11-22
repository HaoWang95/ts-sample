import { useDrag } from "react-dnd";
import { useAppGlobalState } from "../state/AppStateContext";
import { DragItem } from "./DragItems";
import { setDraggedItem } from "../state/action";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppGlobalState();
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => dispatch(setDraggedItem(null)),
  });
  return { drag };
};
