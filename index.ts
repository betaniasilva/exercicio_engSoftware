import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log("Criação de veículo");
const carro: Veiculo = criaVeiculo();

<<<<<<< HEAD
while (true) {
  console.log("########### MENU ###########");
  console.log("1 - Acelerar");
  console.log("2 - Frear");
  console.log("3 - Subir marcha");
  console.log("4 - Descer marcha");
  console.log("5 - Imprimir dados do veículo");
  console.log("0 - Sair");

  const opcao = +teclado("Escolha uma opção: ");
  if (opcao === 0) {
    break;
  }
  switch (opcao) {
    case 1:
      acelerar(carro);
      break;
    case 2:
      frear(carro);
      break;
    case 3:
      subirMarcha(carro);
      break;
    case 4:
      descerMarcha(carro);
      break;
    case 5:
      console.table(carro);
      break;
    default:
      break;
  }
=======
while(true){
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Calcular consumo de combustível");
    console.log("6 - Imprimir dados do veículo");
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
        case 2:
            frear(carro);
            break;
        case 3:
            subirMarcha(carro);
            break;
        case 4:
            descerMarcha(carro);
            break;
        case 5:
            calcularConsumo(carro);
            break;
        case 6:
            console.table(carro);
            break;
        default:
            break;
    }
>>>>>>> 6bfe3035bfec2b030e4c2996fea2fc9c4ede0c1d
}

console.table(carro);

function acelerar(veiculo: Veiculo): void {
  if (veiculo.marchaAtual != 0) {
    veiculo.velocidade += veiculo.potencia * 0.1;
    console.log(veiculo.velocidade);
  }
}

function frear(veiculo: Veiculo): void {
  if (veiculo.velocidade > 0) {
    veiculo.velocidade -= veiculo.potencia * 0.1;
    if (veiculo.velocidade < 0) {
      veiculo.velocidade = 0;
    }
    console.log(`Velocidade atual: ${veiculo.velocidade}`);
  } else {
    console.log("O veículo já está parado.");
  }
}

function subirMarcha(veiculo: Veiculo): void {
  if (veiculo.marchaAtual < veiculo.numeroMarchas) {
    veiculo.marchaAtual += 1;
    console.log(`Marcha atual: ${veiculo.marchaAtual}`);
  } else {
    console.log("Você já está na marcha mais alta!");
  }
}

function descerMarcha(veiculo: Veiculo): void {
  if (veiculo.marchaAtual > 0) {
    veiculo.marchaAtual -= 1;
    console.log(`Marcha atual: ${veiculo.marchaAtual}`);
  } else {
    console.log("O veículo já está em ponto morto!");
  }
}

function criaVeiculo(): Veiculo {
  const veiculo: Veiculo = new Veiculo();
  veiculo.marca = teclado("Marca: ");
  veiculo.modelo = teclado("Modelo: ");
  veiculo.potencia = +teclado("Potência: ");
  veiculo.numeroMarchas = +teclado("Número de marchas: ");
  return veiculo;
}

function pilotoAutomatico(veiculo: Veiculo): void {
  console.log("Piloto automático ativado!");

  const velocidadeDesejada = +teclado("Informe a velocidade desejada: ");

  while (
    veiculo.velocidade < velocidadeDesejada &&
    veiculo.marchaAtual < veiculo.numeroMarchas
  ) {
    acelerar(veiculo);

    if (veiculo.velocidade >= velocidadeDesejada) {
      console.log(
        `Velocidade desejada de ${velocidadeDesejada} km/h atingida.`
      );
      break;
    }

    if (veiculo.marchaAtual < veiculo.numeroMarchas) {
      subirMarcha(veiculo);
    }
  }

  if (veiculo.velocidade >= velocidadeDesejada) {
    console.log("Piloto automático desativado. Velocidade atingida.");
  } else {
    console.log("Piloto automático desativado. Marcha máxima atingida.");
  }
}
<<<<<<< HEAD
=======

function calcularConsumo(veiculo: Veiculo): void {
  const distancia = +teclado('Digite a distância em km: ');
  const eficienciaCombustivel = +teclado('Digite a eficiência de combustível (km/l): ');
  const consumoEstimado = distancia / eficienciaCombustivel;
  console.log(`O consumo estimado de combustível para ${distancia} km é ${consumoEstimado.toFixed(2)} litros.`);
}



function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}



>>>>>>> 6bfe3035bfec2b030e4c2996fea2fc9c4ede0c1d
