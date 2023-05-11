window.onload=function(){
  
 recuperar();
  
}
/******* Dar de alta el nombre en el localstorage******/
function alta(){
    localStorage.Nombre = document.getElementById("Nombre").value;
  

    }
    /*******Recuperar datos  */
    function recuperar(){
      document.getElementById("datos").innerHTML = localStorage.Nombre;
    }
  
 



