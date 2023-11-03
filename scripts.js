// definir el valor del ticket
const mensual = 2000;

// definir descuentos
const desc12Meses = 0.50;
const desc6Meses = 0.75;
const desc3Meses = 0.95;

// tomar los elementos

const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('correo')
const pagar = document.getElementById('pagar')

function calcularPago() {



    // condicionar por descuentos
    switch (categoria.value) {
        case "":
            total=mensual;
            break;
        case "12Meses":
            total = (mensual*12) * desc12Meses;
            break;
        case "6Meses":
            total = (mensual*6) * desc6Meses ;
            break;
        case "3Meses":
            total = (mensual*3) * desc3Meses;
            break;
    }

    totalPagar.textContent = `Total a Pagar: $ ${total}`;

    console.log("hola");
}

btnResumen.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPago();

});
function pago () {
    if (nombre.value === "" ||  apellido.value === "" || correo.value === "" ){
        alert("Tiene que completar todo el formulario para proceder al pago")
    }
}
pagar.addEventListener('click',(f)=> {
    f.preventDefault();
    pago();
})