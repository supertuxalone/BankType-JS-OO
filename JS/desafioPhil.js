let quantidadePositivos = 0;

for (let i = 0; i < 6; i++) {

  const valorInformadoPeloUsuario = gets(i);

  if( i % 2 == 0){
    quantidadePositivos +1;  
  }  
}

print(`${quantidadePositivos} valores positivos`);