function calculateFruitCost(fruitName,quantity){
    const fruits={
        orange:40.00,
        mango:30.00,
        apple:50.00,
        Avocado:60.00

    }
    for( let i in fruits){
        fruitName=fruits[i]
        totalPrice=fruitName*quantity
        console.log(`The total price of ${quantity} ${i} is ${totalPrice}` )
    }
     
    }

calculateFruitCost(['orange'],5)



