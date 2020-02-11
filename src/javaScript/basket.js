document.addEventListener('DOMContentLoaded', () => {
    let cartTemplate = document.querySelector('#basket_template');
    const list = document.querySelector(".basket_infobar");
    let choises = localStorage.getItem("hifiCornerCart");
    let obj = JSON.parse(choises);
    let priceArray = [];

    console.log(obj);

    obj.forEach(element => {
          
        const clone = cartTemplate.content.cloneNode(true);
        let price = element.pris.match(/\d+/g, '')
        let intPris = parseInt(price, 10);
        let momsPris = intPris * 0.2;

        priceArray.push(intPris) 

        clone.querySelector('.basket_lsvaretext').innerText = element.produktnavn;
        clone.querySelector('.basket_lsvaremoms').innerText = momsPris;
        clone.querySelector('.basket_lsvarepris').innerText = intPris;
        list.appendChild(clone);

    });
        let totalprice = priceArray.reduce((a, b) => a + b, 0)
        let totalmomsprice = totalprice * 0.2;

        document.querySelector('.basket_totalmoms').innerText = totalmomsprice;
        document.querySelector('.basket_totalpris').innerText = totalprice;
})