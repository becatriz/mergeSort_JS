/* 

-----------------------------------------------Algoritimo de ordenação: MERGESORT---------------------------------------------------------

- Dado o seguinte array [ 32, 1, 4, 20, 5, 7 ] vamos ordená-lo, utilizando o MergeSort

- Entendendo o conceito: DIVIDIR para CONQUISTAR
                            
                       [ 32, 1, 4         20, 5, 7 ]

       [ 32, 1, 4 ]                                  [ 20, 5, 7]   
      [ 32 ] [1, 4]                                 [ 20 ] [ 5, 7 ]
    [ 32 ] [ 1 ] [ 4 ]                             [ 20 ] [ 5 ] [ 7 ]
    [ 32 ]  [ 1, 4 ]                                [ 20 ] [ 5, 7 ]                    
      [ 1, 4, 32 ]                                    [ 5, 7, 20 ]
                       [ 1, 4, 5, 7, 20, 32 ]

- Paralelo com Filosofia (René Descartes)

- Core da ordenação é a recursividade

- Revisão sobre recursividade: 
    - Case base 
    - Pilha de execução

- Passos:
    1 - Case base para parar execução da recursividade
    2 - Dividir o vetor em duas partes
    3 - Chamar recursivamente a mesma função
    4 - Verificar o menor numero e adicionar ao um vetor auxiliar
    5 - Retornar o vetor ordenado

Vamos codar !!!!
-----------------------------------------------------------------------------------------------------------------------*/

//Função recursiva
const mergeSort = (array) => {
  if (array.length <= 1) return array; // Condição de parada da função

  const middle = Math.floor(array.length / 2); // Vai Pegar o meio do array

  const left = array.slice(0, middle);
  const rigth = array.slice(middle);

  return merge(mergeSort(left), mergeSort(rigth));
};

const merge = (left, rigth) => {
  const sorted = [];

  while (left.length && rigth.length) {
    if (left[0] < rigth[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(rigth.shift());
    }
  }

  return [...sorted, ...left, ...rigth];
};

console.log(mergeSort([32, 1, 4, 20, 5, 7]));
