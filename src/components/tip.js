import { useContext } from "react";
import { valuesContext } from "../App";
import { calculation } from "../helpers/calculation";

export const Tip = () => {
    const { values, setValues } = useContext(valuesContext)
    let selected;
    const handleInput = (e) => {
        setValues({...calculation({...values, tip: Number(e.target.value)})})
    }
    const resetInput = () => {
        setValues({...values, tip: ''})
    }
    const handleClick = (e) => {
        console.log(e);
        console.log(e.target.id.indexOf('-'));
        selected = e.target.id.substring(e.target.id.indexOf('-'),2);
        console.log(selected);
    }
    return (
        <span className = "tip">
            <span className = "text">
                Select Tip %
            </span>
            <span className = "tip-container">
                <button className = {`tip-button ${selected === 5? 'selected': null}`} id = "tip-5" onClick={handleClick}>
                    5%
                </button>
                <button className = "tip-button" id = "tip-10">
                    10%
                </button>
                <button className = "tip-button" id = "tip-15">
                    15%
                </button>
                <button className = "tip-button" id = "tip-25">
                    25%
                </button>
                <button className = "tip-button" id = "tip-50">
                    50%
                </button>
                <input type="text" className = "custom-tip"  value={values.tip} onClick={()=> resetInput()} onChange = {handleInput}/>
            </span>
        </span>
    );
}