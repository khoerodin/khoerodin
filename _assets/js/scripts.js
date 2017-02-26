jQuery(function($) {
  hljs.initHighlightingOnLoad(); hljs.initLineNumbersOnLoad();
  
  if($(window).width() < 600){
    $('.page-link').removeClass('button');
  }

  $(document).ready(function(){
    // jquery.fitvids.js
    $(".post").fitVids();
    // jScrollPane
    if ( $( ".episodes" ).length ) { 
      $(function(){$('.episodes').jScrollPane();});
    }    
  });

  if ( $( ".episodes" ).length && $( ".series-wrapper" ).length ) {
    var height = $(window).height() - 250;
    var contentHeight = $('.series-wrapper').height();

    $('.episodes').css('max-height', height);
    $('.episodes').css('overflow-x', 'auto');

    var episodes_height = $('.episodes').height();

    $(window).scroll(function() {

      var scrollPosition = window.pageYOffset;
      var windowSize     = window.innerHeight;
      var bodyHeight     = document.body.offsetHeight;

      // jarak dari bawah ke posisi scroll
      var scrollBottom = Math.max(bodyHeight - (scrollPosition + windowSize), 0);

      // jarak dari .sidebar ke kanan
      var to_right_distance = $(window).width() - ($('.sidebar').offset().left + $('.sidebar').outerWidth());

      if (scrollBottom < 17 && episodes_height >= height && ( contentHeight > height ) ){
          $('.sidebar').removeClass("sticked-sidebar");
          $('.sidebar').css("right", "");
          $('.sidebar').addClass("release-sidebar");
      }
      else{
          $('.sidebar').removeClass("release-sidebar");

          if ($(this).scrollTop() > 50){
              $('.sidebar').addClass("sticked-sidebar");
              $('.sidebar').css('right', to_right_distance + 'px');
          }
          else{
              $('.sidebar').removeClass("sticked-sidebar");
              $('.sidebar').css("right", "");
          }
      }
    });
  } 

  $(document).ready(function() {
      $(".page-content").each(function() {
          var original = $(this).html();
          // use .shortnameToImage if only converting shortnames (for slightly better performance)
          var converted = emojione.shortnameToImage(original);
          $(this).html(converted);
      });
  });

});