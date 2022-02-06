// Gallery item filter 

const filterButtons = document.querySelector('#filter-btns').children;
const items = document.querySelector('.portfolio-gallery').children;

for(let i = 0; i < filterButtons.length; i++){
    filterButtons[i].addEventListener('click', function () {
        for (let j = 0; j < filterButtons.length; j++){
            filterButtons[j].classList.remove('active');
        }
        this.classList.add('active');
        const target = this.getAttribute('data-target');

        for (let k = 0; k < items.length; k++){
            items[k].style.display = 'none';
            if(target == items[k].getAttribute('data-id')){
                items[k].style.display = 'block';
            }

            if(target == 'all'){
                items[k].style.display = 'block';
            }
        }
           
    })
}

// Light Box

const closeLightBox = document.querySelector('.close-lightbox');
const lightBox = document.querySelector('.lightbox');
const lightBoxImage = lightBox.querySelector('img');

lightBox.addEventListener('click', function (event) {
    if(event.target != lightBoxImage){
        lightBox.classList.remove('show');
        lightBox.classList.add('hide');
    }
})

closeLightBox.addEventListener('click', function () {
    lightBox.classList.remove('show');
    lightBox.classList.add('hide');
})

const gallery = document.querySelector('.portfolio-gallery');
const galleryItem = gallery.querySelectorAll('.item');

galleryItem.forEach(function (element){
    element.querySelector('.fa-plus').addEventListener('click', function (){
        lightBox.classList.remove('hide');
        lightBox.classList.add('show');
        lightBoxImage.src = element.querySelector('img').getAttribute('src')
    })
})


// Header fixed

window.onscroll = function () {
    const docScrollTop = document.documentElement.scrollTop;

    if(window.innerWidth > 991){
        if(docScrollTop > 100){
            document.querySelector('header').classList.add('fixed');
        }else{
            document.querySelector('header').classList.remove('fixed');
        }
    }
}

// Ham-burger

const hamBurger = document.querySelector('.ham-burger');

hamBurger.addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('show');
    hamBurger.classList.toggle('active');
})


// Nav bar links

const navBar = document.querySelector('.navbar');
var arr = navBar.querySelectorAll('a');

arr.forEach(function (element) {
    element.addEventListener('click', function(){
        for(let i = 0; i < arr.length; i++){
            arr[i].classList.remove('active');
            hamBurger.classList.remove('active');
        }

        this.classList.add('active');
        //document.querySelector('.navbar').classList.toggle('show');
    })
})

