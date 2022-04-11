import { Funcionario } from "./funcionario.js";

export class Gerente extends Funcionario{
    /* E se todo funcionário do banco vai ter que ter um salário,
     um nome e um CPF, eu vou pôr isso dentro do constructor(), são as
      propriedades que vamos precisar. Então vamos ter o this.nome, o this.salario e o this.cpf, 
      que vão ser coisas que eu vou receber por parâmetro. 
    E como ele falou, o nosso gerente e o nosso diretor terão essas três propriedades. */
    constructor(nome, salario, cpf){
        super(nome,salario, cpf)
        this._bonificacao = 1.1;
            
    }    
        
}