document.addEventListener('DOMContentLoaded', function(){

    let slide = [
            
        "./Assets/images/pladespillere.jpg",
        "./Assets/images/headphones.jpg",
        "./Assets/images/hoejttaler.jpg",
        "./Assets/images/shop.jpg"
    ];

    let i = 0;

    let imgElement = document.querySelector('.picture-slider__img');

    function timer (){
    setInterval(callBack, 4000);
    }

    function callBack(){
        if(i > slide.length-1){i = 0}
        imgElement.setAttribute('src', slide[i]);
        i++;
    }  

    let arrowRight = document.querySelector('.picture-slider__right');
    let arrowLeft = document.querySelector('.picture-slider__left');

    arrowLeft.addEventListener('click', () => {

        i--;

        if(i < 0 ){i = slide.length -1}
        imgElement.setAttribute('src', slide[i]);
        timer();
    })

    arrowRight.addEventListener('click', () => {
        i++;
        if(i > slide.length-1){i = 0}
        imgElement.setAttribute('src', slide[i]);
        timer();
    })

    timer();

        

}); //DOM