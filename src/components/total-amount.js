import { useContext } from 'react'
import { valuesContext } from '../App'

export const TotalAmount = () =>{
    const { values } = useContext(valuesContext)
    return (
        <span className = "total-amount">
            <span className="output-text">
                <span className = "title-output">
                    Total
                </span>
                <br/>
                <span className = "text-person">
                    / person
                </span>
            </span>
            <span className = "amount-output">
                ${values.total}
            </span>
        </span>
    )
}