```sh
mysql --version

# Acceder a mysql al motor
mysql -u root

```

```sql
SHOW DATABASES;

CREATE DATABASE tienda;

SHOW DATABASES;
USE tienda;
 CREATE TABLE productos (
    ->   id INT AUTO_INCREMENT PRIMARY KEY,
    ->   nombre VARCHAR(100),
    ->   precio DECIMAL(10,2)
    -> );


 INSERT INTO productos (nombre, precio)
    -> VALUES ("Camisa", 20.00);

 SELECT * FROM productos;


```
