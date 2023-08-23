console.log("en js");



ScrollTrigger.scrollerProxy("#tecnologias",{

})

const tl = gsap.timeline({});
for(let i=1;i<11;i++){
    let id="#tec-"+i
    console.log("id");
    tl.from(id, {//se mueve desde, hasta 
        rotation: 360,
        x: -700,
        y:700,
        duration: 0.2
    });
}
