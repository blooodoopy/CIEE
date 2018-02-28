import Storage from './storage.js'

const estoque = new Storage()

const EXAMPLE = {
  name: 'Bolacha maria',
  type: 'bolacha',
  category: 'comida',
  price: 2.99,
  validity: {
    day: 2,
    month: 9,
    year: 2018
  },
  sender: 'Fulano',
  reciever: 'blooodoopy | walmart',
  wasDamaged: false,
}

let produto = {
  nome: 'Passa Tempo',
  tipo: 'Bolacha'
}

estoque.add(produto).then(item => {
  let inputPesquisa = document.getElementById('textSearch')

  inputPesquisa
  .addEventListener('input', () => {
    let inputValue = inputPesquisa.value
    estoque.getIdByName(inputValue).then(id => {
      console.log(id)
    })
  })
})


