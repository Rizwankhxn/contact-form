$(document).ready(function () {
  $("#contact-form").submit(function (e) {
    e.preventDefault();

    // Simulate form submission and show success message
    setTimeout(function () {
      $("#success-message").text("Message sent successfully!");
      $("#success-message").show();
      $("#contact-form")[0].reset();
    }, 1000);
  });
});

$(document).ready(function () {
  $("#name").click(function () {
    $(this).hide();
  });
});

$(document).ready(function () {
  $("#email").click(function () {
    $(this).css("color", "red");
  });
});

$(document).ready(function () {
  $("button").click(function () {
    alert("This is submit button");
  });
});

$(document).ready(function () {
  $("button").click(function () {
    $("div").animate({
      height: "toggle",
    });
  });
});

$(document).ready(function () {
  $("#message").click(function () {
    $("#Message").hide("slow", function () {
      alert("This input textarea is now hidden");
    });
  });
});
