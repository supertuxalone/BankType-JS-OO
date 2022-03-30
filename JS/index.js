import { CC } from "./cc.js";
import { cliente } from "./cliente.js";

/* CRIAÇÃO DAS CONSTANTE DE UM NOVO OBJETO CLIENTES, 
passando por parametros, para o constructor da class cliente fazer isso por nós  
 */
const cliente1 = new cliente("Eder","221.441.998-50");
const cliente2 = new cliente("Marcia", "225.112.114-02");

let nroconta = 0;
//CRIAÇÃO DA CONSTANTE contacli1 DE UM NOVO OBJETO CC
const ccCliente1 = new CC(1324, cliente1);

ccCliente1.depositar(500);

//CRIAÇÃO DA CONSTANTE contacli1 DE UM NOVO OBJETO CC
const ccCliente2 = new CC(1245, cliente2);
new CC(1245, cliente2);
new CC(1245, cliente2);
new CC(1245, cliente2);
new CC(1245, cliente2);

let valor = 200
//trabalhando diretamente com a referência ao objeto conta, e não uma cópia dele
ccCliente1.transferir(valor, ccCliente2);

console.log(ccCliente1);
console.log(CC.nroContaCC);

