import {cliente} from "./cliente.js";
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadsenha("111")
const gerente =  new Gerente("Ricardo",  5000, 12378945601);
gerente.cadsenha("222");

/* ropriedade dos objetos de tomarem várias formas ou até de recebermos aqui na 
autenticação um funcionário mais genérico e conseguir reutilizá-lo, 
independentemente de ele ser um diretor ou um gerente, é chamado de polimorfismo*/
const cliente1 = new cliente("Lais", 78945612379, "456");
const gerenteEstalogado = SistemaAutenticacao.login(gerente, "222");
const diretorEstalogado = SistemaAutenticacao.login(diretor, "111");

const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "456");

console.log(gerenteEstalogado, diretorEstalogado, clienteEstaLogado);

