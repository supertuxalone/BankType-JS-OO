import { CC } from "./cc.js";
import { cliente } from "./cliente.js";

//CRIAÇÃO DAS CONSTANTE DE UM NOVO OBJETO CLIENTE
const cliente1 = new cliente();
cliente1.nome = "Eder";
cliente1.cpf = "221.441.998-50";

const cliente2 = new cliente();
cliente2.nome = "Marcia";
cliente2.cpf = "232.445.498-50";

//CRIAÇÃO DA CONSTANTE contacli1 DE UM NOVO OBJETO CC
const ccCliente1 = new CC();
ccCliente1.agencia = 1324;
ccCliente1.conta = "000124-5";
ccCliente1.cliente = cliente1;
ccCliente1.depositar(500);

//DEPOSITO NA CONTA cli1
// var valordepositado = ccCliente1.depositar(100);
// var valorsacado = ccCliente1.sacar(50);

//CRIAÇÃO DA CONSTANTE contacli1 DE UM NOVO OBJETO CC
const ccCliente2 = new CC();
//atributo cliente na classe ContaCorrente
ccCliente2.cliente = cliente2;
ccCliente2.agencia = 1245;
ccCliente2.conta = "001254-8";

//Deposito na Conta cli2
//var valordepositado = ccCliente2.depositar(500);

/* console.log(valordepositado + " = Valor Depositado");
console.log(valorsacado + " = Valor Sacado"); */

let valor = 200
//trabalhando diretamente com a referência ao objeto conta, e não uma cópia dele
ccCliente1.transferir(valor, ccCliente2);
console.log(ccCliente1);
console.log(ccCliente2);

