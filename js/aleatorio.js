const nomes = [
    "Fusca 53",
    "Vetor 53",
    "O Fantasma do Asfalto",
    "O Vigilante de Aço",
    "Lenda Monocromática"
];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
