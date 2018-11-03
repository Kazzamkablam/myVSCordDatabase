//Creating a datbase
$(document).on("ready", function () {
    databaseHandler.createDatabase();
});
//Adding item in table
function addProduct() {
    var name = $("#txtName").val();
    var quantity = $("#txtPassword").val();

    if (!name) {
        alert("Username is required");
    } else {
        var r = confirm("Name: " + name + "\n" + "Quantity: " + quantity);
        if (r == true) {
            productHandler.addProduct(name, quantity);
            $("#txtName").val("");
            $("#txtPassword").val("");
        }
    }
}