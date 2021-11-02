import dollar from '../images/icon-dollar.svg';

export const Bill = () => {
    
    
    return (
        <span className = "bill">
            <span className = "text">
                Bill
            </span>
            <span className = "amount-container">
                <img src = { dollar } alt = "dollar" className = "dollar"/>
                <input className = "amount"/>
            </span>
        </span>
    )
}