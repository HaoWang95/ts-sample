import { AppContainer } from "./style";
import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Columns";
import { useAppGlobalState } from "./state/AppStateContext";


function App() {
  const { lists } = useAppGlobalState();
  console.log(lists);
  return (
    <AppContainer>
      <p>Task Planner</p>
      {lists ? lists.map((list) => (
        <Column id={list.id} text={list.text} key={list.id} />
      )): "Loading..."}
      <AddNewItem
        onAdd={() => {console.log("Not implemented")}}
        dark={true}
        toggleButtonText="+ Add another list"
      />
    </AppContainer>
  );
}

export default App;
