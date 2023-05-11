


function dragStart006(event) {
    event.dataTransfer.setData("choice006", event.target.id);
  }
  
  function allowDrop006(event) {
    event.preventDefault();
  }
  
  var b = 0;
  b++;
  function dragStart001(event) {
  event.dataTransfer.setData("choice001", event.target.id);
  }
  
  function dragStart002(event) {
  event.dataTransfer.setData("choice002", event.target.id);
  }
  
  function dragStart003(event) {
  event.dataTransfer.setData("choice003", event.target.id);
  }
  
  function dragStart004(event) {
  event.dataTransfer.setData("choice004", event.target.id);
  }
  
  function dragStart005(event) {
  event.dataTransfer.setData("choice005", event.target.id);
  }
  
  function allowDrop001(event) {
  event.preventDefault();
  }
  
  function allowDrop002(event) {
  event.preventDefault();
  }
  
  function allowDrop003(event) {
  event.preventDefault();
  }
  
  function allowDrop004(event) {
  event.preventDefault();
  }
  
  function allowDrop005(event) {
  event.preventDefault();
  }
  function put001(event) {
  var data = event.dataTransfer.getData("choice001");
  event.target.appendChild(document.getElementById(data));
  score001.innerHTML = b++;
  var arr0 = localStorage.getItem('arr0');
  
  var habitad= new Array()
  habitad[0] = './imagenes/lucha1.gif' 
  habitad[1] = './imagenes/chango.jpg'
  habitad[2] = './imagenes/cocodrilo.jpg'
  habitad[3] = './imagenes/jirafa.jpg'
  habitad[4] = './imagenes/mariposa.jpg'
  habitad[5] = './imagenes/pajaro.jpg'
  habitad[6] = './imagenes/panda.jpg'
  habitad[7] = './imagenes/rana.jpg'
  habitad[8] = './imagenes/serpiente.jpg'
  habitad[9] = './imagenes/tucan.jpg'
  var animales = new Array()
  animales[0] = './imagenes/lucha1.gif' 
  animales[1] = './imagenes/chango.png'
  animales[2] = './imagenes/cocodrilo.png'
  animales[3] = './imagenes/jirafa.png'
  animales[4] = './imagenes/mariposa.png'
  animales[5] = './imagenes/pajaro.png'
  animales[6] = './imagenes/panda.png'
  animales[7] = './imagenes/rana.png'
  animales[8] = './imagenes/serpiente.png'
  animales[9] = './imagenes/tucan.png'
 
  var sonido = new Array()
  sonido[0] = './imagenes/lucha1.gif' 
  sonido[1] = './imagenes/chango.mp3'
  sonido[2] = './imagenes/cocodrilo.mp3'
  sonido[3] = './imagenes/jirafa.mp3'
  sonido[4] = './imagenes/mariposa.mp3'
  sonido[5] = './imagenes/Pajaro.mp3'
  sonido[6] = './imagenes/panda.mp3'
  sonido[7] = './imagenes/rana.mp3'
  sonido[8] = './imagenes/serpiente.mp3'
  sonido[9] = './imagenes/tucan.mp3'

 var datos = [
{ anim: animales[0],hab: habitad[0], nombre: "Example 1",son: sonido[0]},
{ anim: animales[1],hab: habitad[1], nombre: "Chango",   son: sonido[1]},
{ anim: animales[2],hab: habitad[2], nombre: "Cocodrilo",son: sonido[2]},
{ anim: animales[3],hab: habitad[3], nombre: "Jirafa",   son: sonido[3]},
{ anim: animales[4],hab: habitad[4], nombre: "Mariposa", son: sonido[4]},
{ anim: animales[5],hab: habitad[5], nombre: "Pajaro",   son: sonido[5]},
{ anim: animales[6],hab: habitad[6], nombre: "Panda",    son: sonido[6]},
{ anim: animales[7],hab: habitad[7], nombre: "Rana",     son: sonido[7]},
{ anim: animales[8],hab: habitad[8], nombre: "Serpiente",son: sonido[8]},
{ anim: animales[9],hab: habitad[9], nombre: "Tucan",    son: sonido[9]}
];
var anim1='<img  src="'+datos[arr0].hab+'">'+'<img class="anim2" src="'+datos[arr0].anim+'">'+'<p class="nom">'+datos[arr0].nombre+'</p>'+'<audio src="'+datos[arr0].son+'"autoplay>';
      place001.innerHTML=anim1;
      
  }

  
  function put002(event) {
  var data = event.dataTransfer.getData("choice002");
  event.target.appendChild(document.getElementById(data));
  score001.innerHTML = b++;
 
  var arr1 = localStorage.getItem('arr1');
  var habitad= new Array()
  habitad[0] = './imagenes/lucha1.gif' 
  habitad[1] = './imagenes/chango.jpg'
  habitad[2] = './imagenes/cocodrilo.jpg'
  habitad[3] = './imagenes/jirafa.jpg'
  habitad[4] = './imagenes/mariposa.jpg'
  habitad[5] = './imagenes/pajaro.jpg'
  habitad[6] = './imagenes/panda.jpg'
  habitad[7] = './imagenes/rana.jpg'
  habitad[8] = './imagenes/serpiente.jpg'
  habitad[9] = './imagenes/tucan.jpg'
  var animales = new Array()
  animales[0] = './imagenes/lucha1.gif' 
  animales[1] = './imagenes/chango.png'
  animales[2] = './imagenes/cocodrilo.png'
  animales[3] = './imagenes/jirafa.png'
  animales[4] = './imagenes/mariposa.png'
  animales[5] = './imagenes/pajaro.png'
  animales[6] = './imagenes/panda.png'
  animales[7] = './imagenes/rana.png'
  animales[8] = './imagenes/serpiente.png'
  animales[9] = './imagenes/tucan.png'
 
  var sonido = new Array()
  sonido[0] = './imagenes/lucha1.gif' 
  sonido[1] = './imagenes/chango.mp3'
  sonido[2] = './imagenes/cocodrilo.mp3'
  sonido[3] = './imagenes/jirafa.mp3'
  sonido[4] = './imagenes/mariposa.mp3'
  sonido[5] = './imagenes/Pajaro.mp3'
  sonido[6] = './imagenes/panda.mp3'
  sonido[7] = './imagenes/rana.mp3'
  sonido[8] = './imagenes/serpiente.mp3'
  sonido[9] = './imagenes/tucan.mp3'

 var datos = [
{ anim: animales[0],hab: habitad[0], nombre: "Example 1",son: sonido[0]},
{ anim: animales[1],hab: habitad[1], nombre: "Chango",   son: sonido[1]},
{ anim: animales[2],hab: habitad[2], nombre: "Cocodrilo",son: sonido[2]},
{ anim: animales[3],hab: habitad[3], nombre: "Jirafa",   son: sonido[3]},
{ anim: animales[4],hab: habitad[4], nombre: "Mariposa", son: sonido[4]},
{ anim: animales[5],hab: habitad[5], nombre: "Pajaro",   son: sonido[5]},
{ anim: animales[6],hab: habitad[6], nombre: "Panda",    son: sonido[6]},
{ anim: animales[7],hab: habitad[7], nombre: "Rana",     son: sonido[7]},
{ anim: animales[8],hab: habitad[8], nombre: "Serpiente",son: sonido[8]},
{ anim: animales[9],hab: habitad[9], nombre: "Tucan",    son: sonido[9]}
];
      var anim2='<img  src="'+datos[arr1].hab+'">'+'<img class="anim2" src="'+datos[arr1].anim+'">'+'<p class="nom">'+datos[arr1].nombre+'</p>'+'<audio src="'+datos[arr1].son+'"autoplay>';
      place002.innerHTML=anim2;
  }
  
  function put003(event) {
  var data = event.dataTransfer.getData("choice003");
  event.target.appendChild(document.getElementById(data));
   score001.innerHTML = b++;

   var arr2 = localStorage.getItem('arr2');
   var habitad= new Array()
   habitad[0] = './imagenes/lucha1.gif' 
   habitad[1] = './imagenes/chango.jpg'
   habitad[2] = './imagenes/cocodrilo.jpg'
   habitad[3] = './imagenes/jirafa.jpg'
   habitad[4] = './imagenes/mariposa.jpg'
   habitad[5] = './imagenes/pajaro.jpg'
   habitad[6] = './imagenes/panda.jpg'
   habitad[7] = './imagenes/rana.jpg'
   habitad[8] = './imagenes/serpiente.jpg'
   habitad[9] = './imagenes/tucan.jpg'
   var animales = new Array()
   animales[0] = './imagenes/lucha1.gif' 
   animales[1] = './imagenes/chango.png'
   animales[2] = './imagenes/cocodrilo.png'
   animales[3] = './imagenes/jirafa.png'
   animales[4] = './imagenes/mariposa.png'
   animales[5] = './imagenes/pajaro.png'
   animales[6] = './imagenes/panda.png'
   animales[7] = './imagenes/rana.png'
   animales[8] = './imagenes/serpiente.png'
   animales[9] = './imagenes/tucan.png'
  
   var sonido = new Array()
   sonido[0] = './imagenes/lucha1.gif' 
   sonido[1] = './imagenes/chango.mp3'
   sonido[2] = './imagenes/cocodrilo.mp3'
   sonido[3] = './imagenes/jirafa.mp3'
   sonido[4] = './imagenes/mariposa.mp3'
   sonido[5] = './imagenes/Pajaro.mp3'
   sonido[6] = './imagenes/panda.mp3'
   sonido[7] = './imagenes/rana.mp3'
   sonido[8] = './imagenes/serpiente.mp3'
   sonido[9] = './imagenes/tucan.mp3'
 
  var datos = [
 { anim: animales[0],hab: habitad[0], nombre: "Example 1",son: sonido[0]},
 { anim: animales[1],hab: habitad[1], nombre: "Chango",   son: sonido[1]},
 { anim: animales[2],hab: habitad[2], nombre: "Cocodrilo",son: sonido[2]},
 { anim: animales[3],hab: habitad[3], nombre: "Jirafa",   son: sonido[3]},
 { anim: animales[4],hab: habitad[4], nombre: "Mariposa", son: sonido[4]},
 { anim: animales[5],hab: habitad[5], nombre: "Pajaro",   son: sonido[5]},
 { anim: animales[6],hab: habitad[6], nombre: "Panda",    son: sonido[6]},
 { anim: animales[7],hab: habitad[7], nombre: "Rana",     son: sonido[7]},
 { anim: animales[8],hab: habitad[8], nombre: "Serpiente",son: sonido[8]},
 { anim: animales[9],hab: habitad[9], nombre: "Tucan",    son: sonido[9]}
 ];
       var anim3='<img  src="'+datos[arr2].hab+'">'+'<img class="anim2" src="'+datos[arr2].anim+'">'+'<p class="nom">'+datos[arr2].nombre+'</p>'+'<audio src="'+datos[arr2].son+'"autoplay>';
       place003.innerHTML=anim3;
  
}
  
  function put004(event) {
  var data = event.dataTransfer.getData("choice004");
  event.target.appendChild(document.getElementById(data));
  score002.innerHTML = b++;
  var arr3 = localStorage.getItem('arr3');

  var habitad= new Array()
  habitad[0] = './imagenes/lucha1.gif' 
  habitad[1] = './imagenes/chango.jpg'
  habitad[2] = './imagenes/cocodrilo.jpg'
  habitad[3] = './imagenes/jirafa.jpg'
  habitad[4] = './imagenes/mariposa.jpg'
  habitad[5] = './imagenes/pajaro.jpg'
  habitad[6] = './imagenes/panda.jpg'
  habitad[7] = './imagenes/rana.jpg'
  habitad[8] = './imagenes/serpiente.jpg'
  habitad[9] = './imagenes/tucan.jpg'
  var animales = new Array()
  animales[0] = './imagenes/lucha1.gif' 
  animales[1] = './imagenes/chango.png'
  animales[2] = './imagenes/cocodrilo.png'
  animales[3] = './imagenes/jirafa.png'
  animales[4] = './imagenes/mariposa.png'
  animales[5] = './imagenes/pajaro.png'
  animales[6] = './imagenes/panda.png'
  animales[7] = './imagenes/rana.png'
  animales[8] = './imagenes/serpiente.png'
  animales[9] = './imagenes/tucan.png'
 
  var sonido = new Array()
  sonido[0] = './imagenes/lucha1.gif' 
  sonido[1] = './imagenes/chango.mp3'
  sonido[2] = './imagenes/cocodrilo.mp3'
  sonido[3] = './imagenes/jirafa.mp3'
  sonido[4] = './imagenes/mariposa.mp3'
  sonido[5] = './imagenes/Pajaro.mp3'
  sonido[6] = './imagenes/panda.mp3'
  sonido[7] = './imagenes/rana.mp3'
  sonido[8] = './imagenes/serpiente.mp3'
  sonido[9] = './imagenes/tucan.mp3'

 var datos = [
{ anim: animales[0],hab: habitad[0], nombre: "Example 1",son: sonido[0]},
{ anim: animales[1],hab: habitad[1], nombre: "Chango",   son: sonido[1]},
{ anim: animales[2],hab: habitad[2], nombre: "Cocodrilo",son: sonido[2]},
{ anim: animales[3],hab: habitad[3], nombre: "Jirafa",   son: sonido[3]},
{ anim: animales[4],hab: habitad[4], nombre: "Mariposa", son: sonido[4]},
{ anim: animales[5],hab: habitad[5], nombre: "Pajaro",   son: sonido[5]},
{ anim: animales[6],hab: habitad[6], nombre: "Panda",    son: sonido[6]},
{ anim: animales[7],hab: habitad[7], nombre: "Rana",     son: sonido[7]},
{ anim: animales[8],hab: habitad[8], nombre: "Serpiente",son: sonido[8]},
{ anim: animales[9],hab: habitad[9], nombre: "Tucan",    son: sonido[9]}
];
      var anim4='<img  src="'+datos[arr3].hab+'">'+'<img class="anim2" src="'+datos[arr3].anim+'">'+'<p class="nom">'+datos[arr3].nombre+'</p>'+'<audio src="'+datos[arr3].son+'"autoplay>';
      place004.innerHTML=anim4;

  }
  
  function put005(event) {
  var data = event.dataTransfer.getData("choice005");
  event.target.appendChild(document.getElementById(data));
  score002.innerHTML = b++;
  var arr4 = localStorage.getItem('arr4');
  
  var habitad= new Array()
  habitad[0] = './imagenes/lucha1.gif' 
  habitad[1] = './imagenes/chango.jpg'
  habitad[2] = './imagenes/cocodrilo.jpg'
  habitad[3] = './imagenes/jirafa.jpg'
  habitad[4] = './imagenes/mariposa.jpg'
  habitad[5] = './imagenes/pajaro.jpg'
  habitad[6] = './imagenes/panda.jpg'
  habitad[7] = './imagenes/rana.jpg'
  habitad[8] = './imagenes/serpiente.jpg'
  habitad[9] = './imagenes/tucan.jpg'
  var animales = new Array()
  animales[0] = './imagenes/lucha1.gif' 
  animales[1] = './imagenes/chango.png'
  animales[2] = './imagenes/cocodrilo.png'
  animales[3] = './imagenes/jirafa.png'
  animales[4] = './imagenes/mariposa.png'
  animales[5] = './imagenes/pajaro.png'
  animales[6] = './imagenes/panda.png'
  animales[7] = './imagenes/rana.png'
  animales[8] = './imagenes/serpiente.png'
  animales[9] = './imagenes/tucan.png'
 
  var sonido = new Array()
  sonido[0] = './imagenes/lucha1.gif' 
  sonido[1] = './imagenes/chango.mp3'
  sonido[2] = './imagenes/cocodrilo.mp3'
  sonido[3] = './imagenes/jirafa.mp3'
  sonido[4] = './imagenes/mariposa.mp3'
  sonido[5] = './imagenes/Pajaro.mp3'
  sonido[6] = './imagenes/panda.mp3'
  sonido[7] = './imagenes/rana.mp3'
  sonido[8] = './imagenes/serpiente.mp3'
  sonido[9] = './imagenes/tucan.mp3'

 var datos = [
{ anim: animales[0],hab: habitad[0], nombre: "Example 1",son: sonido[0]},
{ anim: animales[1],hab: habitad[1], nombre: "Chango",   son: sonido[1]},
{ anim: animales[2],hab: habitad[2], nombre: "Cocodrilo",son: sonido[2]},
{ anim: animales[3],hab: habitad[3], nombre: "Jirafa",   son: sonido[3]},
{ anim: animales[4],hab: habitad[4], nombre: "Mariposa", son: sonido[4]},
{ anim: animales[5],hab: habitad[5], nombre: "Pajaro",   son: sonido[5]},
{ anim: animales[6],hab: habitad[6], nombre: "Panda",    son: sonido[6]},
{ anim: animales[7],hab: habitad[7], nombre: "Rana",     son: sonido[7]},
{ anim: animales[8],hab: habitad[8], nombre: "Serpiente",son: sonido[8]},
{ anim: animales[9],hab: habitad[9], nombre: "Tucan",    son: sonido[9]}
];
      var anim5='<img  src="'+datos[arr4].hab+'">'+'<img class="anim2" src="'+datos[arr4].anim+'">'+'<p class="nom">'+datos[arr4].nombre+'</p>'+'<audio src="'+datos[arr4].son+'"autoplay>';
      place005.innerHTML=anim5;
}
  function put006(event) {
    var data = event.dataTransfer.getData("choice006");
    event.target.appendChild(document.getElementById(data));
  score002.innerHTML = b++;
  var arr5 = localStorage.getItem('arr5');
  var habitad= new Array()
  habitad[0] = './imagenes/lucha1.gif' 
  habitad[1] = './imagenes/chango.jpg'
  habitad[2] = './imagenes/cocodrilo.jpg'
  habitad[3] = './imagenes/jirafa.jpg'
  habitad[4] = './imagenes/mariposa.jpg'
  habitad[5] = './imagenes/pajaro.jpg'
  habitad[6] = './imagenes/panda.jpg'
  habitad[7] = './imagenes/rana.jpg'
  habitad[8] = './imagenes/serpiente.jpg'
  habitad[9] = './imagenes/tucan.jpg'
  var animales = new Array()
  animales[0] = './imagenes/lucha1.gif' 
  animales[1] = './imagenes/chango.png'
  animales[2] = './imagenes/cocodrilo.png'
  animales[3] = './imagenes/jirafa.png'
  animales[4] = './imagenes/mariposa.png'
  animales[5] = './imagenes/pajaro.png'
  animales[6] = './imagenes/panda.png'
  animales[7] = './imagenes/rana.png'
  animales[8] = './imagenes/serpiente.png'
  animales[9] = './imagenes/tucan.png'
 
  var sonido = new Array()
  sonido[0] = './imagenes/lucha1.gif' 
  sonido[1] = './imagenes/chango.mp3'
  sonido[2] = './imagenes/cocodrilo.mp3'
  sonido[3] = './imagenes/jirafa.mp3'
  sonido[4] = './imagenes/mariposa.mp3'
  sonido[5] = './imagenes/Pajaro.mp3'
  sonido[6] = './imagenes/panda.mp3'
  sonido[7] = './imagenes/rana.mp3'
  sonido[8] = './imagenes/serpiente.mp3'
  sonido[9] = './imagenes/tucan.mp3'

 var datos = [
{ anim: animales[0],hab: habitad[0], nombre: "Example 1",son: sonido[0]},
{ anim: animales[1],hab: habitad[1], nombre: "Chango",   son: sonido[1]},
{ anim: animales[2],hab: habitad[2], nombre: "Cocodrilo",son: sonido[2]},
{ anim: animales[3],hab: habitad[3], nombre: "Jirafa",   son: sonido[3]},
{ anim: animales[4],hab: habitad[4], nombre: "Mariposa", son: sonido[4]},
{ anim: animales[5],hab: habitad[5], nombre: "Pajaro",   son: sonido[5]},
{ anim: animales[6],hab: habitad[6], nombre: "Panda",    son: sonido[6]},
{ anim: animales[7],hab: habitad[7], nombre: "Rana",     son: sonido[7]},
{ anim: animales[8],hab: habitad[8], nombre: "Serpiente",son: sonido[8]},
{ anim: animales[9],hab: habitad[9], nombre: "Tucan",    son: sonido[9]}
];
      var anim6='<img  src="'+datos[arr5].hab+'">'+'<img class="anim2" src="'+datos[arr5].anim+'">'+'<p class="nom">'+datos[arr5].nombre+'</p>'+'<audio src="'+datos[arr5].son+'"autoplay>';
      place006.innerHTML=anim6;

        
  }
  function drop001(event) {
  event.preventDefault();
  }
  
  function drop002(event) {
  event.preventDefault();
  }
  
  function drop003(event) {
  event.preventDefault();
  
  }
  
  function drop004(event) {
  event.preventDefault();
  
  }
  
  function drop005(event) {
  event.preventDefault();
  }
  
  
  function submit001() {
  if (b > 3) {
  siguiente();
  }
  }

  function submit002() {
    if (b > 3) {
    siguiente2();
    }
    }
   
    

function lista(){
            
var habitad= new Array()
habitad[0] = './imagenes/lucha1.gif' 
habitad[1] = './imagenes/chango.jpg'
habitad[2] = './imagenes/cocodrilo.jpg'
habitad[3] = './imagenes/jirafa.jpg'
habitad[4] = './imagenes/mariposa.jpg'
habitad[5] = './imagenes/pajaro.jpg'
habitad[6] = './imagenes/panda.jpg'
habitad[7] = './imagenes/rana.jpg'
habitad[8] = './imagenes/serpiente.jpg'
habitad[9] = './imagenes/tucan.jpg'
var animales = new Array()
animales[0] = './imagenes/lucha1.gif' 
animales[1] = './imagenes/chango.png'
animales[2] = './imagenes/cocodrilo.png'
animales[3] = './imagenes/jirafa.png'
animales[4] = './imagenes/mariposa.png'
animales[5] = './imagenes/pajaro.png'
animales[6] = './imagenes/panda.png'
animales[7] = './imagenes/rana.png'
animales[8] = './imagenes/serpiente.png'
animales[9] = './imagenes/tucan.png'

var sonido = new Array()
sonido[0] = './imagenes/lucha1.gif' 
sonido[1] = './imagenes/chango.mp3'
sonido[2] = './imagenes/cocodrilo.mp3'
sonido[3] = './imagenes/jirafa.mp3'
sonido[4] = './imagenes/mariposa.mp3'
sonido[5] = './imagenes/Pajaro.mp3'
sonido[6] = './imagenes/panda.mp3'
sonido[7] = './imagenes/rana.mp3'
sonido[8] = './imagenes/serpiente.mp3'
sonido[9] = './imagenes/tucan.mp3'

var datos = [
{ anim: animales[0],hab: habitad[0], nombre: "Example 1",son: sonido[0]},
{ anim: animales[1],hab: habitad[1], nombre: "Chango",   son: sonido[1]},
{ anim: animales[2],hab: habitad[2], nombre: "Cocodrilo",son: sonido[2]},
{ anim: animales[3],hab: habitad[3], nombre: "Jirafa",   son: sonido[3]},
{ anim: animales[4],hab: habitad[4], nombre: "Mariposa", son: sonido[4]},
{ anim: animales[5],hab: habitad[5], nombre: "Pajaro",   son: sonido[5]},
{ anim: animales[6],hab: habitad[6], nombre: "Panda",    son: sonido[6]},
{ anim: animales[7],hab: habitad[7], nombre: "Rana",     son: sonido[7]},
{ anim: animales[8],hab: habitad[8], nombre: "Serpiente",son: sonido[8]},
{ anim: animales[9],hab: habitad[9], nombre: "Tucan",    son: sonido[9]}
];

var n = 0;
var numero;
var cero = 0;
var uno= 0;
var dos = 0;
var tres = 0;
var cuatro = 0;
var cinco = 0;
var seis = 0;
var siete = 0;
var ocho = 0;
var nueve = 0;
var arr=[];

do {
 numero  = Math.round(Math.random()*9);
 
 if ((numero != cero)&&(numero != uno) && (numero != dos) &&(numero != tres) &&(numero != cuatro)&&(numero != cinco)&&(numero != seis)&&(numero != siete)&&(numero != ocho)&&(numero != nueve)&&(numero != 7)) {

    arr[n]=numero;
     n++;
     
     if (n == 0) {
         cero = numero;
         
;            }
     if (n == 1) {
         uno = numero;

     }
     if (n == 2) {
         dos = numero;
         
     }
     if (n == 3) {
         tres = numero;
         
     }
     if (n == 4) {
         cuatro = numero;
         
     }
     if (n == 5) {
         cinco= numero;
        
     }
     if (n == 6) {
         seis= numero;
         
     }
     if (n == 7) {
         siete = numero;
         
     }
     if (n == 8) {
         ocho= numero;
         
     }
     if (n == 9) {
         nueve = numero;
        
     }
 
     
 }

} 
while (n < 6);
     localStorage.arr0 = arr[0];
     localStorage.arr1 = arr[1];
     localStorage.arr2= arr[2];
     localStorage.arr3 = arr[3];
     localStorage.arr4 = arr[4];
     localStorage.arr5 = arr[5];

     hab1='<img src="'+datos[arr[0]].hab+'">';
     document.getElementById("place001").innerHTML=hab1;
     hab2='<img src="'+datos[arr[1]].hab+'">';
     document.getElementById("place002").innerHTML=hab2;
     hab3='<img src="'+datos[arr[2]].hab+'">';
     document.getElementById("place003").innerHTML=hab3;
     anim1=' <div  ondrop="drop003(event)"><img class="anim" src="'+datos[arr[2]].anim+'" ondragstart="dragStart003(event)" draggable="true" id="target003">';
     document.getElementById("anim2").innerHTML=anim1;
     anim2=' <div  ondrop="drop002(event)"><img class="anim" src="'+datos[arr[1]].anim+'" ondragstart="dragStart002(event)" draggable="true" id="target002">';
     document.getElementById("anim1").innerHTML=anim2;
    anim3=' <div  ondrop="drop001(event)"><img class="anim" src="'+datos[arr[0]].anim+'" ondragstart="dragStart001(event)" draggable="true" id="target001">';
     document.getElementById("anim3").innerHTML=anim3;
 }


 function siguiente(){
     var win = window.open("juego2.html", '_blank');
     win.focus();
     level();
 }
 function siguiente2(){
    var win = window.open("felicitacion.html", '_blank');
    win.focus();
}
 
 function level(){
     var arr3 = localStorage.getItem('arr3');
     var arr4 = localStorage.getItem('arr4');
     var arr5 = localStorage.getItem('arr5');
     var habitad= new Array()
     habitad[0] = './imagenes/' 
     habitad[1] = './imagenes/chango.jpg'
     habitad[2] = './imagenes/cocodrilo.jpg'
     habitad[3] = './imagenes/jirafa.jpg'
     habitad[4] = './imagenes/mariposa.jpg'
     habitad[5] = './imagenes/pajaro.jpg'
     habitad[6] = './imagenes/panda.jpg'
     habitad[7] = './imagenes/rana.jpg'
     habitad[8] = './imagenes/serpiente.jpg'
     habitad[9] = './imagenes/tucan.jpg'
     var animales = new Array()
     animales[0] = './imagenes/' 
     animales[1] = './imagenes/chango.png'
     animales[2] = './imagenes/cocodrilo.png'
     animales[3] = './imagenes/jirafa.png'
     animales[4] = './imagenes/mariposa.png'
     animales[5] = './imagenes/pajaro.png'
     animales[6] = './imagenes/panda.png'
     animales[7] = './imagenes/rana.png'
     animales[8] = './imagenes/serpiente.png'
     animales[9] = './imagenes/tucan.png'
    
     var sonido = new Array()
     sonido[0] = './imagenes/' 
     sonido[1] = './imagenes/chango.mp3'
     sonido[2] = './imagenes/cocodrilo.mp3'
     sonido[3] = './imagenes/jirafa.mp3'
     sonido[4] = './imagenes/mariposa.mp3'
     sonido[5] = './imagenes/Pajaro.mp3'
     sonido[6] = './imagenes/panda.mp3'
     sonido[7] = './imagenes/rana.mp3'
     sonido[8] = './imagenes/serpiente.mp3'
     sonido[9] = './imagenes/tucan.mp3'

    var datos = [
{ anim: animales[0],hab: habitad[0], nombre: "Example 1",son: sonido[0]},
{ anim: animales[1],hab: habitad[1], nombre: "Chango",   son: sonido[1]},
{ anim: animales[2],hab: habitad[2], nombre: "Cocodrilo",son: sonido[2]},
{ anim: animales[3],hab: habitad[3], nombre: "Jirafa",   son: sonido[3]},
{ anim: animales[4],hab: habitad[4], nombre: "Mariposa", son: sonido[4]},
{ anim: animales[5],hab: habitad[5], nombre: "Pajaro",   son: sonido[5]},
{ anim: animales[6],hab: habitad[6], nombre: "Panda",    son: sonido[6]},
{ anim: animales[7],hab: habitad[7], nombre: "Rana",     son: sonido[7]},
{ anim: animales[8],hab: habitad[8], nombre: "Serpiente",son: sonido[8]},
{ anim: animales[9],hab: habitad[9], nombre: "Tucan",    son: sonido[9]}
];
     var hab3='<img src="'+datos[arr3].hab+'">';
     document.getElementById("place004").innerHTML=hab3;
     var hab4='<img src="'+datos[arr4].hab+'">';
     document.getElementById("place005").innerHTML=hab4;
     var hab5='<img src="'+datos[arr5].hab+'">';
     document.getElementById("place006").innerHTML=hab5;

    
    var anim4=' <div  ondrop="drop004(event)"><img class="anim" src="'+datos[arr3].anim+'" ondragstart="dragStart004(event)" draggable="true" id="target004">';
     document.getElementById("anim5").innerHTML=anim4;
     var anim6=' <div  ondrop="drop006(event)"><img class="anim" src="'+datos[arr5].anim+'" ondragstart="dragStart006(event)" draggable="true" id="target006">';
     document.getElementById("anim4").innerHTML=anim6;
     var anim5=' <div  ondrop="drop005(event)"><img class="anim" src="'+datos[arr4].anim+'" ondragstart="dragStart005(event)" draggable="true" id="target005">';
     document.getElementById("anim6").innerHTML=anim5;
 }
window.onload=lista;

