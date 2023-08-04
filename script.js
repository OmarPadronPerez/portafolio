let alto=document.getElementById("menu").clientHeight;
document.getElementById("principal").style.marginTop="-"+alto+"px";

let menu = document.getElementById("menu");

addEventListener("scroll", (event) => {
    console.log(menu.getBoundingClientRect().top);
    if(menu.getBoundingClientRect().top<=0){
        console.log("dentro");
        menu.style.backgroundColor="rgba(255, 255, 255,1)";
    }else{
        menu.style.backgroundColor="rgba(255, 255, 255,0)";
    }

});