import { AppContainer } from "./style";
import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Columns";
import { useAppGlobalState } from "./state/AppStateContext";
import { addList } from "./state/action";


function App() {
  const { lists, dispatch } = useAppGlobalState();
  console.log(lists);
  return (
    <AppContainer>
      <p>Task Planner</p>
      {lists ? lists.map((list) => (
        <Column id={list.id} text={list.text} key={list.id} />
      )): "Loading..."}
      <AddNewItem
        onAdd={text => dispatch(addList(text))}
        dark={true}
        toggleButtonText="+ Add another list"
      />
    </AppContainer>
  );
}

export default App;
