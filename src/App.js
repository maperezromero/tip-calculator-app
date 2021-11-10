// import logo from './logo.svg';
import { createContext, useState } from 'react';
import './App.css';
import { Bill } from './components/bill';
import { Persons } from './components/persons';
import { Tip } from './components/tip';
import { TipAmount } from './components/tip-amount';
import { TotalAmount } from './components/total-amount';

export const valuesContext = createContext(null);

function App() {
  const title = 'SPLITTER';
  let counter = 0;
  const [ values, setValues] = useState({
    bill: 0,
    tip: 'Custom',
    persons: 1,
    tipAmount: 0,
    total: 0,
  })
  const reset = () =>{
    setValues({
      bill: 0,
      tip: 'Custom',
      persons: 1,
      tipAmount: 0,
      total: 0,
    })
  }
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
        <valuesContext.Provider value = {{values, setValues}}>
          <span className = "calculator">
            <span className = "input">
                <Bill/>
                <Tip/>
                <Persons/>
            </span>
            <span className = "output">
                <TipAmount/>
                <TotalAmount/>
                <button className = "reset" onClick={reset}>
                  RESET
                </button>
            </span>
          </span>
        </valuesContext.Provider>

      </div>
    </div>
  );
}

export default App;
