var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password

  password: "",
  database: "bamazondb"
});

connection.connect(function (err) {
  if (err) throw err;
  displayProducts();
  // runSearch();

});

function displayProducts() {
  connection.query("SELECT * FROM bamazondb.products ", function (err, res) {
    res.forEach(function (val) {
      console.log(`ID: ${val.item_id}  PRODUCT: ${val.product_name}      DEPARTMENT: ${val.department_name}     PRICE: ${val.price}    QUANTITY: ${val.stock_quantity}`);
      console.log("----------------------------------------------------------------------------------------------------------");

    });

    runSearch();
  });
}

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What product would you like to order?",
      choices: [
        "Find item by id",
        "Find name of product ",
        "Find department name ",
        "Search for how much product is available in store"
      ]

      // fix this with james 
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Find item by id":
          item_idSearch();
          break;

        case "Find name of product ":
          multiSearch();
          break;

        case "Find department name":
          rangeSearch();
          break;

        case "Search for how much product is available in store":
          songSearch();
          break;
      }
    });
}
// the id is a number not a string 
function item_idSearch() {
  inquirer
    .prompt({
      name: "item",
      type: "input",
      message: "What is the id of the product would you like to search for?"
    })
    // having problems interpreting this 
    .then(function (answer) {
     var userchoice = parseInt(answer.item);
      
      var query = "SELECT * FROM bamazondb.products WHERE ?";
      connection.query(query, {
        item_id: userchoice
      }, function (err, res) {
        console.log(res);
        
        // for (var i = 0; i < res.length; i++) {
        //   console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
        // }
        // runSearch();
      });
    });
}

function multiSearch() {
  var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
  connection.query(query, function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].artist);
    }
    runSearch();
  });
}

function rangeSearch() {
  inquirer
    .prompt([{
        name: "start",
        type: "input",
        message: "Enter starting position: ",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "end",
        type: "input",
        message: "Enter ending position: ",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    // what is this? 
    .then(function (answer) {
      var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
      connection.query(query, [answer.start, answer.end], function (err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(
            "Position: " +
            res[i].position +
            " || Song: " +
            res[i].song +
            " || Artist: " +
            res[i].artist +
            " || Year: " +
            res[i].year
          );
        }
        runSearch();
      });
    });
}

function songSearch() {
  inquirer
    .prompt({
      name: "song",
      type: "input",
      message: "What song would you like to look for?"
    })
    .then(function (answer) {
      console.log(answer.song);
      connection.query("SELECT * FROM top5000 WHERE ?", {
        song: answer.song
      }, function (err, res) {
        console.log(
          "Position: " +
          res[0].position +
          " || Song: " +
          res[0].song +
          " || Artist: " +
          res[0].artist +
          " || Year: " +
          res[0].year
        );
        runSearch();
      });
    });
}