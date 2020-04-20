$(function(){
    let header=$("#header");
    let intro=$("#intro");
    let introH = intro.innerHeight();//получаем выстоу блока интро
    let scrollPos = $(window).scrollTop();//получаем значение сколько мы проскролили
    
    $(window).on("scroll load resize", function(){//делаем проверку при скроле загрузке и изменении размера
        introH = intro.innerHeight() - 300;//перезаписывваем при каждом событии
        scrollPos = $(this).scrollTop();//отслеживаем изменение значения скрола
         if( scrollPos > introH ){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    });
    
    
    //плавный скролл
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();//стандартное поведение по ссылке
        let elementId = $(this).data('scroll');//присваиваем переменной значение ссылки по которой кликаем
        let elementOffset = $(elementId).offset().top - 70;//находим отсутп от верха страницы
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffset
        }, 700);//плавность прокрутки, время за которое происходит перемещение в нужную позицию
    });  
    
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    navToggle.on("click", function(event){
        event.preventDefault();
        nav.toggleClass("show"); 
    })
    //REVIEWS https://github.com/kenwheeler/slick/
    let slider = $("#reviewsSlider");
    slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true

    });
    
    
    
    $(document).ready(function(){
      //при нажатию на любую кнопку, имеющую класс .modal_btn
      $(".modal_btn").click(function() {
        //открыть модальное окно с id="myModal"
        $("#myModal").modal('show');
      });
    });
    
    
}); 