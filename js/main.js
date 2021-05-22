var tiro_1;
var tiro_2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var total_t;
var turno = 1;
var punto;

window.onload = init;

function init(){
boton_tirar = document.getElementById("boton_tirar");
boton_tirar.addEventListener("click", jugar);

dado1 = document.getElementById("dado1");
dado2 = document.getElementById("dado2");
}

function tirardado(){
    return Math.floor(Math.random() *6) +1 ;
}

function actualizarDado(ref,cara){
    ref.style.backgroundPosition = posiciones[cara-1]+"px";
}

function jugar(){
    tiro_1 = tirardado();//Retorna un numero entre 1 y 6
    tiro_2 = tirardado();
    actualizarDado(dado1, tiro_1);
    actualizarDado(dado2, tiro_2);

    console.log("turno actual",turno);
    total_t = tiro_1 + tiro_2;
    console.log(" Tiro= "+total_t)

    if(turno==1 && (total_t==7 || total_t==11))
    {
        turno = 1;

        console.log("Reinicia")

        alert("Ganaste con:  " + total_t + " Suerte c:");
        window.location.reload();
    }
    if(turno==1 && (total_t==2 || total_t==3 || total_t==12))
    {
        turno = 1;

        console.log("Reinicia")

        alert("Perdiste con:  "+total_t + " Mala suerte :c");
        window.location.reload();
    }
    if(turno>=2 && total_t==7)
    {
        turno = 1;

        console.log("Reinicia")
        
        alert("Perdiste con:  "+total_t + " Mala suerte :c");
        window.location.reload();
    }
    if((turno>=2) && (total_t==punto))
    {
        turno = 1;
        console.log("se reinició el turno")
        alert("Ganaste con:  " + total_t + " Suerte c:");
        window.location.reload();
    }
    if((turno==1) && (total_t=4 || total_t==5 || total_t==6 || total_t==8 || total_t==9 || total_t==10))
    {
        punto = total_t
    }
        turno = turno + 1;  
}