let accionLicuadora = document.querySelector('#licuadoraBoton');
let estadoLicuadora = 'apagado';

accionLicuadora.addEventListener('click' , controlarLicuadora)

function controlarLicuadora() {
    if(estadoLicuadora === "apagado"){
        estadoLicuadora = 'encendido';
        console.log('Estoy encendido');
    }else{
        estadoLicuadora = 'apagado';
        console.log('Estoy apagado');
    }
};