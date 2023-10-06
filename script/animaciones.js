console.log("en animaciones js");

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({});

//const tecnologias = document.getElementById("tecnologias");

tl.from("#tec-1", {//se mueve desde, hasta 
    scrollTrigger: {
        trigger: ".tecnologias",
        markers: true,
        start: "top center"
      },
    rotation: 360,
    x: -700,
    y: 700,
    duration: 0.2
});



/*for (let i = 1; i < 12; i++) {
    let id = "#tec-" + i
    tl.from(id, {//se mueve desde, hasta 
        scrollTrigger: {
            trigger: tecnologias,
            markers: true,
            start: "top center"
          },
        rotation: 360,
        x: -700,
        y: 700,
        duration: 0.2
    });
}*/



/*for (let i = 1; i < 12; i++) {
    let id = "#tec-" + i
    tl.from(id, {//se mueve desde, hasta 
        rotation: 360,
        x: -700,
        y: 700,
        duration: 0.2
    });
}*/