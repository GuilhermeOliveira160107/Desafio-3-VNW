// 01- Crie um array(lista) que receba 5 itens e exiba no console.
let filmes = ['homem-aranha', 'homem-aranha 2', 'homem-aranha 3', 'homem-aranha no aranhaverso', 'homem-aranha:sem volta pra casa']
console.log(filmes)

// 02- Utilize um método para adicionar um nome ao inicio do array.
filmes.unshift('vingadores ultimato')
console.log(filmes)

// 03- Utilize um método para remover o último nome do array.
filmes.pop()
console.log(filmes)

// 04- Utilize um método para adicionar dois nomes ao fim do array.
filmes.push('frozen', 'frozen 2')
console.log(filmes)

// 05- Utilize um método para remover o primeiro nome do array.
filmes.shift()
console.log(filmes)

// 06 Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [ 7,5,6, 3,8,9,2,1,4]
console.log(numbers.sort()) // sort é um método utilizado para organizar um array
// de ordem crescente ou ordem alfabetica

// 07 Crie um objeto que receba ao menos três propriedades sobre você.
let sobreMim = {
    animeFavorito:'Ousama Ranking',
    jogoFavorito:'DARK SOULS™: REMASTERED',
    pratoFavorito:'Estrogonofe de Carne'
}

// 08 Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.filmeFavorito = 'Homem - Aranha'

// 09 Remova uma propriedade desse objeto.
delete sobreMim.filmeFavorito

// 10-Mostre no console todas as propriedades desse objeto.
console.log(sobreMim)

// 11-Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades:nome,idade,telefone,amigos. 
// Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
    {
    nome:'guilherme oliveira',
    idade:16,
    telefone:40028922,
    amigos:['leonardo','pedro','jose','rafa']
},
{
    nome:'vanessa cristina',
    idade:40,
    telefone:40028922,
    amigos:['marlene','maria','flavia','priscila']
},
{
    nome:'leonardo toskano',
    idade:17,
    telefone:40028922,
    amigos:['guilherme','jose','pedro','lucas']
},
{
    nome:'pedro',
    idade:15,
    telefone:40028922,
    amigos:['lucas','kadu','bruno','guilherme']
},
{
    nome:'josé neto',
    idade:16,
    telefone:40028922,
    amigos:['lucas','leonardo','guilherme','pedro']
}]

// 12- Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[2])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[1])
console.log(cadastro[4].amigos[0])