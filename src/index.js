// Arquivo de exemplo para executar as funções definidas no math.js

import * as math from './math.js';

const numeros = [4, 2, 10, 4, 5, 40]; // escolha os números que desejar
console.log('Soma usando a abordagem funcional:', math.somaDobroNumerosParesFuncional(numeros))
console.log('Soma usando a abordagem estrutural (procedural):', math.somaDobroNumerosParesProcedural(numeros))
