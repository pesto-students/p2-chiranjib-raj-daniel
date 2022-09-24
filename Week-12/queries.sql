SELECT * FROM ITEMS WHERE weight = (SELECT MIN(weight) FROM ITEMS);

SELECT * FROM WAREHOUSES WHERE location = "Pune";

SELECT * FROM ORDERS
INNER JOIN CUSTOMER ON ORDERS.customer_id = customer.cno
INNER JOIN ITEMS ON ORDERS.item_id = ITEMS.itemno;

SELECT * FROM ITEMS  WHERE itemno = (SELECT ONO FROM ORDERS GROUP BY ONO ORDER BY count(ONO) limit 1);

SELECT * FROM STORES WHERE WID = (SELECT WID FROM GROUP BY WID ORDER BY count(WID) desc limit 1);

SELECT * FROM ORDERS INNER JOIN CUSTOMER ON ORDERS.ONO = customer.cno WHERE cname = "Mr. Patil";