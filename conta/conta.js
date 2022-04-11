//CLASS ABSTRADA, NÃO PODE SER INSTANCIADA, SOMENTE HERDADA
export class conta {
    constructor(saldoInicial, cliente, agencia) {
        //BARRANDO INSTACIAÇÃO DE CONTA
        if (this.constructor == conta) {
            throw new Error("Instacianção Não Permitida !")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    //colocando um valor no cliente 
    set cliente(novoValor) {
        //ó será feita se ele for uma instância de cliente
        if (novoValor instanceof cliente) {
            this._cliente = novoValor;
        }
    }
    //atribuidor "get" de acesso 
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //esse metodo da sacar da conta
    sacar(valor) {
        throw new Error("Metodo Abstrato, não invocado")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        /* acessar o saldo da própria conta-corrente a partir
        da qual chamamos o método, ou seja, "esta" conta. Para isso,
         usamos a palavra reservada this ("este(a)" em inglês). */
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            // console.log(this.#saldo + " = Saldo Privado sacado");
            return valorSacado;
        }
    }

    depositar(valor) {
        /* e valor é maior do que 0.
        Em caso positivo, a atualização de this.saldo será permitida */
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const iconta = this.conta;
        const valortransferido = this.sacar(valor);
        conta.depositar(valortransferido);
        console.log(valor + " = Valor a Transferir");
        console.log(iconta + " = Conta a Transferir >>");
        console.log(" ----------------------- ");
        console.log(valortransferido + " = Valor Transferido <<");

    }

}