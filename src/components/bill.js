import { useContext } from 'react';
import dollar from '../images/icon-dollar.svg';
import {valuesContext} from '../App.js';
import {calculation} from '../helpers/calculation';
export const Bill = () => {
    const { values, setValues } = useContext(valuesContext)
    
    const handleInput = (e) => {
        console.log(e.target.value);
        setValues({...calculation({...values, bill: e.target.value})})

    }
    const resetInput = () => {
        setValues({...values, bill: ''})
    }
    return (
        <span className = "bill">
            <span className = "text">
                Bill
            </span>
            <span className = "amount-container">
                <img src = { dollar } alt = "dollar" className = "dollar"/>
                <input className = "amount" value = {values.bill} onChange= {handleInput} onClick = {()=>resetInput()}/>
            </span>
        </span>
    )
}