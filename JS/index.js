/* Classes definem uma forma de organizarmos uma série de informações repetidas no
 nosso código e por isso devemos usar elas quando temos código
  que se repete e que faz parte de um contexto coeso. */
class cliente{
    nome;
    cpf;
    
}

class CC{
    agencia;
    conta;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 =  new cliente();
cliente1.nome = "Eder";
cliente1.cpf = "221.441.998-50";

const cliente2 =  new cliente();
cliente2.nome = "Marcia";
cliente2.cpf = "232.445.498-50";


const ccCliente1 = new CC();
ccCliente1.agencia = 1324;
ccCliente1.conta = "000124-5";
ccCliente1.saldo = "0.0";

//DEPOSITO NA CONTA
console.log(ccCliente1.saldo);
ccCliente1.saldo=100;
console.log(ccCliente1.saldo);
ccCliente1.sacar(50);

/* cliente2.agencia = 1324;
cliente2.conta = "005541-5";
cliente2.saldo = "0.0"; 
 */

console.log(ccCliente1.saldo);
console.log(cliente1, cliente2);
