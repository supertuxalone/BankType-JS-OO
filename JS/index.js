/* Classes definem uma forma de organizarmos uma série de informações repetidas no
 nosso código e por isso devemos usar elas quando temos código
  que se repete e que faz parte de um contexto coeso. */
class cliente {
    nome;
    cpf;

}

class CC {
    agencia;
    conta;
    /* Colocaremos uma cerquilha (#) à frente do atributo saldo em 
    todas as vez em que citamos esse atributo. 
    Agora o nome da variável mudou para #saldo. 
    Então this.#saldo significa que esse saldo é privado */
    #saldo = 10000;

    sacar(valor) {
        /* acessar o saldo da própria conta-corrente a partir
         da qual chamamos o método, ou seja, "esta" conta. Para isso,
          usamos a palavra reservada this ("este(a)" em inglês). */
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            console.log(this.#saldo + " = Saldo Privado sacado");
            return valor;
        }
    }

    depositar(valor) {
        /* e valor é maior do que 0.
        Em caso positivo, a atualização de this.saldo será permitida */
        if (valor <= 0) return; {

            this.#saldo += valor;
            console.log(this.#saldo + " = Saldo Privado depositado");
            return valor;
        }


    }

}
//CRIAÇÃO DAS CONSTANTE DE UM NOVO OBJETO CLIENTE
const cliente1 = new cliente();
cliente1.nome = "Eder";
cliente1.cpf = "221.441.998-50";

const cliente2 = new cliente();
cliente2.nome = "Marcia";
cliente2.cpf = "232.445.498-50";

//CRIAÇÃO DAS CONSTANTE DE UM NOVO OBJETO CC
const ccCliente1 = new CC();
ccCliente1.agencia = 1324;
ccCliente1.conta = "000124-5";
ccCliente1.saldo = 5200;

//DEPOSITO NA CONTA
//console.log(ccCliente1.saldo);
var valordepositado = ccCliente1.depositar(100);
//console.log(ccCliente1.saldo);
var valorsacado = ccCliente1.sacar(50);

/* cliente2.agencia = 1324;
cliente2.conta = "005541-5";
cliente2.saldo = "0.0"; 
 */
console.log(valordepositado + " = Valor Depositado");
console.log(valorsacado + " = Valor Sacado");

console.log(ccCliente1);
