import { Action } from "./action";
import { nanoid } from "nanoid";
import { useImmerReducer } from "use-immer";
import { findItemIndexById } from "../utils/arrayUtil";

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

    default: {
      break;
    }
  }
};
