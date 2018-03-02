/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__storage_js__);


const storage = new __WEBPACK_IMPORTED_MODULE_0__storage_js___default.a()

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




/***/ }),
/* 2 */
/***/ (function(module, exports) {

class Storage {
  constructor() {
    this.inventory = new Map()
    this.ids = new Map()
    
  }
  
  add(item) {
    let UID = this.getNewUID()
    return new Promise((resolve, reject) => {
      try {
      this.ids.set(UID, true)
      resolve(this.inventory.set(UID, item))
      } catch(err) {
        reject(new Error(err))
      }
    })
  }
  
  remove(id) {
    let item = this.inventory.get(id)
    return new Promise((resolve, reject) => {
      if(this.inventory.delete(id)) {
        this.ids.delete(id)
        resolve(item)
      } else {
        const msg = "Could not delete item with id: " + id
        reject(new Error(msg))
      }
    })
  }
  
  getIdByName(name) {
    return new Promise((resolve, reject) => {
      let nameMatch = false
      let msg = "Could not get id of item with name: " + name
      for(let value of this.inventory) {
        nameMatch = (value[1].nome.toLowerCase() === name.toLowerCase())
        nameMatch ? resolve(value[0]) : reject(new Error(msg))
      }
    })
  }
  
  find(anything) {
    let itemMatch = !1
    let itemFound
    let search = anything.toString().toLowerCase()

    //entries() returns an array with: key and data associated with that key
    for(let entry of this.inventory.entries()) {
      Object.entries(entry[1]).forEach(([key, value]) => {
        if(search === value.toString().toLowerCase()) {
          itemFound = entry[1]
          itemMatch = !0
        }
      })
    }

    return new Promise((resolve, reject) => {
      const msg = 'Nothing found for search ' + anything
      itemMatch ? resolve(itemFound) : reject(new Error(msg))
    })
  }
  
  log() {
    if(this.inventory.size < 1) {
      console.log('No items to be displayed!')
    } else {
      for(let value of this.inventory) {
        console.log(value[0], '\n', value[1])
      }
    }
    
  }
  
  getNewUID() {
    const uniqueId = (Math.random().toString(36).substr(2, 9) + '' + Math.random().toString(36).substr(2, 9) + '' + Math.random().toString(36).substr(2, 9) + '' + Math.random().toString(36).substr(2, 9)).toLowerCase()
    if(!this.ids.has(uniqueId)) {
      return uniqueId
    } else {
      console.warn('Duplicate ID! generating new ID...')
      this.getUID()
    }
  }
  
  
}

module.exports = Storage

/***/ })
/******/ ]);