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
    
    // FILTER
    let filter = $("[data-filter]");
    filter.on("click", function(event){
        event.preventDefault(); // отменяем стандартное поведение кнопки
        let cat = $(this).data('filter');
        $("[data-cat]").each(function(){
            let workCat = $(this).data('cat');
            
            if(cat == 'all'){
                $("[data-cat]").removeClass('hide');
            }
            else{
                if(workCat != cat){
                    $(this).addClass('hide');
                }
                else{
                    $(this).removeClass('hide');
                }
                
            }
            
            
        })
        

    });
    
    //MODAL
    let modalCall = $("[data-modal]");
    let modalClose = $("[data-close]");
    
    modalCall.on("click", function(event){
        event.preventDefault(); // отменяем стандартное поведение кнопки
        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
    })
    
    modalClose.on("click", function(event){
        event.preventDefault(); // отменяем стандартное поведение кнопки
        let $this = $(this);
        let modalParent = $this.parents('.modal');
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    })
    
}); 