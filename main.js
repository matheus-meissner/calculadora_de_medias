// Atribuindo variáveis
const form = document.getElementById('form-atividade')
let linhas = '';
const table = document.getElementById('table-atividade')
const corpoTabela = document.querySelector('tbody');
const atividades = [];
const notas = [];
const spanAprovado = '<span class ="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class ="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima: "));

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const nome_atividade = document.getElementById('nome_atividade')
    const nota_atividade = document.getElementById('nota_atividade')

    if (atividades.includes(nome_atividade.value)) {
        alert(`A atividade: ${nome_atividade.value} já foi inserida`);
    } else {
        atividades.push(nome_atividade.value);
        notas.push(parseFloat(nota_atividade.value));
    }
    
    let linha = '<tr>';
    linha += `<td>${nome_atividade.value}</td>`;
    linha += `<td>${nota_atividade.value}</td>`;
    linha += `<td>${nota_atividade.value >= notaMinima ? '🥳' : '😔'}</td>`;
    linha += `</tr>`;

    linhas += linha;

    nome_atividade.value = '';
    nota_atividade.value = '';
}

function atualizaTabela() {
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas =0;

    for (let i = 0; i<notas.length; i++) {
        somaDasNotas += notas[i];
    }
    
    return somaDasNotas / notas.length;
}