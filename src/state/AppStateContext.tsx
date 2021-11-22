import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { appStateReducer, List, Task, AppState } from "./appStateReducer";
import { Action } from "./action";
import { useImmerReducer } from "use-immer";

type AppStateContextProps = {
  lists: List[];
  getTaskByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "ToDo",
      tasks: [{ id: "c1", text: "Learn React with TypeScript" }],
    },
    {
      id: "1",
      text: "InProgress",
      tasks: [{ id: "c2", text: "Set up an empty project" }],
    },
    {
      id: " 2",
      text: "Done",
      tasks: [{ id: "c3", text: "Basic React and SpringBoot microservices" }],
    },
  ],
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = state;

  const getTaskByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };
  return (
    <AppStateContext.Provider value={{ lists, getTaskByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppGlobalState = () => {
  return useContext(AppStateContext);
};
