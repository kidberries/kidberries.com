// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {
  $(function(){

    // add tipsies to grid for scaffolding
    if ($('#grid-system').length) {
      $('#grid-system').tooltip({
          selector: '.show-grid > div'
        , title: function () { return $(this).width() + 'px' }
      });

    }

    // fix sub nav on scroll
    var $win = $(window)
      , $nav = $('.filterset')
      , navTop = $('.filterset').length && $('.filterset').offset().top - 20
      , isFixed = 0

    processScroll()

    // hack sad times - holdover until rewrite for 2.1
    $nav.on('click', function () {
      if (!isFixed) setTimeout(function () {  $win.scrollTop($win.scrollTop() - 47) }, 10)
    })

    $win.on('scroll', processScroll)

    function processScroll() {
      var i, scrollTop = $win.scrollTop()
      if (scrollTop >= navTop && !isFixed) {
        isFixed = $nav.parent();
        $nav.wrap('<div class="navbar-fixed-top"><div class="navbar-inner" style="height: 40px;"><div class="container"><div class="nav-collapse"/></div></div></div>')
        $nav.addClass('fixed');
      } else if (scrollTop <= navTop && isFixed) {
        isFixed.empty();
        $nav.remove('fixed');
        isFixed.append( $nav );
        isFixed = undefined;
      }
    }
  })
}(window.jQuery)