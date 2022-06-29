
window.addEventListener("load", function(){
    cleanUp();
})


const cleanUp = () => {
    let container = document.getElementById("container");
    let loader = document.getElementById("loader");


    loader.style.display = "none";
    container.style.display = "block";
}
