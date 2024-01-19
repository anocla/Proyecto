'use strict'
// Cuando haces click en .header__btn, .header__nav  le toggle move

const headerBtn = document.querySelector('.header__btn')
const headerNav = document.querySelector('.header__nav')
console.log(headerBtn)
console.log(headerNav)


headerBtn.addEventListener('click' , () =>{
    headerNav.classList.toggle('move')
})










// Creo la constante .grid__img para seleccionar todas las imágenes //
const images = document.querySelectorAll('.grid__img')
// Creo la constante .container__img para seleccionarla //
const containerImg = document.querySelector('.container__img')

// Creo la constante .show__img para selccionarla //
const imageContainer = document.querySelector('.show__img')

// 
const spanImg = document.querySelector(".show__span")

const pImg = document.querySelector(".show__p")


// Utilizamos el método forEach para recorrer toda la lista de nodos, todos los .grid__img //
images.forEach(image => {
    
    // A cada imagen le añadimos un evento/función: 
    // cuando haces click en .grid__img, le envío a la función addImg los atributos 'src', 'alt' e 'id' //
    image.addEventListener('click', () => {
        addImage(image.getAttribute('src'), image.getAttribute('alt'), image.getAttribute('id'))
    })
})
// Creo la función addImage con los parámetros srcImage, altImage e idImage //
const addImage = (srcImage, altImage,idImage) => {
    // Cuando haces click en .container__img le toggle la clase .active (añade o quita translateX(0)),
    // Le añade cada valor de cada atributo
    containerImg.classList.toggle('active')
    // A .show__img le añado los valores 'src' y 'alt'
    imageContainer.src = srcImage
    imageContainer.alt = altImage
    // imageContainer.id = idImage

    // Utilizando el método forEach recorremos las images de .grid__img según su 'id'  
    images.forEach(image => {
        console.log(image)
        // Cuando el id de la imagen cumpla la condición, se le añade un valor a .show__span y a .show__p
        if (idImage == "img1") {
            spanImg.innerHTML = "8M"
            pImg.innerHTML = "Ilustación animada sobre Marina Ginesta para reivindicar el día de la mujer y la participación de éstas en las calles. Con la barbilla tan alta como los puños, el 8 de marzo a las calles y todos los días a la lucha."
            
        }
        else if(idImage == "img2"){
            spanImg.innerHTML = "Fatima Hamed"
            pImg.innerHTML = "Otras políticas"
        }
        else if(idImage == "img3"){
            spanImg.innerHTML = "Prohibido nacer"
            pImg.innerHTML = "Proyecto personal de diseño de la portada del libro Prohibido nacer de Trevor Noah."
        }
        else if(idImage == "img4"){ 
            spanImg.innerHTML = "Sanitarios"
            pImg.innerHTML = "Ilustración animada para fomentar durante la pandemia producida por el COVID19 a quedarse en casa. Además de animar y agradecer su esfuerzo al personal sanitario."
        }
        else if(idImage == "img5"){ 
            spanImg.innerHTML = "Desde casa juntas"
            pImg.innerHTML = "A raíz de la declaración del estado de alarma, las mujeres víctimas de la violencia machista se enfrentan a una doble situación de riesgo, puesto que pueden encontrarse confinadas junto a su agresor. El servicio telefónico del 016 está disponible en 52 idiomas y también para personas con discapacidad auditiva o del habla."
        }
        else if(idImage == "img6"){ 
            spanImg.innerHTML = "Quédate en casa"
            pImg.innerHTML = "Ilustración dedicada al cuidado de nuestros abuelos, de nuestros mayores."
        }
        else if(idImage == "img7"){ 
            spanImg.innerHTML = "Diamante de sangre"
            pImg.innerHTML = "Cartel sobre la película Diamante de sangre."
        }
        else if(idImage == "img8"){ 
            spanImg.innerHTML = "VERD!"
            pImg.innerHTML = "Propuesta para la exposición colectiva, organizada por la APIV, para luchar y concienciar sobre el daño al medioambiente."
        }
        else if(idImage == "img9"){ 
            spanImg.innerHTML = "Escritoras"
            pImg.innerHTML = "Este proyecto se llama  A la sombra y este fanzine es  ‘Escritoras’. Será el primer fanzine de una serie, cada uno tratará un gremio, centrado en la represión sobre el género femenino a lo largo de la historia."
        }
        else if(idImage == "img10"){ 
            spanImg.innerHTML = "Cuando podamos"
            pImg.innerHTML = "Ilustración dedicada a la espera, al reencuentro con los nuestros después del COVID."
        }
        else if(idImage == "img11"){ 
            spanImg.innerHTML = "Emmeline Pankhurst"
            pImg.innerHTML = "Activista política británica y líder del movimiento sufragista, el cual ayudó a las mujeres a ganar el derecho a votar en Gran Bretaña."
        }
        else if(idImage == "img12"){ 
            spanImg.innerHTML = "La voz dormida"
            pImg.innerHTML = "Portada para la novela de Dulce Chacón, La voz dormida. Proyecto personal."
        }
        else if(idImage == "img13"){ 
            spanImg.innerHTML = "USA"
            pImg.innerHTML = "Proyecto personal de prensa sobre la sanidad de Estados Unidos. Especialmente sobre su desprotección a los ciudadanos, más vulnerables, en la crisis del Coronavirus."
        }
        else if(idImage == "img14"){ 
            spanImg.innerHTML = "Instrumental"
            pImg.innerHTML = "Proyecto personal de diseño de la portada del libro Instrumental de James Rhodes."
        }
        else if(idImage == "img15"){ 
            spanImg.innerHTML = "La creación"
            pImg.innerHTML = "Pintura mural realizada en  2020 sobre como el uso de las tecnologías afecta a nuestro entorno y vidas cotidianas."
        }
        else if(idImage == "img16"){ 
            spanImg.innerHTML = "25N"
            pImg.innerHTML = "Proyecto personal de diseño del día Internacional para la eliminación de la violencia contra la mujer."
        }
        else if(idImage == "img17"){ 
            spanImg.innerHTML = "8M 2021"
            pImg.innerHTML = "Trabajo digital creado para el día de la mujer. Basado en Angela Davis y el feminismo interseccional."
        }
        else if(idImage == "img18"){ 
            spanImg.innerHTML = "Corazones fértiles"
            pImg.innerHTML = "Algunos corazones son fértiles. Primer proyecto de ilustración animada."
            
        }

    })


}
// Si tiene la clase active le toggle a .container__img para que se translade el -100%
containerImg.addEventListener('click', () => {
    containerImg.classList.toggle('active')
})