let accionLicuadora = document.querySelector('#licuadoraBoton');
let licuadora = document.querySelector('#licuadora');
let estadoLicuadora = 'apagado';
let sonidoLicuadora = document.querySelector('#licuadoraSonido');
let sonidoBotonLicuadora = document.querySelector('#licuadoraBotonSonido')

accionLicuadora.addEventListener('click' , controlarLicuadora)

function controlarLicuadora() {
    if(estadoLicuadora === "apagado"){
        estadoLicuadora = 'encendido';
        licuadora.classList.add('active');
    }else{
        estadoLicuadora = 'apagado';
        licuadora.classList.remove('active');
}
activacionSonido();
}

function activacionSonido(){
    if(sonidoLicuadora.paused){
        sonidoBotonLicuadora.play();
        sonidoLicuadora.play();
    }else{
        sonidoBotonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}