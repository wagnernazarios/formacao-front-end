import React from 'react'


const Event = () => {

  /*função de click*/
  const handleClick = () =>{
  console.log('Clicou no botão')
}

  //função de renderização
  const rendereizar = (x) => {
    if(x){
      return <h1>Renderizando isso</h1>
    }else{
      return <h1>Renderizando aquilo</h1>
    }
  };

  // return 10>2 && <p>Carregando...</p>;

  return (
    <div>
        <button onClick={() => console.log('Clicou')}>
            Clique aqui
        </button> 

        <button onClick={handleClick}>
                Clique aqui também!
        </button>  
        
        {rendereizar(true)}
        {rendereizar(false)}
    </div>
    
  )
}


export default Event