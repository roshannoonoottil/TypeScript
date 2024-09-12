// class Shop {
//     public size = 0
//     public array = []
//     constructor(){
//         this.size = 0
//         this.array = []
//     }

//     shopData(){
//         if(this.size ===0){
//             return             
//         }
//     }
// }

class FruitStore{
    private inventory:{[key:string]:number}

    constructor(){
        this.inventory = {}
    }

    addFruit(fruitName:string,quantity:number){
        if(this.inventory[fruitName]){
            this.inventory[fruitName] += quantity
        }else{
            this.inventory[fruitName] = quantity
        }
    }

    getinventory():void{
        console.log(this.inventory);
        
    }
}

