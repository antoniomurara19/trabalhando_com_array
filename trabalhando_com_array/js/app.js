const form = document.querySelector('.form')
const resultado = document.querySelector('.resultado')
const resultado2 = document.querySelector('.resultado2')
const finalizar = document.getElementById('finalizar')
const pessoas = []
let i = 0

function carrinho(evento){
    evento.preventDefault();

    const nome = document.querySelector('.nome').value
    const sobrenome = document.querySelector('.sobrenome').value
    const peso = document.querySelector('.peso').value
    const altura = document.querySelector('.altura').value

    let criaPessoas = {
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura
    }
    
    pessoas.push(criaPessoas.nome)
    pessoas.push(criaPessoas.sobrenome)
    pessoas.push(criaPessoas.peso)
    pessoas.push(criaPessoas.altura)

    console.log(pessoas)
    resultado.innerHTML += 'Nome: ' + pessoas[i++] + '&nbsp;' + pessoas[i++] + '<br>' + 'Peso: ' + pessoas[i++] + '<br>' + 'Altura: ' + pessoas[i++] + '<br><br>'

}

form.addEventListener('submit',carrinho)

finalizar.addEventListener('click',()=>{
    resultado2.innerHTML = 'Suas informações foram: ' +  pessoas
})
