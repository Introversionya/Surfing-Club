$(document).ready(function(){

            const headerSlider = $(".owl-carousel");
            headerSlider.owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            smartSpeed: 1000
        });
        

        $('#headerSliderLeft').click(function() {
            headerSlider.trigger('prev.owl.carousel');
        })


        $('#headerSliderRight').click(function() {
            headerSlider.trigger('next.owl.carousel');
        })
});