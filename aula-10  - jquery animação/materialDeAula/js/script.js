var box =$("#box");

$("#animation1").on('click', function(){
    box.animate({width : '500px', height : '500px', borderRadius : '100%'})
})

$("#animation2").on('click', function(){
    box.animate({width : '300px', height : '300px', rotate : '360deg', duration : 1000 })
}) 
$("#animation3").on('click', function(){
    box.animate({width : '300px', height : '300px', rotate : '-720deg', duration : 5000 })
}) 
$("#animation4").on('click', function(){
    box.animate({})
}) 

$("#animation4").on('click', function(){
    box.animate({})
}) 

$("#animation5").on('click', function(){
    box.animate({})
}) 
