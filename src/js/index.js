import Storage from './storage.js'

const storage = new Storage()

const produtos = [
  {
    nome: 'Cookie',
    tipo: 'Biscoito',
    preço: 3.99,
    validade: {
      dia: 14,
      mês: 10,
      ano: 2018
    },
    chegada: {
      dia: 1,
      mês: 3,
      ano: 2018
    }
  },

  {
    nome: 'bolacha maria',
    tipo: 'bolacha',
    preço: 6.99,
    validade: {
      dia: 14,
      mês: 10,
      ano: 2018
    },
    chegada: {
      dia: 1,
      mês: 3,
      ano: 2018
    }
  },

  {
    nome: 'Pastel',
    tipo: 'Salgado/comida',
    preço: 2.99,
    validade: {
      dia: 14,
      mês: 10,
      ano: 2018
    },
    chegada: {
      dia: 1,
      mês: 3,
      ano: 2018
    }
  },

  {
    nome: 'Colgate',
    tipo: 'pasta de dente',
    preço: 2.99,
    validade: {
      dia: 14,
      mês: 10,
      ano: 2018
    },
    chegada: {
      dia: 1,
      mês: 3,
      ano: 2019
    }
  },

  {
    nome: 'Coca cola',
    tipo: 'bebida',
    preço: 5.49,
    validade: {
      dia: 14,
      mês: 10,
      ano: 2018
    },
    chegada: {
      dia: 1,
      mês: 3,
      ano: 2018
    }
  },

  {
    nome: 'ração de dragão',
    tipo: 'comida/pet',
    preço: 49.99,
    validade: {
      dia: 14,
      mês: 10,
      ano: 2018
    },
    chegada: {
      dia: 1,
      mês: 3,
      ano: 2018
    }
  },

  {
    nome: 'Casinha para dragão',
    tipo: 'pet',
    preço: 299.99,
    garantia: {
      dia: 1,
      mês: 3,
      ano: 2019
    },
    chegada: {
      dia: 1,
      mês: 3,
      ano: 2018
    }
  },

  {
    nome: 'ideapad 320',
    tipo: 'laptop',
    preço: 2799.99,
    garantia: {
      dia: 1,
      mês: 3,
      ano: 2019
    },
    chegada: {
      dia: 1,
      mês: 3,
      ano: 2018
    }
  },

  {
    nome: 'Moto z play',
    tipo: 'smartphone',
    preço: 1927.97,
    garantia: {
      dia: 1,
      mês: 3,
      ano: 2019
    },
    chegada: {
      dia: 1,
      mês: 3,
      ano: 2018
    }
  },

  {
    nome: 'pizza',
    tipo: 'comida',
    preço: 59.99,
    validade: {
      dia: 1,
      mês: 3,
      ano: 2019
    },
    chegada: {
      dia: 1,
      mês: 3,
      ano: 2018
    }
  },

  {
    nome: 'café',
    tipo: 'bebida',
    preço: 8.99,
    validade: {
      dia: 1,
      mês: 3,
      ano: 2020
    },
    chegada: {
      dia: 1,
      mês: 3,
      ano: 2018
    }
  }

]

for(let i = 0; i <produtos.length; i++) {
  storage.add(produtos[i])

}

const textInput = document.getElementById('textSearch')
const itemFound = document.getElementById('itemContainer')

const nome = document.getElementById('nome')
const tipo = document.getElementById('tipo')
const preço = document.getElementById('preço')
const diaVal = document.getElementById('diaVal')
const mesVal = document.getElementById('mesVal')
const anoVal = document.getElementById('anoVal')
const diaChegada = document.getElementById('diaChegada')
const mesChegada = document.getElementById('mesChegada')
const anoChegada = document.getElementById('anoChegada')
const responsavel = document.getElementById('responsavel')

const button = document.getElementById('submit')

button.addEventListener('click', () => {
  let newProduto = {
    nome: nome.value,
    tipo: tipo.value,
    preço: preço.value,
    validade: {
      dia: diaVal.value,
      mes: mesVal.value,
      ano: anoVal.value
    },
    chegada: nome.value,
    responsavel: responsavel.value
  }
  storage.add(newProduto).then(item => {
    console.log(item)
    itemFound.innerHTML = "Item added Successfully"
  })
})

textInput.addEventListener('input', () => {
  const inputValue = textInput.value
  storage.find(inputValue).then(item => {
    itemFound.innerHTML = JSON.stringify(item, null, 2)
  }).catch(err => {
    console.log(err)
    itemFound.innerHTML = ""
  })

})


