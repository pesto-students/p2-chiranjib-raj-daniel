SELECT * FROM items WHERE weight = (SELECT MIN(weight) FROM items);

SELECT * FROM warehouses WHERE location = "Pune";

SELECT * FROM orders
INNER JOIN customer ON orders.customer_id = customer.cno
INNER JOIN items ON orders.item_id = items.itemno;

SELECT * FROM items  WHERE itemno = (SELECT item_id FROM orders GROUP BY item_id ORDER BY count(item_id) limit 1);

SELECT * FROM stores WHERE warehouses_id = (SELECT warehouses_id FROM GROUP BY warehouses_id ORDER BY count(warehouses_id) desc limit 1);

SELECT * FROM orders INNER JOIN customer ON orders.customer_id = customer.cno WHERE cname = "Mr. Patil";