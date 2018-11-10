
console.log('hello world');


//change opacity of title-card depending on how far you scroll
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.oHeader').css({
      opacity: function() {
        var elementHeight = $(this).height();
        return (elementHeight - scrollTop * 1.5) / elementHeight;
      }
    });
  });