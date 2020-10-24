//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const max =new Date().getFullYear();
const min = max -10;

//contenedor para el resultado
const resultado = document.querySelector('#resultado');

// eventos

//muestra los autos al cargar
document.addEventListener('DOMContentLoaded', ()=>{
mostrarAutos(autos);


//llena los select de los años
llenarSelect();
});


//generar un objeto con la busqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}

//eventListener
marca.addEventListener('change',e=>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('change',e=>{
    datosBusqueda.year =parseInt( e.target.value);  
    filtrarAuto();
});

minimo.addEventListener('change',e=>{
    datosBusqueda.minimo = e.target.value;  
    filtrarAuto();
});

maximo.addEventListener('change',e=>{
    datosBusqueda.maximo = e.target.value;  
    filtrarAuto();
});

puertas.addEventListener('change',e=>{
    datosBusqueda.puertas = e.target.value;  
    filtrarAuto();
});

transmision.addEventListener('change',e=>{
    datosBusqueda.transmision = e.target.value;  
    filtrarAuto();
});

color.addEventListener('change',e=>{
    datosBusqueda.color = e.target.value; 
    filtrarAuto();
});


//funciones

function mostrarAutos(autos){

    limpiarhtml();

    autos.forEach(auto => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        const { marca, modelo, year, puertas, transmision, precio, color } = auto ;
        const autoHTML = document.createElement('p');
        
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;
        resultado.appendChild(autoHTML);
    });
}
//limpiar html
function limpiarhtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


//llena e select de los años
function llenarSelect(){
   
    for(let i = max; i >= min; i--){
        const option = document.createElement('option');
        option.value=i;
        option.textContent= i;
        year.appendChild(option)
    }
}

//funcion que filtra en base a la busqueda

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    

    if (resultado.length > 0){
        mostrarAutos(resultado);
    }
    else{
        noResultado();
       
    }
    
    }
function noResultado(){

limpiarhtml();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent= 'No hay resultados';
    resultado.appendChild(noResultado)


}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
 if (marca){
     return auto.marca === marca;
 }
 return auto;
}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if (year){
        return auto.year === year;
    }
    return auto;
   } 

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if (minimo){
        return auto.precio  >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if (maximo){
        return auto.precio  <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto){

    const {puertas} = datosBusqueda;
    if (puertas){
        return auto.puertas  <= puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if (transmision){
        return auto.transmision  === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if (color){
        return auto.color  === color;
    }
    return auto;
}