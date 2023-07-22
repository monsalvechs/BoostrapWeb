
window.addEventListener("load", function(){
    cleanUp();
})


const cleanUp = () => {
    let container = document.getElementById("container");
    let loader = document.getElementById("loader");


    loader.style.display = "none";
    container.style.display = "block";
}

window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnVolverArriba").style.display = "block";
      } else {
        document.getElementById("btnVolverArriba").style.display = "none";
      }
    }

    function goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
