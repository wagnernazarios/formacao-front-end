
//Inserindo expressões e variaveis nos componentes
export const TemplateExpress = () => {
      const name = "Wagner";

      const data = {
        age: 32,
        job: "programador"
      }

  return (
    <div>
        {/* expressões e variareis no jsx */}
        <p>A soma é {2+4}</p>
        <h3>Bem vindo, {name}</h3>
        <p>Sua idade é {data.age} anos e sua profissão é {data.job}</p>
</div>
  )
}


export default TemplateExpress;