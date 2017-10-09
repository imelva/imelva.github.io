/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

 var cover_slide = 1;

function cover_transition() {
  var c = $(".cover-hero-item:nth-child(" + cover_slide + ")");
  if (cover_slide == 5) {
      var b = $(".cover-hero-item:nth-child(1)");
      cover_slide = 1
  } else {
      var b = $(".cover-hero-item:nth-child(" + (cover_slide + 1) + ")");
      cover_slide++
  }
  b.removeClass("cover-hero-item-inactive");
  setTimeout(function() {
      c.addClass("cover-hero-item-hidden");
      b.addClass("cover-hero-item-active");
      setTimeout(function() {
          c.addClass("cover-hero-item-inactive");
          setTimeout(function() {
              c.removeClass("cover-hero-item-hidden cover-hero-item-active")
          }
          , 0)
      }
      , 150)
  }
  , 0);
}
$(document).ready(function() {
    setInterval(function() {
        cover_transition()
    }
    , 2000);

    // Magnific popup
    magnific_pop_up();

    var $startup = $(".Startup").fadeIn(450);
    $('#parent > div').not($startup).hide();

    var $internship = $(".Internship").fadeIn(450);
    $('#parent > div').not($internship).hide();

    var $org = $(".Organization").fadeIn(450);
    $('#parent > div').not($org).hide();

    var $highlights = $(".Highlights").fadeIn(450);
    $('#parent > div').not($highlights).hide();
});

function magnific_pop_up() {
  if( $("a.image-link").length){
     $("a.image-link").click(function (e) {
        var items = [];          
        items.push( { src: $(this).attr('href')  } );
        if($(this).data('gallery')){
            var $arraySrc = $(this).data('gallery').split(',');
            $.each( $arraySrc, function( i, v ){
                items.push( {
                    src: v 
                });
            });     
        } 
        $.magnificPopup.open({
            type:'image',
            mainClass: 'mfp-fade',
            items:items,
            gallery: {
              enabled: true 
            }
        });
        e.preventDefault();
    });
  }
  if( $("a.image-iframe").length){
       $('a.image-iframe').magnificPopup({type:'iframe',mainClass: 'mfp-fade'});
  }
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Filtering experiences
var $btns = $('.btn').click(function() {
  if (this.id == 'All') {
    $('#parent > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > div').not($el).hide();
  }
  $btns.removeClass('active');
  $btns.removeClass('btn-inverse');
  $(this).addClass('active');
  $(this).addClass('btn-inverse');
})

