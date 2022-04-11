import { conta } from "./conta.js";

export class ccSalario extends conta {
    constructor(cliente) {
        super(0, cliente, 199)
    }
    
    sacar(valor) {
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}