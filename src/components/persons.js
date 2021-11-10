
import { useContext } from 'react'
import { valuesContext } from '../App'
import iconPerson from '../images/icon-person.svg'
import {calculation} from '../helpers/calculation';


export const Persons = () => {
    const { values, setValues } = useContext(valuesContext)
    const handleInput = (e) =>{
        setValues({...calculation({...values, persons: Number(e.target.value)})})
    }

    const resetInput = () => {
        setValues({...values, persons: ''})
    }
    return (
        <span className = "persons">
            <span className = "text">
                Number of People
            </span>
            <span className = "people-container">
                <img src = { iconPerson } alt = "person" className = "person"/>
                <input className = "number-people" value={values.persons} onChange ={handleInput} onClick={resetInput}/>
            </span>
        </span>
    )
}