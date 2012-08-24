$(document).ready(function(){

  jQuery('.thumbnail').each(function() {
    if( jQuery(this).find('.pic').length > 1 ) {
      //---------------------------------------------------------
      jQuery(this).bind('mouseover', function(){
        jQuery(this).attr('mouse','in');

        if( jQuery(this).find('.pic[folded="1"]').length > 0 ) return;
        var base_img = jQuery(this).find('.pic.last');
        jQuery(this).find('.pic').css( {width: (parseInt(base_img.css('width')) - 2) + 'px', border: '1px solid white' } );
        var deg = 15;
        var qd = deg/(jQuery(this).find('.pic').length - 1);
        var q  = (deg/2);

        jQuery(this).find('.pic').each(function(){
          jQuery(this).css( {display: 'inline', border:'1px solid white'} );
          jQuery(this).animate({'margin-left':q*5},{
            duration: 200,
            step: function(now){jQuery(this).rotate({angle: parseInt(now/5) }); jQuery(this).attr('inaction',1); jQuery(this).attr('folded',1 ); },
            complete: function( ) { jQuery(this).attr('inaction',0); if( jQuery(this.parentNode.parentNode).attr('mouse') == 'out') jQuery(this.parentNode.parentNode).trigger('mouseout'); }
          });
          q = q - qd;
        });

      });
      //---------------------------------------------------------
      jQuery(this).bind('mouseout', function(){
        jQuery(this).attr('mouse','out');

        if( jQuery(this).find('.pic[inaction="1"]').length > 0 || jQuery(this).find('.pic[folded="0"]').length > 0 ) return;

        jQuery(this).find('.pic').animate({'margin-left':0},{
          duration: 100,
          step: function(now){jQuery(this).rotate({angle: parseInt(now/5) }); jQuery(this).attr('inaction',1); },
          complete: function( ) { jQuery(this).attr('inaction',0); jQuery(this).attr('folded',0).css({border:'none', width: (parseInt(jQuery(this).css('width')) + 2) + 'px'}); }
        });
      });
      //---------------------------------------------------------
    }
  })
});
