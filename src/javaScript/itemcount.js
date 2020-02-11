function addToCart() {

    let addButton = document.querySelector('.shop__products');
    let cartLength = document.querySelector('.num');

    const basketModule = (function(){

        let basket = [];
        let constructItem = (vareParameter, prisParameter) => {
    
            return {
                produktnavn: vareParameter, 
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
    
    
    addButton.addEventListener('click', (button) => {
        
        if(button.target.innerText == 'add to cart'){
            let vareNavn = button.target.parentElement.querySelector('.card__text').innerText;
            let prisNavn = button.target.parentElement.querySelector('.card__pris').innerText;
            
            basketModule.addToBasket(vareNavn, prisNavn);
            let itemCount = basketModule.basketTotalItems();
            cartLength.innerHTML = itemCount

            let items = basketModule.getBasket();
            console.log(items)
            let itemId = button.target.parentElement.querySelector('.card__link').href
        
            console.log(itemId)
            
            let cartItems = JSON.stringify(items);
            let key = "hifiCornerCart"
            localStorage.setItem(key, cartItems);
            
        }
    })
}
