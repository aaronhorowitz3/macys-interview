$("#choiceBlack").on("click", function() {
  $("#blackdress")
    .removeClass("hidden")
    .siblings()
    .addClass("hidden");
  $(".colorSelection").html("black");
  $(this)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
});

$("#choiceBlue").on("click", function() {
  $("#bluedress")
    .removeClass("hidden")
    .siblings()
    .addClass("hidden");
  $(".colorSelection").html("blue");
  $(this)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
});

$("#choiceWhite").on("click", function() {
  $("#whitedress")
    .removeClass("hidden")
    .siblings()
    .addClass("hidden");
  $(".colorSelection").html("white");
  $(this)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
});

$("#choiceRed").on("click", function() {
  $("#reddress")
    .removeClass("hidden")
    .siblings()
    .addClass("hidden");
  $(".colorSelection").html("red");
  $(this)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
});

$("#choiceS").on("click", function() {
  $(".sizeSelection").html("small");
  $(this)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
});

$("#choiceM").on("click", function() {
  $(".sizeSelection").html("medium");
  $(this)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
});

$("#choiceL").on("click", function() {
  $(".sizeSelection").html("large");
  $(this)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
});

$("#choiceXL").on("click", function() {
  $(".sizeSelection").html("extra large");
  $(this)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
});

$("#choice1").on("click", function() {
  $(this)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  $(".quantitySelection").html("1");
  $("#multiple").html("");
  $("#totalPrice").html("59.90");
});

$("#choice2").on("click", function() {
  $(this)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  $(".quantitySelection").html("2");
  $("#multiple").html("es");
  $("#totalPrice").html("119.80");
});

$("#choice3").on("click", function() {
  $(this)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  $(".quantitySelection").html("3");
  $("#multiple").html("es");
  $("#totalPrice").html("179.70");
});

$("#choice4").on("click", function() {
  $(this)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  $(".quantitySelection").html("4");
  $("#multiple").html("es");
  $("#totalPrice").html("239.60");
});

$("#choice5").on("click", function() {
  $(this)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  $(".quantitySelection").html("5");
  $("#multiple").html("es");
  $("#totalPrice").html("299.50");
});

$("#shipping").on("click", function() {
  $("form").removeClass("hidden");
});

$("#checkout").on("click", function(e) {
  e.preventDefault();
  $("#summary").removeClass("hidden");
  $("form").addClass("hidden");
  $("#edit").html("edit");
});
