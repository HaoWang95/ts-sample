import * as React from 'react';
import { Calculator } from './components/MathCalculator';
import { ReactComponent as Logo } from './logo.svg';

const basicStyles: React.CSSProperties = {
  backgroundColor: "#5aac44",
}

function App() {
  return (
    <div className="App" style={basicStyles}>
      <Logo />
      <Calculator />
    </div>
  );
}

export default App;
