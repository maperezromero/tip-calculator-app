import iconPerson from '../images/icon-person.svg'

export const Persons = () => {
    return (
        <span className = "persons">
            <span className = "text">
                Number of People
            </span>
            <span className = "people-container">
                <img src = { iconPerson } alt = "person" className = "person"/>
                <input className = "number-people"/>
            </span>
        </span>
    )
}