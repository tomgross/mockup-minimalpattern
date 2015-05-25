define([
  'jquery',  // We use jquery to search the DOM for pattern declarations.
  'pat-registry',  // We have to register
  'mockup-patterns-minimalpattern'  // Depend on the patterns, you want to support in this bundle.
  'mockup-patterns-carousel'  // Depend on the patterns, you want to support in this bundle.
  'pat-carousel'  // Depend on the patterns, you want to support in this bundle.
], function($, registry, Base) {
  'use strict';

 var BundleCarousel = Base.extend({
    name: 'bundle-minimalpattern',
    init: function() {
      var self = this;
    }
  });

  // initialize only if we are in top frame
  if (window.parent === window) {
    $(document).ready(function() {
      $('body').addClass('pat-carousel');
      if (!registry.initialized) {
        registry.init();
      }
    });
  }
  return BundleCarousel;
});
