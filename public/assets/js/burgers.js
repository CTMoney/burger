

$("#submit-btn").on("click", function () {

  event.preventDefault();

  let newBurgerReq = { burgerName: $("#burgerName").val().trim() }
  console.log(newBurgerReq.burgerName + " onclick event");

  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurgerReq
  }).then(
    () => {
      console.log("New hamburger created");
      location.reload();
    })

})

$(document).on("click", "#devour-btn", function () {
  let id = $(this).data("id");
  console.log(id);

  $.ajax(`/api/burgers/${id}`, {
    type: "PUT"
  }).then(
    function () {
      console.log("burger devoured");
      location.reload();
    }
  );
})

