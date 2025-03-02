import $ from "jquery";

$(document).ready(function () {
  $(".card__button").on("click", function () {
    if ($(this).css("background-color") === "rgb(122, 184, 0)") {
      $(this).css("background-color", "#CC292B");
    } else {
      $(this).css("background-color", "#7AB800");
    }
  });
});
