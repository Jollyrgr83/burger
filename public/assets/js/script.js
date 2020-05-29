$(() => {
    $(".devour").on("click", (event) => {
        var id = $(event.target).data("id");
        console.log("devour button id: ", id);
        var body = {
            id: id
        };

        // sends PUT request
        $.ajax("/api/", {
            type: "PUT",
            data: body
        }).then(() => {
            console.log("Updated devoured status of: ", id);
                // reload page to update lists
                location.reload();
            }
        );
    });
    
    $("#submit").on("click", (event) => {
      // prevents default submit event
      event.preventDefault();
  
      var body = {
        name: $("#input").val().trim()
      };
  
      // sends POST request
      $.ajax("/api/", {
        type: "POST",
        data: body
      }).then(() => {
          console.log("Added new burger: ", body.name);
          // reload page to update lists
          location.reload();
        }
      );
    });
  
});
  