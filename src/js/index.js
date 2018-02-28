import Storage from './storage.js'

const storage = new Storage()

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

  arrived: {
    second: 19,
    minute: 50,
    hour: 17,
    day: 26,
    month: 2,
    year: 2018
  },

  sender: 'Fulano',
  reciever: 'blooodoopy | walmart',
  wasDamaged: false,

  nutritionalInfo: {
    servingSize: 4,
    grams: 25,
    amountPerServing: {
      calories: {
        grams: 109
      },

      totalFat: {
        grams:2.3, 
        percentage:4
      },

      saturatedFat: {
        grams: 1.1,
        percentage: 6
      },

      cholesterol: '-',

      sodium: {
        mg: 100,
        percentage: 4
      },

      totalCarbohydrate: {
        grams: 20.2,
        percentage: 7
      },

      dietaryFiber: {
        grams: 0.4,
        percentage: 2
      },

      sugars: {
        grams: 5.8
      },

      protein: {
        grams: 1.9
      }
    }
  }
}
