/**********************Animate on Scroll Library**********************/
AOS.init({
  delay: 200,
  duration: 1200,
  once: false,
});
/**********************Scroll To The Top Of The Page After Every Reload**********************/
$("html, body").animate({ scrollTop: $("#home").offset().top }, 1000);
/**********************Contact Form to Email Using FormSubmit.Co and Ajax**********************/
$("#contactForm").on("submit", function () {
  var that = $(this),
    url = "https://formsubmit.co/ajax/guestpost404@gmail.com",
    method = "POST",
    data = {};
  that.find("[name]").each(function (index, value) {
    var that = $(this),
      name = that.attr("name"),
      value = that.val();

    data[name] = value;
  });
  $.ajax({
    url: url,
    method: method,
    data: data,
    success: function (response) {
      console.log(response);
    },
  });
  return false;
});
