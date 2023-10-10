console.log("en js script")

function cambio_color(color) {
    const cambiar = document.getElementsByClassName("cambio");
    for (let i = 0; i < cambiar.length; i++) {
        if (color == "claro") {
            cambiar[i].classList.replace('claro', 'obscuro');
        } else {
            cambiar[i].classList.replace('obscuro', 'claro');
        }
    };
}

if (screen.width >= 992) {
    //quitar espacio en blanco del inicio
    let alto_menu = document.getElementById("menu").clientHeight;
    document.getElementById("principal").style.marginTop = "-" + alto_menu + "px";

    //cambio de fondo del menu
    let menu = document.getElementById("menu");
    let principal = document.getElementById("principal");
    addEventListener("scroll", (event) => {
        if (principal.getBoundingClientRect().top != 0) {
            menu.style.backgroundColor = "rgba(255, 255, 255,1)";
            cambio_color("claro");
        } else {
            menu.style.backgroundColor = "rgba(255, 255, 255,0)";
            cambio_color("obscuro");
        }
    });
}else{
    menu.style.backgroundColor = "rgba(255, 255, 255,1)";
    cambio_color("claro");
}

//tamano de la portada
/*let alto_pantalla = screen.height;
document.getElementById("portada").style.height = alto_pantalla + "px";*/


