$(function() {
    $(".change-devoured").on("click", function(event) {
      
        let id = $(this).data("id");
        let newDevoured = $(this).data("newdevoured");
  
        let newDevouredState = {
            devoured: newDevoured
        };

        // Sets up update function from the front-end
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
        function() {
            console.log("changed devoured status to", newDevoured);
            location.reload();
        }
        );
    });
  
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        
        //grabes the name of the burger and devoured state from the form
        let newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
  
        // Sends the post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
        function() {
            location.reload();
        }
        );
    });
  });
  