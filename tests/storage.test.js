const Storage = require('../src/js/storage.js')


const storage = new Storage()


//TESTS FOR >>>> storage.add() <<<<
const test1 = {
  name: 'Test Subject 1',
  num: 1
}

const test2 = {
  name: 'Test Subject 2',
  num: 2
}

const test3 = {
  name: 'Test Subject 3',
  num: 3
}

test('Correct inventory size', () => {
  expect(storage.inventory.size).toBe(0)
  storage.add(test1)
    .then(item => {
      expect(storage.inventory.size).toBe(1)
    })
    .catch(err => console.log(err))
})

test('Correct item properties', () => {
  storage.add(test1)
    .then(item => {
      for(let value of item) {
        expect(value[1].name).toBe('Test Subject 1')
        expect(value[1].num).toBe(1)
      }
    })
    .catch( err => {
      console.log(err)
    })

})

test('Adding multiple items', () => {
  let promisedItems = [
    storage.add(test1),
    storage.add(test2),
    storage.add(test3)
  ]

  Promise.all(promisedItems)
    .then(item => {
      expect(storage.inventory.size).toBe(5)
    }).catch(err => {
      console.log(err)
    })
})

// ###########################################################

//TESTS FOR >>>> storage.remove() <<<<

test('Correct inventory size', () => {
  //Testing code goes here...

})


test('Items will be not found in inventory', () => {
  //Testing code goes here...

})


test('Removing multiple items', () => {
  //Testing code goes here...

})


/*
// ###########################################################

//TESTS FOR >>>> storage.getIdByName() <<<<

test('Getting id by name', () => {
  //Testing code goes here...

})


test('Getting id by name', () => {
  //Testing code goes here...

})


test('Getting id by name', () => {
  //Testing code goes here...

})

// ###########################################################

//TESTS FOR >>>> storage.getNewUID() <<<<

test('Getting new UID', () => {
  //Testing code goes here...

})

test('UID', () => {
  //Testing code goes here...

})

test('UID', () => {
  //Testing code goes here...

})

// ###########################################################

//TESTS FOR >>>> storage.get() <<<<

test('', () => {
  //Testing code goes here...

})

test('', () => {
  //Testing code goes here...

})

test('', () => {
  //Testing code goes here...

})

// ###########################################################

//TESTS FOR >>>> storage.log() <<<<

test('', () => {
  //Testing code goes here...

})

test('', () => {
  //Testing code goes here...

})

test('', () => {
  //Testing code goes here...

})*/