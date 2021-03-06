/*!
 * jQuery Fader Plugin v1
 * https://github.com/richard-parnaby-king/Responsive-Images
 *
 * @Copyright 2013 Richard Parnaby-King
 * @author Richard Parnaby-King
 * Released under the MIT license
 */
(function($){
  "use strict";
  $.fn.responsivePictures = function(){
    //only run this code if window.matchMedia is available
    if(window.matchMedia) {
      this.each(function() {
      
      //replace all <picture> elements with <img> elements with correct src
          //replacement image:
          var img = document.createElement('img');

          //find image src that matches media command
          var src = $(this).find('source');
          src.each(function(){
            var s = $(this);
            
            //if no media attribute located, set it to apply to all screen
            if(s.attr('media') === undefined) {
              s.attr('media','(min-width:0)');
            }
            
            //If media query is valid, then set the source url
            if(window.matchMedia(s.attr('media')).matches) {
              img.src = s.attr('src');
              return false;
            }
          });

          //Not found a valid image. Stop processing
          if(img.src.length === 0) {
            return;
          }

          //Set the alt text (good for SEO)
          img.alt = $(this).find('img').attr('alt');

          //replace picture with image
          $(this).replaceWith(img);
        });
    } else {
      console.log('window.matchMedia is not supported in this browser');
    }
  }
  $('picture').responsivePictures();
})(jQuery);