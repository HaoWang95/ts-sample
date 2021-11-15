import * as React from 'react';
import { AppContainer } from './style';
import { AddNewItem } from './components/AddNewItem';
import { Column } from "./components/Columns";
import { Card } from "./components/Card";

const basicStyles: React.CSSProperties = {
  backgroundColor: "#5aac44",
}

function App() {
  return (
    <div className="App" style={basicStyles}>
      <AppContainer>

        <Column text="To Do">
          <Card text="Finish React TypeScript project" />
        </Column>
        <Column text="In Progress">
          <Card text="Spring Security"  />
          <Card text="React advanced topics" />
        </Column>

        <Column text="Done">
          <Card text="Get up on time" />
        </Column>
        <AddNewItem 
          onAdd={function (text: string): void {
            throw new Error('Function not implemented.');
          } } 
          toggleButtonText="+ Add another list"          
        />
      </AppContainer>
    </div>
  );
}

export default App;
