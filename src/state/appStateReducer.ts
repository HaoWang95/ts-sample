import { Action } from "./action";
import { nanoid } from "nanoid";
import { findItemIndexById, moveItem } from "../utils/arrayUtil";
import { DragItem } from "../utils/DragItems";

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  draggedItem: DragItem | null;
};

export const appStateReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "ADD_LIST": {
      state.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;
    }

    case "ADD_TASK": {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(state.lists, listId);

      state.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text,
      });
      break;
    }

    case "MOVE_LIST": {
      const { draggedId, hoverId } = action.payload;

      const dragIndex = findItemIndexById(state.lists, draggedId);
      const hoverIndex = findItemIndexById(state.lists, hoverId);
      state.lists = moveItem(state.lists, dragIndex, hoverIndex);

      break;
    }

    case "SET_DRAGGED_ITEM": {
        state.draggedItem = action.payload;
        break;
    }

    default: {
      break;
    }
  }
};
