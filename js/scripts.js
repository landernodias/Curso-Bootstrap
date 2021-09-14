/**
 * Função ready: é uma função do JQuery que só executa depois do documento estar completamente carregado
 */
//inicia JQuery
$(document).ready(function(){

    //Progress bar
    let containerA = document.getElementById("circleA");

    //utilizando biblioteca ProgressBar para criar um circulo animado
    let circleA = new ProgressBar.Circle(containerA, {

        color: '#64DAF9',//cor do circulo
        strokeWidth: 8,//tamanho do circulo
        duration: 1400,//tempo de animação
        from: { color: '#AAA'},//dor no começo da animação
        to: { color: '#65DAF9'},//cor final da animação

        //é o que faz o paço da nimação
        step: function(state, circle){
            
            circle.path.setAttribute('stroke', state.color);

            //valor do circulo 60 é o numero final
            let value = Math.round(circle.value() * 60);

            circle.setText(value);
        }
    });


    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#64DAF9',//cor do circulo
        strokeWidth: 8,//tamanho do circulo
        duration: 1600,//tempo de animação
        from: { color: '#AAA'},//dor no começo da animação
        to: { color: '#65DAF9'},//cor final da animação

        //é o que faz o paço da nimação
        step: function(state, circle){
            
            circle.path.setAttribute('stroke', state.color);

            //valor do circulo 60 é o numero final
            let value = Math.round(circle.value() * 254);

            circle.setText(value);
        }
    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#64DAF9',//cor do circulo
        strokeWidth: 8,//tamanho do circulo
        duration: 2000,//tempo de animação
        from: { color: '#AAA'},//dor no começo da animação
        to: { color: '#65DAF9'},//cor final da animação

        //é o que faz o paço da nimação
        step: function(state, circle){
            
            circle.path.setAttribute('stroke', state.color);

            //valor do circulo 60 é o numero final
            let value = Math.round(circle.value() * 32);

            circle.setText(value);
        }
    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#64DAF9',//cor do circulo
        strokeWidth: 8,//tamanho do circulo
        duration: 2200,//tempo de animação
        from: { color: '#AAA'},//dor no começo da animação
        to: { color: '#65DAF9'},//cor final da animação

        //é o que faz o paço da nimação
        step: function(state, circle){
            
            circle.path.setAttribute('stroke', state.color);

            //valor do circulo 60 é o numero final
            let value = Math.round(circle.value() * 5243);

            circle.setText(value);
        }
    });

    // iniciando um leader quando o usuario chega no elemento
    let dataAreaOffset = $('#data-area').offset();//pega a posição da div data-area
    let stop = 0;

    $(window).scroll(function(e){
        //posição de scroll do usuario
        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

            //start na animação
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;

        }
    });

    //Paralax
    // setTimeout: espera carregar todas imagens primeiro para depois executar o parallax
    setTimeout(function(){

        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});

    }, 250);

    //Filtro do portfólio

    $('.filter-btn').on('click', function(){ //quando for clicado faça:
        let type = $(this).attr('id'); //identifica qual botão foi clicado
        let boxes = $('.project-box');//identifica todas as box tem no projeto
        
        //removendo a classe active na classe main btn
        $('.main-btn').removeClass('active');
        $(this).addClass('active');//adciona na classe que foi clicado a active

        if(type == 'dsg-btn') {
            eachBoxes('dsg', boxes);
        } else if(type == 'dev-btn'){
            eachBoxes('dev', boxes);
        } else if (type == 'seo-btn') {
            eachBoxes('seo',boxes);
        } else {
            eachBoxes('all', boxes);
        }
    });

    function eachBoxes(type, boxes) {

        if(type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function () {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                }else {
                    $(this).fadeIn();
                }
            });
        }
    }

});