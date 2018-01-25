DROP DATABASE IF EXISTS bamazondb;
CREATE DATABASE bamazondb;

USE bamazondb;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO `bamazondb`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('1001', 'swiffer', 'household goods', '10.00', '2');
INSERT INTO `bamazondb`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('1002', 'dishsoap', 'household goods', '13.55', '8');
INSERT INTO `bamazondb`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('1003', 'snow shovel', 'hardware', '20.00', '33');
INSERT INTO `bamazondb`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('1004', 'rock salt', 'hardware', '5.00', '10');
INSERT INTO `bamazondb`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('1005', 'pencils', 'office supplies', '2.95', '30');
INSERT INTO `bamazondb`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('1006', 'staples', 'office supplies', ' 5.00', '20');
INSERT INTO `bamazondb`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('1007', 'fabric softener', 'household goods', '8.00', '3');
INSERT INTO `bamazondb`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('1008', 'dog food', 'pet supplies', '50.00', '6');
INSERT INTO `bamazondb`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('1009', 'dog treats', ' pet supplies', ' 16.00', ' 18');
INSERT INTO `bamazondb`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('1010', 'light bulbs', 'hardware', '40.00', '40 ');