import { conta } from "./conta.js";

/* ContaCorrente recebe (cliente, agencia), e minha ContaPoupanca também tem que chamar o super, 
então eu também tenho que chamar o construtor da classe Conta, passando saldoInicial, 
que é o saldo inicial que a própria ContaPoupanca vai receber, passando cliente, agencia */
export class ccpoupanca extends conta {
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia)
    }


}


