/*SLIDER - Passagem de dados*/
 /*Tipo Carrossel*/

// Slider Foods
 const controls = document.querySelectorAll(".control");
 let currentItem = 0;
 const items = document.querySelectorAll(".drink");
 const maxItems = items.length;


 controls.forEach((control) => {
    
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left");

        if(isLeft){
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        
        if(currentItem >= maxItems){
            currentItem = 0;
        }

    
        if(currentItem <0) {
            currentItem = maxItems - 1;
        }

        
        items.forEach(item => item.classList.remove("current-drink"));


        
        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        });

        
        items[currentItem].classList.add("current-drink");

    })
 }) 


 /*Slider Food */
const controlsFood = document.querySelectorAll(".control-food");
let currentItemFood = 0;
const itemsFood = document.querySelectorAll(".food");
const maxItemsFood = itemsFood.length;

controlsFood.forEach((controlFood) => {
    controlFood.addEventListener("click", () => {
        const isLeftFood = controlFood.classList.contains("arrow-left-food");

        if(isLeftFood){
            currentItemFood -= 1;
        } else {
            currentItemFood += 1;
        }

        if(currentItemFood >= maxItemsFood){
            currentItemFood = 0;
        }

        if(currentItemFood <0) {
            currentItemFood = maxItemsFood - 1;
        }

        itemsFood.forEach(itemF => itemF.classList.remove("current-food"));


        itemsFood[currentItemFood].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        });

        itemsFood[currentItemFood].classList.add("current-food");

    })
});

// Slider Movies
const controlsMovie = document.querySelectorAll(".control-movie");
let currentItemMovie = 0;
const itemsMovie = document.querySelectorAll(".movie");
const maxItemsMovie = itemsMovie.length;


controlsMovie.forEach((controlMovie) => {
    controlMovie.addEventListener("click", () => {
        const isLeftMovie = controlMovie.classList.contains("arrow-left-movies");

        if(isLeftMovie){
            currentItemMovie -= 1;
        } else {
            currentItemMovie += 1;
        }

        if(currentItemMovie >= maxItemsMovie){
            currentItemMovie = 0;
        }

        if(currentItemMovie <0) {
            currentItemMovie = maxItemsMovie - 1;
        }

        itemsMovie.forEach(itemM => itemM.classList.remove("current-movie"));

        itemsMovie[currentItemMovie].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        });

        itemsMovie[currentItemMovie].classList.add("current-movie");

    })
});


// Scroll Header
const menu = document.querySelector('.home-nav');
const about = document.querySelector('.about-nav');
const topSellers = document.querySelector('.top-sellers-nav');
const movies = document.querySelector('.movies-nav');
const address = document.querySelector('.address-nav');


function activeScrolls() {
    menu.classList.toggle('style-menu', scrollY < 900); 
    about.classList.toggle('style-menu', scrollY > 900 && scrollY < 2000);
    topSellers.classList.toggle('style-menu', scrollY > 2000 && scrollY < 3150);
    movies.classList.toggle('style-menu', scrollY > 3150 && scrollY < 3875);
    address.classList.toggle('style-menu', scrollY > 3875 && scrollY < 4200);


    
}

window.addEventListener('scroll', activeScrolls);