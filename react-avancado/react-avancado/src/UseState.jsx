import { useState } from 'react'

function UseState() {

    const [anotherNumber, setAnotherNumber] = useState(25)

    return (
        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={() => (setAnotherNumber(20))}>mudando estados</button>
        </div>
    )
}

export default UseState