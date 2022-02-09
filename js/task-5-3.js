class Storage {
    constructor(items) {
        this.items = items 
    }
    getItems() {
        return this.items
    }
    addItem(item) {
        this.items.push(item)
    }
    removeItem(item) {
        for (let it of this.items) {
            if (it === item) {
                const index = this.items.indexOf(it)
                this.items.splice(index,1)
            } 

        }
        
    }

}

const storage  = new Storage (['Нанитоиды',
  'Пролонгер',
  'Железные жупи',
    'Антигравитатор',])
console.log(); (storage);
  
const items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
console.table(storage.items); 

storage.removeItem('Пролонгер');
console.table(storage.items);