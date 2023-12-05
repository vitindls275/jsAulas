var bntTema = $('#bntTema');
var body = $('body');

bntTema.on('click', function(){
    if(bntTema.hasClass("temaClaro")){
        bntTema.removeClass("temaClaro")
        bntTema.addClass("temaEscuro")
        bntTema.text("Tema atual: Dark");

        body.removeClass("temaClaro")
        body.addClass("temaEscuro")
    }else{
        bntTema.removeClass("temaEscuro")
        bntTema.addClass("temaClaro")
        bntTema.text("Tema atual: Light");

        body.removeClass("temaEscuro")
        body.addClass("temaClaro")
    }
})