export class conta {
    constructor(saldoInicial, cliente, agencia) {
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
        let taxa = 1
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
   
    depositar(valor) {
        /* e valor é maior do que 0.
        Em caso positivo, a atualização de this.saldo será permitida */
        if (valor <= 0) return; {

            console.log(this._saldo + " = Saldo que tava :");
            this._saldo += valor;
            return valor;
        }

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