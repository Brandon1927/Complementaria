// Variables del lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");
const galleryImages = document.querySelectorAll("img[class^='img']"); // Selecciona todas las imágenes cuya clase empieza con 'img'
const res1 = document.getElementById("res1");
let btnRes1 = document.getElementById("btnRes1");
const res2 = document.getElementById("res2");
let btnRes2 = document.getElementById("btnRes2");
const res3 = document.getElementById("res3");
let btnRes3 = document.getElementById("btnRes3");
const res4 = document.getElementById("res4");
let btnRes4 = document.getElementById("btnRes4");
const res5 = document.getElementById("res5");
let btnRes5 = document.getElementById("btnRes5");
let salidaPar = document.getElementById("salidaPar")
let salidaPar1 = document.getElementById("salidaPar1")
let salidaPar2 = document.getElementById("salidaPar2")
let salidaPar3 = document.getElementById("salidaPar3")
let salidaPar4 = document.getElementById("salidaPar4")

let currentIndex = 0;

btnRes1.addEventListener("click", ()=>{

    salidaPar.innerHTML = "";

    if(res1.value.trim() === ""){
        alert("Por favor ingresa el valor del problema 1.");
        return;
    }

    const numRes1 = Number(res1.value);

    if(numRes1 == (0.3 || 0.30)){
        let hijo = document.createElement("h3");
        hijo.innerHTML = "✔️ El resultado es correcto, lo consumido por el bombillo fue 0.3 kWh.";
        salidaPar.appendChild(hijo);
    }
    else{
        let hijo = document.createElement("h3");
        hijo.innerHTML = `❌ El resultado es incorrecto, lo consumido por el bombillo no es ${numRes1} kWh.`;
        salidaPar.appendChild(hijo);
    }
})

btnRes2.addEventListener("click", ()=>{

    salidaPar1.innerHTML = "";

    if(res2.value.trim() === ""){
        alert("Por favor ingresa el valor del problema 2.");
        return;
    }

    const numRes2 = Number(res2.value);

    if(numRes2 == 3.75){
        let hijo1 = document.createElement("h3");
        hijo1.innerHTML = "✔️ El resultado es correcto, la cocina eléctrica consumió 3.75 kWh.";
        salidaPar1.appendChild(hijo1);
    }
    else{
        let hijo1 = document.createElement("h3");
        hijo1.innerHTML = `❌ El resultado es incorrecto, la cocina eléctrica no consumió ${numRes2} kWh.`;
        salidaPar1.appendChild(hijo1);
    }
})

btnRes3.addEventListener("click", ()=>{

    salidaPar2.innerHTML = "";

    if(res3.value.trim() === ""){
        alert("Por favor ingresa el valor del problema 3.");
        return;
    }

    const numRes3 = Number(res3.value);

    if(numRes3 == 3.36){
        let hijo = document.createElement("h3");
        hijo.innerHTML = "✔️ El resultado es correcto, el televisor consumió 3.36 kWh en una semana.";
        salidaPar2.appendChild(hijo);
    }
    else{
        let hijo = document.createElement("h3");
        hijo.innerHTML = `❌ El resultado es incorrecto, el televisor no consumió ${numRes3} kWh en una semana.`;
        salidaPar2.appendChild(hijo);
    }
})

btnRes4.addEventListener("click", ()=>{

    salidaPar3.innerHTML = "";

    if(res4.value.trim() === ""){
        alert("Por favor ingresa el valor del problema 4.");
        return;
    }

    const numRes4 = Number(res4.value);

    if(numRes4 == 3.36){
        let hijo = document.createElement("h3");
        hijo.innerHTML = "✔️ El resultado es correcto, el ventilador consumió 13.5 kWh en el mes.";
        salidaPar3.appendChild(hijo);
    }
    else{
        let hijo = document.createElement("h3");
        hijo.innerHTML = `❌ El resultado es incorrecto, el ventilador no consumió ${numRes4} kWh en el mes.`;
        salidaPar3.appendChild(hijo);
    }
})

btnRes5.addEventListener("click", ()=>{

    salidaPar4.innerHTML = "";

    if(res5.value.trim() === ""){
        alert("Por favor ingresa el valor del problema 5.");
        return;
    }

    const numRes5 = Number(res5.value);

    if(numRes5 == (18.00 || 18)){
        let hijo = document.createElement("h3");
        hijo.innerHTML = "✔️ El resultado es correcto, el costo total fue de $18.00 por los 30 días.";
        salidaPar4.appendChild(hijo);
    }
    else{
        let hijo = document.createElement("h3");
        hijo.innerHTML = `❌ El resultado es incorrecto, el costo total no fue de $${numRes5} por los 30 días.`;
        salidaPar4.appendChild(hijo);
    }
})

// Función para abrir el lightbox
function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "block";
  lightboxImg.src = galleryImages[index].src;
  console.log(`Abriendo lightbox para la imagen en el índice: ${index}`);
}

// Función para cerrar el lightbox
function closeLightbox() {
  lightbox.style.display = "none";
}

// Función para mostrar la siguiente imagen
function showNextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
}

// Función para mostrar la imagen anterior
function showPrevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
}

// Asignamos el evento a cada imagen para abrir el lightbox al hacer clic
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    console.log(`Imagen ${index + 1} clickeada`); // Esto te dirá si se está disparando el evento
    openLightbox(index);
  });
});

// Evento para cerrar el lightbox
closeBtn.addEventListener("click", closeLightbox);

// Cerrar lightbox al hacer clic fuera de la imagen
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Navegación con teclado
window.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "block") {
      if (e.key === "ArrowRight") {
        showNextImage();
      } else if (e.key === "ArrowLeft") {
        showPrevImage();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    }
});