/* Classes definem uma forma de organizarmos uma série de informações repetidas no
 nosso código e por isso devemos usar elas quando temos código
  que se repete e que faz parte de um contexto coeso. */
  export class cliente {
    get cpf(){
      return this._cpf;
    }
    //recebe, os atributos que a classe precisa para criar um objeto
    constructor(nome, cpf, senha){
      this.nome = nome;
      this._cpf = cpf;
      this._senha = senha;
    }

    autenticar(){
      return true;
    }

}

