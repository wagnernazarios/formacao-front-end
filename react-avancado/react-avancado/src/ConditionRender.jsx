import React from 'react'

const ConditionRender = () => {

    const x = true;
  return (
    <div>
        <h3>Isso será renderizado condicionalmente</h3>
        {x && <p>Se x for true sim</p>}
    </div>
  ) 
}

export default ConditionRender