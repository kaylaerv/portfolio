//instantiate clipboard.js
$( document ).ready(function() {
    var clipboard = new Clipboard('.clipboard');
  });

//on footer button click, add class to show copied to clipboard message
$(".clipboard").click(function(){
  $(".clip-message").addClass("show-hide");
});

//after copied to clipboard message animates, remove class to hide
$(".clip-message").on(
  "webkitAnimationEnd oanimationend msAnimationEnd animationend",
  function() {
      $(this).removeClass("show-hide");
  }
);

/*************************************
Truncate project descriptions on the home page
Commented out because need to be able to repeat for other entries, not just the first.
**************************************/
// $(".project-description").text(function (index, currentText) {
//   return currentText.substr(0, 300) + "...";
// });