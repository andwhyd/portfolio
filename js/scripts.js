/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
(function ($) {
  "use strict"; // Start of use strict

  // Tabs
  $('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $(".dropdown").hover(
    function() {
      $('#navigationP').collapse('show');
     }, function() {
      $('#navigationP').collapse('hide');
     }
   );

})(jQuery); // End of use strict
