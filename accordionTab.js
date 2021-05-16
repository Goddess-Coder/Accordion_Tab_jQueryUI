function showButton(){
    var state = true;
    $('.btn').click(function(){
        $('.img5').show(1000);
        if(state){
            $('#fourthItem').animate({
                backgroundColor:'#895a76',
                width:500
            }, 1000);
            $('.color').animate({
                color:'#ffd700',
            })
        }
        else{
            $('#fourthItem').animate({
                backgroundColor: '#3c3644',
            })
        }
        state = !state;
    })
}
function hideButton(){
    var state = true;
    $('.hide_btn').click(function(){
        $('.img5').hide();
        if(state){
            $('.color').animate({
                color:'#ff0000',
            }, 1000);
        }
        state = !state;
    })
}
$(document).ready(function(){
    $('#services').accordion();
    $('.img5').hide();
    $('#mainlist').tabs();
    showButton();
    hideButton();
});