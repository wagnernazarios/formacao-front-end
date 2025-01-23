//! STRICT
// ele limita usos incorretos de programar como usar
// variaveis sem informar se é let, var ou const entre outros

// "use strict";
// opa = 10;
// console.log(opa);

//const undefined = "hello";
//console.log(undefined);
//delete [].length;

//! EXCEPTION
// ele serve para avaliar se algo e informar a mensagem de erro e para a execução
// utilzado para regras e validações

// let x = 10;

// if (x != 11) {
//   throw new Error("O valor de X não pode ser diferente de 11"); // nesse caso x é diferente de 11 e da erro
// }

//! DEBUGER
// ele executa o codigo ate um checkpoint definido e para
// e só volta a executar o restante se for instruido

// let c = 1;
// let d = 2;

// if (c == 1) {
//   c = d + 2;
//   console.log(c);
// }

// debugger;  // checkpoint

// for (let i = 0; i < d; i++) {
//   c = c + 2;
//   console.log(c);
// }
//debugger;  // checkpoint

//! TRATAMENTO DE ERRO POR FUNÇÔES
// usar funções para validações de dados
// é uma forma mais segura de não enviar dados errados
// ou cadastrar com valores invalidos

function checkNumber(n) {
  const result = Number(n);

  if (Number.isNaN(result)) {
    console.log("Valor incorreto");
    result;
  } else {
    console.log("Valor correto!");
  }
  return result;
}

checkNumber(10);
checkNumber("10");
checkNumber({});
checkNumber("1na");

//! TRY CATCH
// Outro utilizado para debug
// onde ele tenta executar algo em TRY
// se der erro cai em CATCH

try {
  let soma = x + y; // variaveis X e Y não existe então vai cair no bloco CATCH
} catch (error) {
  console.log(`Erro na variavel! ${error}`);
}

//! FINALLY
// é uma funcão que vai depois do TRY CATCH
// onde a função é executada dando erro ou não 
try {
  let value = checkNumber("vaca"); // variaveis X e Y não existe então vai cair no bloco CATCH
  if (!value) {
    throw new Error("Valor invado!");
  }
} catch (error) {
  console.log(`Opa, houve um erro: ${error}`);
} finally {
  console.log("Codigo executado");
}

//! ASSERTION
// são tratamento de erro mas para o dev doque para o user
function checkArray(arr) {
  if (arr.length === 0) {
    throw new Error("O array precisa ter elementos");
  } else {
    console.log(`O array tem ${arr.length} elementos`);
  }
}

checkArray([]);
