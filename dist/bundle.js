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


const estoque = new __WEBPACK_IMPORTED_MODULE_0__storage_js___default.a()

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
  
  get(val, prop, callback) {
    return new Promise((resolve, reject) => {
      for(let value of this.inventory) {
        
      }
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