document.addEventListener('DOMContentLoaded', () => {
    let params = new URLSearchParams(document.location.search);
    const skuList = params.get('sku');
    let mainElement = document.querySelector('.single-produkt__grid');

    fetch(`https://hifi-corner.herokuapp.com/api/v1/products/${skuList}`, {
        "method": "GET"
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        

             
           mainElement.innerHTML =`
            <figure class="single-produkt__img-holder"><img class="single-produkt__img" src="${data.images}" alt="" srcset=""></figure>
        <section class="single-produkt__infobox">
            <h2 class="single-produkt__heading">${data.category} ${data.make}</h2>
            <div class="single-produkt__displaybox single-produkt__footer-text"><p class="single-produkt__left">SEE OTHER ${data.make} PRODUCTS</p><p class="single-produkt__pris">£ ${data.price}</p></div>
            <p class="single-produkt__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, praesentium voluptatum nisi obcaecati numquam dicta laboriosam sapiente aliquid pariatur! Labore, perspiciatis est quo molestias porro ea explicabo atque exercitationem, sint mollitia eveniet fuga, nesciunt nulla maiores modi non! Neque unde similique quas nihil maxime ex tenetur commodi odio, voluptatibus suscipit.</p>
            <div class="single-produkt__flex">
                <button class="single-produkt__button">ASK A QUESTION</button>
                <button class="single-produkt__button">PART EXCHANGE</button>
                <button class="single-produkt__button">PAY BY FINANCE</button>
                <button class="single-produkt__button">SEEN A BETTER PRICE?</button>                    
            </div>
            <div class="single-produkt__addtocart">
                <p class="addtocart__text">finish</p>
                <p class="addtocart__req">* Required</p>
                <select class="addtocart__select" name="black" id="">Black</select>
                <select class="addtocart__select addtocart__select_grid-place" name="silver" id="">Silver</select>
            </div>
            <div class="single-produkt__addtocart-bottom">
                <span class="addtocart_text">Qty:</>
                <span class="addtocart__number">1</span><br/>
                <button class="single-produkt__button">ADD TO CART</button>
                <p class="addtocart__text">-OR-</p>
                <i class="fab fa-cc-paypal addtocart__paypall"></i>
            </div>
        </section>
        <figure class="single-produkt__galleri">
            <p class="single-produkt__heading">MORE VIEWS</p>
            <div class="single-produkt__showbox">
                <div class="single-produkt__placeholder"><img class="single-product__image" src="${data.images}" alt="" srcset=""></div>
                <div class="single-produkt__placeholder"><img class="single-product__image" src="/assets/images/furniture.jpg" alt="" srcset=""></div>
                <div class="single-produkt__placeholder"><img class="single-product__image" src="/assets/images/shop-now.jpg" alt="" srcset=""></div>
            </div>

        </figure>
        <div class="extra-info">
            <p class="single-produkt__heading">Additional information</p>
            <div class="single-produkt__gridtable">
                <p class="single-produkt__black-text single-produkt__black-text__bg">MANUFACTURER</p>
                <p class="single-produkt__black-text">${data.make}</p>
                <p class="single-produkt__black-text single-produkt__black-text__bg">MANUFACTURER LINK</p>
                <p class="single-produkt__black-text ">www.${data.make.replace(/\s/g,"")}.com</p>
                <p class="single-produkt__black-text single-produkt__black-text__bg">FREE WARRENTY</p>
                <p class="single-produkt__black-text">3 years</p>
                <p class="single-produkt__black-text single-produkt__black-text__bg">DELIVERY CHARGE</p>
                <p class="single-produkt__black-text ">Free</p>
                <p class="single-produkt__black-text single-produkt__black-text__bg">DELIVERY TIME</p>
                <p class="single-produkt__black-text">1 - 5 Working Days</p>
                <p class="single-produkt__black-text single-produkt__black-text__bg">CARD SURCHARGES</p>
                <p class="single-produkt__black-text">No</p>
            </div>
        </div>
        <aside class="single-produkt__discription">
            <p class="single-produkt__heading">DESCRIPTION</p>
            <div class="single-produkt__grid-description">
                <p class="single-produkt__description-text">Power output (8 / 4 ohm RMS)</p>
                <p class="single-produkt__description-text">45 W / 60 W / 10 Hz</p>
                <p class="single-produkt__description-text">Frequency Response</p>
                <p class="single-produkt__description-text">X 70 kHz</p>
                <p class="single-produkt__description-text">Total Harmonic Discription</p>
                <p class="single-produkt__description-text">0.08 %</p>
                <p class="single-produkt__description-text">Damping Factor</p>
                <p class="single-produkt__description-text">100</p>
                <p class="single-produkt__description-text">Input Sensitivity MM</p>
                <p class="single-produkt__description-text">2.2 mV / 47 kOhm</p>
                <p class="single-produkt__description-text">input Sensitivity MC</p>
                <p class="single-produkt__description-text">X</p>
                <p class="single-produkt__description-text">Signal to Noise Ratio: MM / MC</p>
                <p class="single-produkt__description-text">83 dB / X</p>
                <p class="single-produkt__description-text">Input Sensitivity: High level</p>
                <p class="single-produkt__description-text">X</p>
                <p class="single-produkt__description-text">Input Sensitivity: Balanced High level</p>
                <p class="single-produkt__description-text">200 mV / 20 kOhm</p>
                <p class="single-produkt__description-text">Signal to Noise Ratio: High level</p>
                <p class="single-produkt__description-text">102 dB(2V input)</p>
                <p class="single-produkt__description-text">Input Sensitivity: Power Amp Direct IN</p>
                <p class="single-produkt__description-text">X</p>
                <p class="single-produkt__description-text">Signal to Noise Ration: Power Amp Direct IN</p>
                <p class="single-produkt__description-text">X</p>
            </div>
        </aside>
    </article>
            `
             
        }).catch(err => console.error(err));   
        
                      

}); //DOM