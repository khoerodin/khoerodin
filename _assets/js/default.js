// for content page
$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($("div.side-icons").length > 0) {
      var icons = $(".side-icons").offset().top - 10;
      var content = $(".single-content").offset().top;
      var comments = $(".comments").offset().top;

      if (screen.width < 980) {
        additional = 50;
      } else {
        additional = 190;
      }

      if (icons > content && icons + additional < comments) {
        $(".side-icons").removeClass("transparent");
        $(".side-icons").addClass("solid");
        $(".side-icons .icon-item").css("cursor", "pointer");
        click_share = true;
      } else if (icons + additional >= comments) {
        $(".side-icons").addClass("transparent");
        $(".side-icons").removeClass("solid");
        $(".side-icons .icon-item").css("cursor", "default");
        click_share = false;
      } else {
        $(".side-icons").addClass("transparent");
        $(".side-icons").removeClass("solid");
        $(".side-icons .icon-item").css("cursor", "default");
        click_share = false;
      }
    }
  });
});

// get current URL
var currentURL =
  window.location.protocol +
  "//" +
  window.location.host +
  window.location.pathname;

// popup function
function windowPopup(url, width, height) {
  // Calculate the position of the popup so
  // it’s centered on the screen.
  var left = screen.width / 2 - width / 2,
    top = screen.height / 2 - height / 2;

  window.open(
    url,
    "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      top +
      ",left=" +
      left
  );
}
// end popup function

// twitter
$(document).on("click", ".share-to-tw", function(e) {
  if (click_share == true) {
    e.preventDefault();
    title = $(".parent-title a").text() + " " + $(".title").text();
    tweetUrl =
      "https://twitter.com/intent/tweet/?text=" +
      title.trim() +
      "&url=" +
      encodeURI(currentURL);
    windowPopup(tweetUrl, 500, 300);
  }
});
// end twitter

// facebook
$(document).on("click", ".share-to-fb", function(e) {
  if (click_share == true) {
    e.preventDefault();
    var shareUrl = $(this).attr("data-share");
    windowPopup(shareUrl, 500, 300);
  }
});
// end facebook
