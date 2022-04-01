import { cliente } from "./cliente.js";
import { conta } from "./conta.js";

export class CC extends conta {
    static nroContaCC = 0;
    constructor(agencia, cliente) {
        super(0, cliente, agencia);
        //CONTABILIZA O NUMERO DE CONTAS CRIADAS
        CC.nroContaCC += 1;
    }

    
    sacar(valor) {
        let taxa = 1.1;
        /* acessar o saldo da própria conta-corrente a partir
        da qual chamamos o método, ou seja, "esta" conta. Para isso,
         usamos a palavra reservada this ("este(a)" em inglês). */
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            // console.log(this.#saldo + " = Saldo Privado sacado");
            return valorSacado;
        }
    }


}