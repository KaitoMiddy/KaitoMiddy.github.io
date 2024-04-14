document.addEventListener('DOMContentLoaded', function() {
   
    var not = document.getElementById('nao');
    var larguraTela = window.innerWidth;
    var alturaTela = window.innerHeight;

    function moveNot() {
        var notWidth = not.offsetWidth;
        var notHeight = not.offsetHeight;
        var posX = Math.random() * (larguraTela - notWidth);
        var posY = Math.random() * (alturaTela - notHeight);

        not.style.left = posX + 'px';
        not.style.top = posY + 'px';
    }

    not.addEventListener('mouseenter', function(e) {
        moveNot();
    });
});
document.getElementById('sim').addEventListener("click", function(){

    window.location.href = "../pictures/fotos.html"
})