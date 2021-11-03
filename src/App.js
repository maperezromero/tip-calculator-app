// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Bill } from './components/bill';
import { Persons } from './components/persons';
import { Tip } from './components/tip';

function App() {
  const title = 'SPLITTER';
  let counter = 0;
  const [ values, setValues] = useState({
    bill: 0,
    tip: 0,
    persons: 0,
    tipAmount: 0,
    total: 0,
  })
  return (
    <div className = "App" >
      <div className = "container" >
        <span className = "title-container">
          <span className = "title" >
            {title.split('').map(letter => {
              counter++;
              return(
                <span key={counter} className={`title-${counter}`}>
                  {letter}
                </span> 
              )
            })}
          </span>
        </span>
        <span className = "calculator">
          <span className = "input">
              <Bill/>
              <Tip/>
              <Persons/>
          </span>
          <span className = "output">
          </span>
        </span>
      </div>
    </div>
  );
}

export default App;
