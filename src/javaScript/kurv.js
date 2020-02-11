

const basketModule = (function(){

    let basket = [];
    let constructItem = (vareParameter, prisParameter) => {

        return {
            vare: vareParameter, 
            pris: prisParameter
        }
    }

    return {
        addToBasket: (vareParameter, prisParameter) => {
            let item = constructItem(vareParameter, prisParameter)
            basket.push(item)
        },
        basketTotalItems: () => {
            return basket.length;
        },
        getBasket: () => {
            return basket;
        },
        getTotalPrice: function () {

            let items = this.getBasket();
            let itemPrices = items.map(item => item.pris)
            console.log(itemPrices)

            return itemPrices.reduce((accumulator, currentvalue) => {
                return accumulator + currentvalue
            })
            
            
        }
    }
})();

basketModule.addToBasket("Ost", 56);
let itemCount = basketModule.basketTotalItems();
console.log(itemCount)

basketModule.addToBasket("Brød", 37);
itemCount = basketModule.basketTotalItems();

basketModule.addToBasket("syntetisk", 38)
let items = basketModule.getBasket();
console.log(items)

let tPrice = basketModule.getTotalPrice();
console.log(tPrice)