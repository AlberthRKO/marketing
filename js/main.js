$(document).ready(function(){
    // Funcion megamenu se mantiene visible
    $('.dropdown-menu').click(function(n){
        n.stopPropagation(); // le dice que no haga nada 
        
    })


    // Funcionalidad al darle click en el boton buscar
    $('.btn-buscar').click(function(){
        // fadeIn agregara una clase al id display-block y lo muestra de manera progresiva
        $('#buscador-modal').fadeIn()
    })
    // Funcionalidad al darle click en el boton buscar pora cerrar
    $('.btn-cerrar').click(function(){
        // fadeIn agregara una clase al id display-block y lo muestra de manera progresiva
        $('#buscador-modal').fadeOut()
    })


    // funcion para el efecto escritura
    var typed = new Typed('.typed', {
        // ^1000 es cuanto tiempo tardara en  mostrarse
        strings: ["Más clientes ^2000", "Más ventas ^2000", "Más visibilidad ^2000"],
        smartBackspace: false, //detecta la palabra en comun y no la typea
        typeSpeed: 50,
        showCursor:true,
        cursorChar: "|",
        backSpeed: 30, //tiempo al retrosedesr
        loop: true,
        startDelay:800,
        shuffle:false //se mostraran de manera aleatoria cuando esta en true
    });
    
})