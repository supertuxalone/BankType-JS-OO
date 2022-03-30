import { CC } from "./cc.js";
import { cliente } from "./cliente.js";
import { ccpoupanca } from "./poupanca.js";
import { conta } from "./conta.js";

/* CRIAÇÃO DAS CONSTANTE DE UM NOVO OBJETO CLIENTES, 
passando por parametros, para o constructor da class cliente fazer isso por nós  
 */
const cliente1 = new cliente("Eder","221.441.998-50");
const cliente2 = new cliente("Marcia", "225.112.114-02");

let nroconta = 0;
//CRIAÇÃO DA CONSTANTE contacli1 DE UM NOVO OBJETO CC
const ccCliente1 = new conta(0, cliente1, 1005);
ccCliente1.depositar(1000);
ccCliente1.sacar(100);

const ccPoupanca = new conta(50, cliente1, 1001);

console.log(ccCliente1);
console.log(ccPoupanca);

