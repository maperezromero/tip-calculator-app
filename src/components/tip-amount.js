import { useContext } from 'react'
import { valuesContext } from '../App'

export const TipAmount = () =>{
    const { values } = useContext(valuesContext)
    return (
        <span className = "tip-amount">
            <span className="output-text">
                <span className = "title-output">
                    Tip Amount
                </span>
                <br/>
                <span className = "text-person">
                    / person
                </span>
            </span>
            <span className = "amount-output">
                {values.tipAmount}
            </span>
        </span>
    )
}