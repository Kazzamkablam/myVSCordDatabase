var productHandler = {
    //Add the record in database, it adds record or row in Web SQL (SQLite)
    addProduct: function (username, passwords) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into userManager(username, passwords) values(?, ?)",
                    [username, passwords],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("add product error: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
}