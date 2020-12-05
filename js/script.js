$(function() {
    var carouselList = $('#carousel ul');
    fullCircle();

    function changeSlide() {
        carouselList.animate({'marginLeft':'-100vw'}, 500, moveFirstSlide);
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({'marginLeft':0});
        fullCircle();
    }
  
    $('#angleLeft').click(function() {
        carouselList.css('marginLeft', '-100vw');
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.animate({'marginLeft':'0vw'}, 500);
        fullCircle();
    });

    $('#angleRight').click(function() {
        changeSlide();
    }); 

    function fullCircle() {
        $('a').removeClass('active');
        var actualSlide = carouselList.find('li:first').attr('id');
        var currentCircle = $('#circle' + actualSlide);
        var actualCircle = currentCircle.attr('data-slide-to');
        
        if (actualSlide === actualCircle) {
            currentCircle.addClass('active');
        }
    }  
});


