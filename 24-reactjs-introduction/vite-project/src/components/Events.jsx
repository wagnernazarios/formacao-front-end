import React from "react";


const Events = () => {

    const handlerClick = (e) => {
        console.log(e)
        console.log("Executou")

    }

    // função de renderização
    const renderSomething = (x) => {
        return x ? < h1 > Renderizando isso</h1> : <h1>Renderizando outra coisa</h1>


    };

    return (
        <div>
            <div>
                <button onClick={() => console.log("Testando minha aplicação!")}>Clique aqui!</button> {/* Evento direto */}
            </div>
            <div>
                <button onClick={handlerClick}>Clique aqui tbm!</button> {/* Evento com função */}
            </div>
            {renderSomething(1)}
            {renderSomething(0)}
        </div>
    )
}

export default Events;