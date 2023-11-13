// Atividade prática - Objetos e arrays

// 1. Considere o seguinte array:
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];
// a. Imprima no console o índice do primeiro salário maior que 7.500 utilizando o findIndex
const salariosFindIndex = salarios.findIndex(function(maiorQue7500){
    return maiorQue7500 > 7500
})
document.write(`1. Índice do primeiro salário maior que 7.500: ${salariosFindIndex}<br>`)
// b. Crie uma nova lista filtrada com os salários que são maior que 8.000 utilizando o filter
const salariosFilter = salarios.filter(function(maioresQue8000){
    return maioresQue8000 > 8000
})
document.write(`Lista dos salários maiores que 8.000: ${salariosFilter.join(", ")}<br><br>`)




// 2. James estava criando uma array com as cores do arco-íris, e ele esqueceu algumas cores. As cores padrão de um arco-íris são normalmente listadas nesta ordem:
// const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Roxo"];

// mas James tinha isto:
const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];
// Usando somente o método splice insira as cores que faltam na array e
// remova a cor "Preto", seguindo estes passos:
// a. Remova "Preto"
rainbow.splice(2, 1)
// b. Adicione "Amarelo" e "Verde"
rainbow.splice(2, 0, "Amarelo", "Verde")
// c. Adicione "Roxo"
rainbow.splice(rainbow.length, 0, "Roxo")

document.write(`2. A nova lista de cores do arco-íris fica desta forma: ${rainbow.join(", ")}<br><br>`)




// 4. Crie um cadastro de pessoas onde o usuário informe o nome, idade e se está trabalhando ou não, se a pessoa estiver trabalhando pergunte para ele o salário que está ganhando. Para cada pessoa cadastrada, pergunte ao usuário se ele deseja continuar cadastrando ou não. No final, mostre as pessoas que estão desempregadas, as pessoas que estão empregadas separadas pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

const cadastroPessoas = []

continuar = true
while(continuar) {
    const pessoa = {}

    pessoa.nome = prompt(`4. Digite o nome da pessoa:`),
    pessoa.idade = Number(prompt(`4. Digite a idade dela:`))

    const trabalhando = confirm(`4. Ela está trabalhando?`)
    if (trabalhando) {
        pessoa.trabalhando = 'Sim'
        pessoa.salario = Number(prompt(`4. Qual o seu salário?`))
    } else {
        pessoa.trabalhando = 'Não'
    }

    cadastroPessoas.push(pessoa)

    continuar = confirm(`4. Deseja cadastrar mais alguém?`)
}


const desempregadas = []
const empregadasAbaixoDe2500 = []
const empregadasAcimaDe2500 = []
const classificacao = cadastroPessoas.filter(function(pessoa){
    pessoa.trabalhando === "Não" ? desempregadas.push(pessoa) : pessoa.salario < 2500 ? empregadasAbaixoDe2500.push(pessoa) : empregadasAcimaDe2500.push(pessoa)
})
document.write(`<br>Lista de pessoas desempregadas:<br>`)
for (let pessoa of desempregadas) document.write(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}<br>`)

document.write(`<br>Lista de pessoas empregadas com salário menor que R$ 2.500,00:<br>`)
for (let pessoa of empregadasAbaixoDe2500) document.write(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}, salário: R$ ${pessoa.salario.toFixed(2)}<br>`)

document.write(`<br>Lista de pessoas empregadas com salário maior que R$ 2.500,00:<br>`)
for (let pessoa of empregadasAcimaDe2500) document.write(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}, salário: R$ ${pessoa.salario.toFixed(2)}<br>`)