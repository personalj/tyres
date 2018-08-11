$(document).ready(function() {
  $('.hero-slider').lightSlider({
      item:1,
      loop:true,
      // easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      // speed:600,
      adaptiveHeight: true
      // auto: true
  });
  AOS.init();
  $('.brands__elem .btn').on('click',function(e) {
  	 e.preventDefault();
  	 var $this = $(this),
  	 	 container = $this.closest('.brands'),
  	 	 elemHidden = container.find('.brands__items-row:nth-child(2)');
  	 	 elemHidden.slideToggle(300).toggleClass('hidden');
  	 	 $this.toggleClass('js-text');
  	 	 if(!$this.hasClass('js-text')) {
  	 	 	$this.html('Смотреть все');
  	 	 } else {
  	 	 	$this.html('Свернуть');
  	 	 }
  });
  $(window).on('load scroll resize', function() {
  	    var $this = $(this),
  	        offsetTop = $this.scrollTop(),
  	        btn = $('.btn-top'),
  	        elemStart = $('.benefits__row').offset().top -30,
  		      elemStartPos = -30,
  		      elemEndPos,
  		      windowCenter = $(window).height() / 2 + $(window).scrollTop();

        if ($(window).width() < 544) {
             elemEndPos = 330;
        }else {
           elemEndPos = $('.benefits').height() - 400;
        }
  		
  		  if (windowCenter > elemStart) {
  			
  			var offset = elemStartPos + windowCenter - elemStart;
  			if (offset < elemStartPos)
  				offset = elemStartPos;
  			if (offset > elemEndPos)
  				offset = elemEndPos;
  			
  			$('.benefits__elem').css('top', offset);
  		}
  		if(offsetTop > 200) {
  			btn.fadeIn(300).removeClass('hidden');
  		}else {
  			btn.fadeOut(300).addClass('hidden');
  		}
  		
  	});
$('.btn-top').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({
	    scrollTop: 0
	}, 800);
}) 
  $('.gallery__slider').lightSlider({
          gallery:true,
          item:1,
          loop:true,
          thumbItem:8,
          slideMargin:0,
          enableDrag: false,
          currentPagerPosition:'left',
          responsive : [ 
	        {
	            breakpoint:544,
	            settings: {
	            thumbItem:5
	                     }
	                },
	            {
	                breakpoint:350,
	                settings: {
	                thumbItem:3
	                         }
	                    }

	        ],
          onSliderLoad: function(el) {
              el.lightGallery({
                  selector: '.gallery__slider .lslide'
              });
          }   
      });
    $('.nav__list a[href^="#"]').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 50 }, 500);
        }
        $('.nav__list').add('.nav__burger').removeClass('active');
        return false;
    });
    $('[data-opener]').click(function() {
			$this = $(this);
			if($this.is('.active')) {
				$this.removeClass('active');
				$('[data-target="'+$this.data('opener')+'"]').removeClass('active');
			}else{
				$this.addClass('active');
				$('[data-target="'+$this.data('opener')+'"]').addClass('active');
			}
	});
   $('.loader-wrapper').remove();
   $("#form").submit(function(e) {
    		e.preventDefault();
            var form_data = $(this).serialize();
            $.ajax({
            url: "send.php", 
            type: "POST",
            data: form_data,
            success: function() {
            	   $('.contact-pop-up').fadeIn(300).addClass('active');
            	   setTimeout(function(){ $('.contact-pop-up.active').fadeOut(300).removeClass('active') }, 3000);
           		   $('.contact-form__input').val('');
           		   $('.contact-form__textarea').val('');
                }
            });
    });
   $('.contact-pop-up').click(function(){
    $(this).fadeOut(300).removeClass('active');
   });
   $(document).click( function(event){
        if( $(event.target).closest('.contact-pop-up').length ) 
          return;
        $('.contact-pop-up').fadeOut(300).removeClass('active');
        event.stopPropagation();
    });
   $(".contact-form__tel").mask("(999) 999-9999");
});