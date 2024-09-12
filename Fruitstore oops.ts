// class FruitStore{

//     private inventory: { [key:string]:number}


//     constructor(){
//         this.inventory = {}
//     }


// addFruit(fruitName: string, quantity: number):void{

//     if(this.inventory[fruitName]){
//         this.inventory[fruitName] += quantity;
//     }else{
//         this.inventory[fruitName] = quantity;
//     }
//     }

//     getinventory():void{
//         console.log(this.inventory);
        
//         }

// }

// const store = new FruitStore();
// store.addFruit("apple",10)
// store.addFruit("banana",20)
// store.addFruit("apple",3)
// store.addFruit("banana",2)


// store.getinventory();