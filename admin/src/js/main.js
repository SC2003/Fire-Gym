/**********************AdminPanel JS**********************/
let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);

tabTogglers.forEach(function (toggler) {
  toggler.addEventListener("click", function (e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      tabTogglers[i].parentElement.classList.remove(
        "border-blue-400",
        "border-b",
        "-mb-px",
        "opacity-100"
      );
      tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
    }
    e.target.parentElement.classList.add(
      "border-blue-400",
      "border-b-4",
      "-mb-px",
      "opacity-100"
    );
  });
});

document.getElementById("default-tab").click();

/**********************Animate on Scroll Library**********************/
AOS.init({
  delay: 200,
  duration: 1200,
  once: false,
});
/**********************Scroll To The Top Of The Page After Every Reload
$("html, body").animate({ scrollTop: $("#home").offset().top }, 1000);**********************/
/**********************Contact Form to Email Using FormSubmit.Co and Ajax
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
});**********************/
