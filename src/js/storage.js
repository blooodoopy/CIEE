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
		//should somehow tell the user this using some notification system...
      console.log('No items to be displayed!')
    } else {
      for(let value of this.inventory) {
        console.log(value[0], '\n', value[1])
      }
    }
    
  }
  
  getNewUID() {
	//crazy long line of code
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