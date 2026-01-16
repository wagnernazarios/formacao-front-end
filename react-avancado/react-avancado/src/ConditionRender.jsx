import React from 'react'

const ConditionRender = () => {

    const x = true;
    const nome = "Wagner"

  return (    

    <div>
      {/*renderização condicional */}
        <h3>Isso será renderizado condicionalmente</h3>
        {x && <p>Se x for true sim</p>}

      {/*if ternario */}
      {nome === "Wagner" ? (
        <div>
          <p>O nome é Wagner</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
    </div>
  ) 
}

export default ConditionRender