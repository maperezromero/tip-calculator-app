import { useContext, useState } from "react";
import { valuesContext } from "../App";
import { calculation } from "../helpers/calculation";

export const Tip = () => {
    const { values, setValues } = useContext(valuesContext)
    const   [ selected, setSelected] = useState(0);
    
    const handleInput = (e) => {
        console.log(e.target.value);
        setValues({...calculation({...values, tip: Number(e.target.value)})})
    }
    const resetInput = () => {
        setValues({...values, tip: ''})
    }
    const handleClick = (e) => {
        const value = Number(e.target.id.substring(e.target.id.length - (e.target.id.length - (e.target.id.indexOf('-')+1)))); 
        setSelected(value);
        setValues({...values, tip: 'Custom'})
        setValues({...calculation({...values, tip: value})})
    }
    return (
        <span className = "tip">
            <span className = "text">
                Select Tip %
            </span>
            <span className = "tip-container">
                <button className = {`tip-button ${selected === 5? 'selected': ''}`} id = "tip-5" onClick={handleClick}>
                    5%
                </button>
                <button className = {`tip-button ${selected === 10? 'selected': ''}`} id = "tip-10" onClick={handleClick}>
                    10%
                </button>
                <button className = {`tip-button ${selected === 15? 'selected': ''}`} id = "tip-15" onClick={handleClick}>
                    15%
                </button>
                <button className = {`tip-button ${selected === 25? 'selected': ''}`} id = "tip-25" onClick={handleClick}>
                    25%
                </button>
                <button className = {`tip-button ${selected === 50? 'selected': ''}`} id = "tip-50" onClick={handleClick}>
                    50%
                </button>
                <input type="text" className = "custom-tip"  value={values.tip} onClick={()=> resetInput()} onChange = {handleInput}/>
            </span>
        </span>
    );
}