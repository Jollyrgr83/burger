$(() => {
    $(".devour").on("click", (event) => {
        var body = {
            id: $(event.target).data("id")
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
    $(".delete").on("click", (event) => {
        var body = {
            id: $(event.target).data("id")
        };
        // sends DELETE request
        $.ajax("/api/", {
            type: "DELETE",
            data: body
        }).then(() => {
            console.log("Deleted: ", id);
            // reload page to update lists
            location.reload();
        });
    });
    $("#form").submit((event) => {
        // prevents default submit event
        event.preventDefault();
        var body = {
          name: $("#input").val().trim()
        };
        if (body.name === "") {
            return;
        }
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