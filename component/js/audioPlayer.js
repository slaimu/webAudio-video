/*global console, rJS, window, jQuery, RSVP, handleError */
/*jslint nomen: true*/
(function (window, rJS) {
  "use strict";

  rJS(window).ready(function (g) {
    // First, load the progress gadget
    g.declareGadget('../html/progress.html')
      .then(function (progress) {
        progress.setValue(50);
        progress.setMax(100);
        return [50,100];
      })
      .then(function (e) {
        console.log(e[0] + e[1]);
      })
      .fail(function(e){
        console.log("error" + e);
      });
  });
}(window, rJS));
