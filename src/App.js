import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Counter from './Components/Counter';

function App() {




  return (
    // here jsx
    <div className="App">
     <Counter></Counter>
    </div>
  );
}

export default App;

// UseState()  Hook

// 1. useState is a react hook which creates variables which creates re-render of a component automatically whenever the value of it changes.
// 2. It returns a function to set its value and an updated value .