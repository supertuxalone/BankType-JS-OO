import { CC } from "./cc.js";
import { cliente } from "./cliente.js";
import { ccpoupanca } from "./poupanca.js";
import { ccSalario } from "./salario.js";

/* CRIAÇÃO DAS CONSTANTE DE UM NOVO OBJETO CLIENTES, 
passando por parametros, para o constructor da class cliente fazer isso por nós  
 */
const cliente1 = new cliente("Eder","221.441.998-50");
const cliente2 = new cliente("Marcia", "225.112.114-02");

let nroconta = 0;
//CRIAÇÃO DA CONSTANTE contacli1 DE UM NOVO OBJETO CC
const ccCliente1 = new CC(0, cliente1, 1005);
ccCliente1.depositar(1000);
ccCliente1.sacar(100);

const ccPoupanca = new ccpoupanca(50, cliente1, 1001);
ccPoupanca.sacar(20);

const ccsalario = new ccSalario(cliente1);
ccsalario.depositar(100);
ccsalario.sacar(10);

// console.log(ccCliente1);
// console.log(ccPoupanca);

console.log(ccsalario);
