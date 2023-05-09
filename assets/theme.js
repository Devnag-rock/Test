   $(document).ready(function(){

      $(function () {
      // Card's slider
        var $carousel = $('.slider-for');
        $carousel
          .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            adaptiveHeight: true,
            asNavFor: '.slider-nav'
          })

        $('.slider-nav').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: false,
          centerMode: false,
          focusOnSelect: true,
          variableWidth: true
        });
      });
  // Remove active class from all thumbnail slides
  $('.slider-nav .slick-slide').removeClass('slick-active');

  // Set active class to first thumbnail slides
  $('.slider-nav .slick-slide').eq(0).addClass('slick-active');

  // On before slide change match active thumbnail to current slide
  $('.slider-for').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav .slick-slide').removeClass('slick-active');
    $('.slider-nav .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });

      $('.color').click(function() {
     var color = $(this).attr('data-value');
        var color_calss = '.color_'+color;
        $(".slider-nav").slick('slickFilter', color_calss);
        $('.slider-nav').slick('resize');
        $(".slider-for").slick('slickFilter', color_calss);
        $('.slider-for').slick('resize');
        });

       });


 // pagination code
$('.js-load-more').on('click', function(){
 var $this =$(this),
 totalPages = parseInt($('[data-all-pages]').val()),
 currentPage = parseInt($('[data-this-page]').val()),
 datacollurl = $('[data-coll-url]').val();;
 $this.attr('disabled', true);
 $this.find('[load-more-text]').addClass('hide');
 $this.find('[loader]').removeClass('hide');
 var nextUrl = $('[data-next-link]').val();
 var current_page_new = currentPage + 1;
 var next_coll = currentPage + 2;
 //alert(current_page_new)
 //return false;
 $.ajax({
 url: nextUrl,
 type: 'GET',
 dataType: 'html',
 success: function(responseHTML){
 $('[data-next-link]').val(datacollurl + "?page="+next_coll);
 $('[data-this-page]').val(current_page_new);
 $('.grid--view-items').append($(responseHTML).find('.grid--view-items').html());
 },
 complete: function() {
 if(current_page_new < totalPages) {
 $this.attr('disabled', false); $this.find('[load-more-text]').removeClass('hide'); $this.find('[loader]').addClass('hide');
 } 
 if(current_page_new >= totalPages) {
 $this.find('[load-more-text]').text('Products Finished').removeClass('hide'); $this.find('[loader]').addClass('hide');
 } 
 }
 })
});
