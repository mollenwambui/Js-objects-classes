class KioskCalc{
    constructor(fruit,quantity){
        this.fruit=fruit;
        this.quantity=quantity;
        this.fruitPriceList={"Orange":30, "Strawberry":60,"Raspberry":50};
        this.getCost=function(){
            return`${quantity} ${fruit} for KES ${quantity*this.fruitPriceList.Orange}`
        }
    }
}

var kioskOne=new KioskCalc("Orange",2);
console.log(kioskOne.getCost());