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
      ano: 2029
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

textInput.addEventListener('input', () => {
  const inputValue = textInput.value
  storage.find(inputValue).then(item => {
    itemFound.innerHTML = JSON.stringify(item, null, 2)
  })


})