/**Variables*/

/***********NavBar Variables************/

const navBarToggleButton = document.querySelector(".nav-bar-open-menu");
const navBarList = document.querySelector(".nav-bar-list");
const navBarButton = document.querySelectorAll(".nav-bar-button");

/**Variables de la seccion Trayectoria**/

const numeroDeSucursales = document.getElementById("sucursales-num");

/************Reseñas Variables**********/

const reviews = document.querySelector(".reviews");
const prevBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");
const usersReviews = [
    {
        userName : "Pedro Gonzales",
        review : "Estamos muy contentos con el servicio de la empresa",
        photo: "",
        defaultPhoto: "C:\\Users\\leito\\Documents\\Programacion\\WebDev\\RentACar\\src\\Assets\\icon.jpg",
        score: 4.7,
    },
    {
        userName : "Martin Echenique",
        review : "Todo mas que satisfactorio",
        photo: "",
        defaultPhoto: "C:\\Users\\leito\\Documents\\Programacion\\WebDev\\RentACar\\src\\Assets\\icon.jpg",
        score: 4.7,
    },
    {
        userName : "Maria Garcia",
        review : "La mejor decision siempre es rentar un Rent This Car",
        photo: "",
        defaultPhoto: "C:\\Users\\leito\\Documents\\Programacion\\WebDev\\RentACar\\src\\Assets\\icon.jpg",
        score: 4.7,
    },
    {
        userName : "Pedro Gonzales",
        review : "Manejamos 15.000kms y nunca tuvimos ninguna problema",
        photo: "",
        defaultPhoto: "C:\\Users\\leito\\Documents\\Programacion\\WebDev\\RentACar\\src\\Assets\\icon.jpg",
        score: 4.7,
    },
    {
        userName : "Marcelo Estigarribia",
        review : "Recomendable",
        photo: "",
        defaultPhoto: "C:\\Users\\leito\\Documents\\Programacion\\WebDev\\RentACar\\src\\Assets\\icon.jpg",
        score: 4.7,
    },
    {
        userName : "Matias Buscaglia",
        review : "Servicio premium para el pais",
        photo: "",
        defaultPhoto: "C:\\Users\\leito\\Documents\\Programacion\\WebDev\\RentACar\\src\\Assets\\icon.jpg",
        score: 4.7,
    },
    {
        userName : "Nestor Burruchaga",
        review : "Conforme",
        photo: "",
        defaultPhoto: "C:\\Users\\leito\\Documents\\Programacion\\WebDev\\RentACar\\src\\Assets\\icon.jpg",
        score: 4.7,
    }
]
let index = 0;

/**********Nuestros Carros Variables***********/

const carros = [
    {
        id: "sandero-img-btn",
        tittle : "Renault Sandero",
        modelo : "Renault Sandero 1.4 N",
        consumo : "6lts/100kms",
        ocupantes : 5,
        velCrucero : 100,
        pXdia : 10,
        pXsem : 55,
        pXmes : 200,
        dispoibilidad : true,
        photo : "C:\\Users\\leito\\Documents\\Programacion\\WebDev\\RentACar\\src\\Assets\\sandero-img1-fondoblanco.jpg"
    },
    {
        id: "corolla-img-btn",
        tittle : "Toyota Corolla",
        modelo : "Toyota Corolla 1.6 N",
        consumo : "7lts/100kms",
        ocupantes : 5,
        velCrucero : 120,
        pXdia : 12,
        pXsem : 60,
        pXmes : 220,
        dispoibilidad : false,
        photo : "C:\\Users\\leito\\Documents\\Programacion\\WebDev\\RentACar\\src\\Assets\\corolla-img1-fondoBlanco.jpg"
    },
    {
        id: "tiguan-img-btn",
        tittle : "Volkswagen Tiguan",
        modelo : "Volkswagen Tiguan 1.8 N",
        consumo : "7.5lts/100kms",
        ocupantes : 5,
        velCrucero : 120,
        pXdia : 13,
        pXsem : 62,
        pXmes : 230,
        dispoibilidad : true,
        photo : "C:\\Users\\leito\\Documents\\Programacion\\WebDev\\RentACar\\src\\Assets\\tiguan-img1-fondo-blanco.jpg"
    },
    {
        id: "amarok-img-btn",
        tittle : "Volkswageb Amarok",
        modelo : "Volkswageb Amarok 2.5 TDI",
        consumo : "10lts/100kms",
        ocupantes : 5,
        velCrucero : 120,
        pXdia : 15,
        pXsem : 90,
        pXmes : 270,
        dispoibilidad : true,
        photo : "C:\\Users\\leito\\Documents\\Programacion\\WebDev\\RentACar\\src\\Assets\\amarok-img1-fondoBlanco.jpg"
    },
    {
        id: "mercedez-img-btn",
        tittle : "Mercedez Benz a200",
        modelo : "Mercedez Benz a200 2.5 N",
        consumo : "12lts/100kms",
        ocupantes : 5,
        velCrucero : 150,
        pXdia : 25,
        pXsem : 150,
        pXmes : 650,
        dispoibilidad : true,
        photo : "C:\\Users\\leito\\Documents\\Programacion\\WebDev\\RentACAr\\src\\Assets\\mercedezBenz-img1-fondoBlanco.jpg"
    }
]
const carBtn = document.querySelector(".img-mini-container");
const carDisplay = document.querySelector(".display-car");

/*********Contact Section Variables******/

const arrLoc = [
    {lat: -34.55897697920388, lng:-58.4131211227899, dir: "Av Costanera Rafael Obligado 1460", tel: "+54 011 29949949", horario: "Lu a Lu 24hs"},
    {lat: -34.606044, lng: -58.376542, dir: "Maipu 180", tel: "+54 011 29949859", horario: "Lu a Lu 06 a 22"},
    {lat: -34.575846, lng: -58.413450, dir: "Av del Libertador 3200", tel: "+54 011 29854646", horario: "Lu a Lu 06 a 22"},
    {lat: -34.816482, lng: -58.536443, dir: "Aeropuerto Internacional de Ezeiza", tel: "+54 011 29949859", horario: "Lu a Lu 24hs"},
    {lat :-34.605175, lng: -58.598790, dir : "Aeropuerto del Palomar", tel: "+54 011 28488447", horario : "Lu a Lu 08 a 22"},
    {lat : -38.716349, lng : -62.163722, dir : "Aeropuerto internacional de Bahia Blanca" , tel : "0800 666 2595", horario : "Lu a Lu 06 a 22"},
    {lat : -37.933355, lng : -57.580638, dir : "Aeropuerto internacional de Mar del Plata" , tel : "0800 666 2595", horario : "Lu a Lu 06 a 22"},
    {lat : -42.760007, lng : -65.102180, dir : "Aeropuerto de Puerto Madryn" , tel : "0800 666 2595", horario : "Lu a Lu 06 a 22"},
    {lat : -50.284484, lng : -72.053115, dir : "Aeropuerto internacional de Calafate" , tel : "0800 666 2595", horario : "Lu a Lu 06 a 22"},
    {lat : -54.839537, lng : -68.311472, dir : "Aeropuerto internacional de Ushuaia" , tel : "0800 666 2595", horario : "Lu a Lu 06 a 22"},
    {lat : -41.145852, lng : -71.159990, dir : "Aeropuerto internacional de Bariloche" , tel : "0800 666 2595", horario : "Lu a Lu 06 a 22"},
    {lat : -32.830188, lng : -68.797923, dir : "Aeropuerto de Mendoza" , tel : "0800 666 2595", horario : "Lu a Lu 06 a 22"},
    {lat : -31.571648, lng : -68.422410, dir : "Aeropuerto  de San Juan" , tel : "0800 666 2595", horario : "Lu a Lu 06 a 22"},
    {lat : -38.952231, lng : -68.139561, dir : "Aeropuerto de Neuquen" , tel : "0800 666 2595", horario : "Lu a Lu 06 a 22"},
    {lat : -24.844537, lng : -65.479058, dir : "Aeropuerto de Salta" , tel : "0800 666 2595", horario : "Lu a Lu 06 a 22"},
    {lat : -31.709272, lng : -60.805505, dir : "Aeropuerto de Santa Fe" , tel : "0800 666 2595", horario : "Lu a Lu 06 a 22"},
    {lat : -32.918106, lng : -60.777943, dir : "Aeropuerto de Rosario" , tel : "0800 666 2595", horario : "Lu a Lu 06 a 22"},
    {lat : -32.927056, lng : -60.666177, dir : "Alto Rosario Shopping" , tel : "0800 666 2595", horario : "Lu a Lu 08 a 22"},
    {lat : -25.732554, lng : -54.476942, dir : "Aeropuerto internacional de Iguazu" , tel : "0800 666 2595", horario : "Lu a Lu 06 a 22"},
];
const infoBox = document.querySelector(".info-box");

/**Footer Vars**/

const copyrigth = document.querySelector(".copyright");

/**Funciones**/

/**Funciones de la NavBar**/

navBarToggleButton.addEventListener("click",toggleNavBar);
function toggleNavBar(){
    if(navBarList.style.left === "32px"){
        navBarList.style.left = "-168px";
        navBarToggleButton.style.transform= "rotateZ(0deg)";
    }
    else{
        navBarList.style.left = "32px";
        navBarToggleButton.style.transform= "rotateZ(-90deg)";
    }
}
function giveListenersToNavBarButtons(){
    navBarButton.forEach(p => {p.addEventListener("click",handleNavBarButtonClick)})
}
function handleNavBarButtonClick(event){
    let target = event.target.textContent;
    console.log(target);
    switch (target) {
        case target = "Home":
            break;
        case target = "Hechos":
            scrollBy(0,500);
            break;
        case target = "Nuestros Servicios":
            scrollBy(0,925);
            break;
        case target = "Reseñas":
            scrollBy(0,1600);
            break;
        case target = "Contactos":
            scrollBy(0,2300);
            break;
        default:
            break;
    }
}
giveListenersToNavBarButtons();
/**Funciones de la seccion Trayectoria**/

numeroDeSucursales.textContent = arrLoc.length;

/**Funciones de Reseñas **/

function showReviews(index){
    let reviewsToShow = [usersReviews[index],usersReviews[index+1],usersReviews[index+2]];
    reviews.innerHTML = `
        <article class="review-card">
            <img src="${reviewsToShow[0].defaultPhoto}" alt="pepe" class="review-card-img">
            <h3 class="review-person">${reviewsToShow[0].userName}</h3>
            <p class="review-text">Calificacion: ${reviewsToShow[0].score}/5</p>
            <p class="review-text">${reviewsToShow[0].review}</p>
        </article>
        <article class="review-card">
            <img src="${reviewsToShow[1].defaultPhoto}" alt="pepe" class="review-card-img">
            <h3 class="review-person">${reviewsToShow[1].userName}</h3>
            <p class="review-text">Calificacion: ${reviewsToShow[1].score}/5</p>
            <p class="review-text">${reviewsToShow[1].review}</p>
        </article>
        <article class="review-card">
            <img src="${reviewsToShow[2].defaultPhoto}" alt="pepe" class="review-card-img">
            <h3 class="review-person">${reviewsToShow[2].userName}</h3>
            <p class="review-text">Calificacion: ${reviewsToShow[2].score}/5</p>
            <p class="review-text">${reviewsToShow[2].review}</p>
        </article>`
}
function alterIndex(event){
    let newIndex = index;
    let btn = event.target.textContent;
    if(btn == "Next"){
        prevBtn.style.background = "#272C80";
        prevBtn.style.color="white";
        if (newIndex <= usersReviews.length - 4){
            newIndex++;
        }
        if (usersReviews.length - 3 == newIndex){
            nextBtn.style.background = "grey";
            nextBtn.style.color = "black";
        }
    }
    else if(btn == "Previous"){
        nextBtn.style.background = "#272C80";
        nextBtn.style.color="white";
        if (newIndex >= 1){
            newIndex--; 
        }
        if (newIndex == 0){
            prevBtn.style.backgroundColor = "grey";
            prevBtn.style.color = "black";
        }
    }
    showReviews(newIndex);
    return index = newIndex;
}
showReviews(index);
prevBtn.addEventListener("click",alterIndex);
nextBtn.addEventListener("click",alterIndex);

/** Functiones de Car Modal**/

carBtn.addEventListener("click",handleCarClick)
function handleCarClick(event){
    let target = event.target.id;
    let carToShow = carros.find(p => p.id == target);
    if(carToShow.dispoibilidad){
        carDisplay.innerHTML = `
        <h3 class="display-car-tittle">${carToShow.tittle}</h3>
        <img src="${carToShow.photo}" alt="" class="car-show-img">
        <div class="facts-container">
            <div class="modelo">${carToShow.modelo}</div>
            <div class="consumo">Consumo: ${carToShow.consumo}</div>
            <div class="ocupantes">Ocupantes: ${carToShow.ocupantes}</div>
            <div class="velocidad-crucero">Vel Cru: ${carToShow.velCrucero}kms/h</div>
            <div class="precio-diario">P/Dia: $${carToShow.pXdia}usd</div>
            <div class="precio-semanal">P/Sem: $${carToShow.pXsem}usd</div>
            <div class="precio-mensual">P/Mes: $${carToShow.pXmes}usd</div>
        </div>`;
    }
    else{
        carDisplay.innerHTML = `
        <h3 class="display-car-tittle">${carToShow.tittle}</h3>
        <img src="${carToShow.photo}" alt="" class="car-show-img">
        <div class="facts-container">
            <div class="modelo">${carToShow.modelo}</div>
            <div class="consumo">Consumo: ${carToShow.consumo}</div>
            <div class="ocupantes">Ocupantes: ${carToShow.ocupantes}</div>
            <div class="velocidad-crucero">Vel Cru: ${carToShow.velCrucero}kms/h</div>
            <div class="precio-diario">P/Dia: $${carToShow.pXdia}usd</div>
            <div class="precio-semanal">P/Sem: $${carToShow.pXsem}usd</div>
            <div class="precio-mensual">P/Mes: $${carToShow.pXmes}usd</div>
        </div>
        <div class="sin-disponibilidad">SIN DISPONIBILIDAD</div>`;
    }
}
function loadFirstCar(){
    let carToShow = carros[0];
    if(carToShow.dispoibilidad){
        carDisplay.innerHTML = `
        <h3 class="display-car-tittle">${carToShow.tittle}</h3>
        <img src="${carToShow.photo}" alt="" class="car-show-img">
        <div class="facts-container">
            <div class="modelo">${carToShow.modelo}</div>
            <div class="consumo">Consumo: ${carToShow.consumo}</div>
            <div class="ocupantes">Ocupantes: ${carToShow.ocupantes}</div>
            <div class="velocidad-crucero">Vel Cru: ${carToShow.velCrucero}kms/h</div>
            <div class="precio-diario">P/Dia: $${carToShow.pXdia}usd</div>
            <div class="precio-semanal">P/Sem: $${carToShow.pXsem}usd</div>
            <div class="precio-mensual">P/Mes: $${carToShow.pXmes}usd</div>
        </div>`;
    }
    else{
        carDisplay.innerHTML = `
        <h3 class="display-car-tittle">${carToShow.tittle}</h3>
        <img src="${carToShow.photo}" alt="" class="car-show-img">
        <div class="facts-container">
            <div class="modelo">${carToShow.modelo}</div>
            <div class="consumo">Consumo: ${carToShow.consumo}</div>
            <div class="ocupantes">Ocupantes: ${carToShow.ocupantes}</div>
            <div class="velocidad-crucero">Vel Cru: ${carToShow.velCrucero}kms/h</div>
            <div class="precio-diario">P/Dia: $${carToShow.pXdia}usd</div>
            <div class="precio-semanal">P/Sem: $${carToShow.pXsem}usd</div>
            <div class="precio-mensual">P/Mes: $${carToShow.pXmes}usd</div>
        </div>
        <div class="sin-disponibilidad">SIN DISPONIBILIDAD</div>`;
    }
}
loadFirstCar();

/**Functiones de Contact Section**/

//Function initMap no hace falta llamarla
function initMap(){
    let map = new google.maps.Map(document.getElementById("contact-section-map"),{
        center : {lat: -41 , lng: -65},
        zoom : 4
    });
    //Add Markers
    function addNewMarker(param){
        let marker = new google.maps.Marker({
            position : {lat : param.lat , lng : param.lng},
            map:map
        });
        marker.addListener("click",()=>{showSucursalInfo(param)});
    };
    arrLoc.forEach(loc => {addNewMarker(loc)});
};
function showSucursalInfo(param){
    let loc = param.dir;
    let hor = param.horario;
    let tel = param.tel;
    infoBox.firstElementChild.textContent = `Ubicacion : ${param.dir}`;
    infoBox.firstElementChild.nextElementSibling.textContent = `Tel : ${param.tel}`
    infoBox.lastElementChild.textContent = `Horario : ${param.horario}`;
}

/**Footer Function**/
function getCopyRightDate(){
    let year = new Date().getFullYear();
    copyrigth.textContent = `Todos los derechos reservados. Copyright ${year}.`;
}
getCopyRightDate();