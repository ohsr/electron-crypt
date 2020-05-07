'use strict'

const Store = require('electron-store')

class DataStore extends Store {
  constructor (element) {
    super({
      name: "cryptElectronApp", //name of the JSON file who stored data
      encryptionKey: "oiV32mVp5lOwYneFESjrWq2xFByNOvNj" //encryption key (Could be created with password user API and stored with node-keytar)
    });
    this.data = this.get(element) || {};
    this.element = element;
  }

  saveAll () {
    this.set(this.element, this.data)
    return this
  }

  findGlobal(){
    return this
  }
  findAll () {
    this.data = this.get(this.element) || {}
    return this.data;
  }

  findOne(data){
    const foundData = Object.keys(this.data).filter(key =>{
       return this.data[key] === data
    })
    return this.data[foundData]
  }
  
  addOne(data) {
    this.data = { ...this.data, [data.id]:data }
    this.saveAll()
    return this.findOne(data)
  }

  deleteOne(data) {
    this.data = Object.keys(this.data).filter(key =>{
        return this.data[key] !== data
    })
    return this.saveData()
  }

}

module.exports = DataStore