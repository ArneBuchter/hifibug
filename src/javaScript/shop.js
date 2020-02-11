document.addEventListener('DOMContentLoaded', () => {

    let cardElement = document.querySelector('.shop__products');
    let leftNav = document.querySelector('.shop__categories'); 
    let manuNav = document.querySelector('#man');
    let params = new URLSearchParams(document.location.search);
    const categoryList = params.get('Category');
    const manufacturerList = params.get('manufacturer');

    getMan();
    getNav(); 
    getmake();
    getPris();
    addToCart();
    
    if(categoryList || manufacturerList){
        getCategori();
    }
    
    else{
        getProducts();
    }

    function getCategori () {

        fetch(`https://hifi-corner.herokuapp.com/api/v1/products?category=${categoryList}`, {
            "method": "GET"
            })
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {                                                                          
                    cardElement.innerHTML += rendercard(item);
                });
            })
            .catch(err => console.error(err));         
                                        
    }

    function getNav() {
            fetch("https://hifi-corner.herokuapp.com/api/v1/categories", {
            "method": "GET"
            })
            .then(response => response.json())
            .then(data => {
                data.forEach(element => {                                                                       
                    leftNav.innerHTML += `
                    <li class="shop__items"><a href="index.html?Category=${element}" class="shop__link">${element}</a></li>
                    ` 
                }); 
            })
            .catch(err => console.error(err));                                                
    }

    function getMan() {
        let count;

        fetch(`https://hifi-corner.herokuapp.com/api/v1/products?make=${manufacturerList}`, {
        "method": "GET"
        })
        .then(response => response.json())
        .then((resultat) => { 
            
            count = resultat.length
        });
        fetch("https://hifi-corner.herokuapp.com/api/v1/brands", {
            "method": "GET"
        })
            .then(response => response.json())
            .then((data) => {
                data.forEach(manifacturer => {
                    manuNav.innerHTML += `
                        <li class="shop__items"><a href="index.html?manufacturer=${manifacturer.name}" class="shop__link">${manifacturer.name}(<span class="shop__amount">${count}</span>)</a></li>
                        `
                        document.querySelector('.shop_num').innerText = count;
                });
            
            })
            .catch(err => console.error(err));  
            
    }

    function getmake () {
        fetch(`https://hifi-corner.herokuapp.com/api/v1/products?make=${manufacturerList}`, {
        "method": "GET"
        })
        .then(response => response.json())
        .then((data) => {
            data.forEach(make => {
                cardElement.innerHTML += rendercard(make); 
            });
            
        
        })
        .catch(err => console.error(err));  
    }
    
    function rendercard(element) {
        return `
            <figure class="card__holder">   
                <a href="../single-product/index.html?sku=${element.sku}" class="card__link">    
                    <img class="card__img" src="${element.images}" alt="" srcset="">
                </a>
                    <a href="../single-product/index.html?sku=${element.sku}" class="card__text">${element.category} ${element.make}</a>
                    <p class="card__pris"><span class="card__tegn">$</span>${element.price}</p>
                <button class="card__cart">add to cart</button>        
            </figure>
            `
    }
    
    function getProducts() {

        fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
            "method": "GET"
            })
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {                                                                          
                    cardElement.innerHTML += rendercard(item);
                });
            })
            .catch(err => console.error(err));
                

    } 
    
    function getPris() {
        fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
            "method": "GET"
            })
            .then(response => response.json())
            .then(data => {                
               
                let one = document.querySelector('#one');
                let two = document.querySelector('#two');
                let three = document.querySelector('#three');
                let four = document.querySelector('#four');
                let five = document.querySelector('#five');
                let six = document.querySelector('#six');
                
                let oneamount = 0;
                let twoamount = 0;
                let threeamount = 0;
                let fouramount = 0;
                let fiveamount = 0;
                let sixamount = 0;
                let pricegroups = {one: [], two: [], three: [], four: [], five: [], six: []}
                
                data.forEach((produkt) => {
                     
                    if(produkt.price > 0 && produkt.price <= 799) {
                        oneamount++
                        pricegroups.one.push(produkt)
                        one.innerHTML = oneamount;
                    } else if(produkt.price >799 && produkt.price <= 999){
                        pricegroups.two.push(produkt)
                        twoamount++
                        two.innerHTML = twoamount;
                    } else if(produkt.price >999 && produkt.price <= 1499){ 
                        pricegroups.three.push(produkt)
                        threeamount++
                        three.innerHTML = threeamount; 
                    } else if(produkt.price >1500 && produkt.price <= 1999){
                        pricegroups.four.push(produkt)
                        fouramount++
                        four.innerHTML = fouramount;   
                    }else if(produkt.price >1999 && produkt.price <= 2999){
                        pricegroups.five.push(produkt)
                        fiveamount++
                        five.innerHTML = fiveamount;          
                    } else if(produkt.price >2999){
                        pricegroups.six.push(produkt)
                        sixamount++
                        six.innerHTML = sixamount;    
                    }
    

                    
                        
                });
                    one.parentNode.addEventListener('click',function(e){
                        e.preventDefault();
                        cardElement.innerHTML = "";
                        pricegroups.one.forEach(element => {                                                                          
                            cardElement.innerHTML += rendercard(element);
                        });
                    })
                    two.parentNode.addEventListener('click',function(e){
                        e.preventDefault();
                        cardElement.innerHTML = "";
                        pricegroups.two.forEach(element => {                                                                          
                            cardElement.innerHTML += rendercard(element);
                        });
                    })
                    three.parentNode.addEventListener('click',function(e){
                        e.preventDefault();
                        cardElement.innerHTML = "";
                        pricegroups.three.forEach(element => {                                                                          
                            cardElement.innerHTML += rendercard(element);
                        });
                    })
                    four.parentNode.addEventListener('click',function(e){
                        e.preventDefault();
                        cardElement.innerHTML = "";
                        pricegroups.four.forEach(element => {                                                                          
                            cardElement.innerHTML += rendercard(element);
                        });
                    })
                    five.parentNode.addEventListener('click',function(e){
                        e.preventDefault();
                        cardElement.innerHTML = "";
                        pricegroups.five.forEach(element => {                                                                          
                            cardElement.innerHTML += rendercard(element);
                        });
                    })
                    six.parentNode.addEventListener('click',function(e){
                        e.preventDefault();
                        cardElement.innerHTML = "";
                        pricegroups.six.forEach(element => {                                                                          
                            cardElement.innerHTML += rendercard(element);
                        });
                    });
        
            })
    }
    
        
                
            

})
                
        