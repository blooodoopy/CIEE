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
        nameMatch = (value[1].name.toLowerCase() === name.toLowerCase() || value[1].nome.toLowerCase() === name.toLowerCase())
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