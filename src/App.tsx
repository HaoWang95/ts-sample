import { AppContainer } from "./style";
import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Columns";
import { useAppGlobalState } from "./state/AppStateContext";


function App() {
  const { lists } = useAppGlobalState();
  console.log(lists);
  return (
    <AppContainer>
      {lists.map((list) => (
        <Column id={list.id} text={list.text} key={list.id} />
      ))}
      <AddNewItem
        onAdd={console.log}
        dark={true}
        toggleButtonText="+ Add another list"
      />
    </AppContainer>
  );
}

export default App;
