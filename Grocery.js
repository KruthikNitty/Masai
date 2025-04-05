function GroceryItem(){
    let cart=[]
    cart.push("Apples")
    cart.push("Bnanas")
    cart.push("Bread")
    cart.push("Milk")
    let removedItems=cart.pop()
    return{
        totalItems:cart.length,
        items:cart,
        removed:removedItems
    }
}
console.log(GroceryItem())