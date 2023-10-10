console.log("en animaciones js");

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        markers: false,
        trigger: ".tecnologias",
        markers: true,
        start: "top center"
    },
});

for (let i = 1; i < 12; i++) {
    let id = "#tec-" + i
    tl.from(id, {//se mueve desde, hasta 
        rotation: 360,
        x: -700,
        y: 700,
        duration: 0.1
    });
}

/*const t2 = gsap.timeline({});
let saludo = document.getElementById("saludo");
let nombre = document.getElementById("nombre");
let profesion = document.getElementById("profesion");

t2.from("#saludo", {//se mueve desde, hasta 
    rotation: 0,
    x: 1000,
    y: 0,
    duration: 0.5
});*/






