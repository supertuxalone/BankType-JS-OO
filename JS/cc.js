export class CC {
    agencia;
    conta;
    cliente;
    
    /* Colocaremos uma cerquilha (#) à frente do atributo saldo em 
    todas as vez em que citamos esse atributo. 
    Agora o nome da variável mudou para #saldo. 
    Então this.#saldo significa que esse saldo é privado */
    _saldo = 0;

    sacar(valor) {
        /* acessar o saldo da própria conta-corrente a partir
         da qual chamamos o método, ou seja, "esta" conta. Para isso,
          usamos a palavra reservada this ("este(a)" em inglês). */
        if (this._saldo >= valor) {
            this._saldo -= valor;
            // console.log(this.#saldo + " = Saldo Privado sacado");
            return valor;
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

    transferir(valor, conta){
        const iconta = this.conta;
        const valortransferido = this.sacar(valor);
        conta.depositar(valortransferido);
        console.log(valor + " = Valor a Transferir");        
        console.log(iconta + " = Conta a Transferir >>");
        console.log(" ----------------------- ");        
        console.log(valortransferido + " = Valor Transferido <<");

    }

}