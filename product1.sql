create table products (
	product_id int auto_increment ,
    product_name varchar(25) ,
    product_type varchar(20) ,
    product_manufacturing_date date ,
    product_arrival_date date ,
    product_quantity int ,
    product_price int ,
    product_expire_date date ,
    product_provider varchar(100),
    primary key (product_id)
);
insert into products VALUE( 1, "FX-6300" , "Процессор", "2012-05-01" , "2012-05-08", 1000, 4300, "2019-05-01" , "Малазия");
insert into products VALUE( 2, "Весёлый молочник" , "Молоко", "2015-11-15" , "2012-11-18", 500, 36, "2012-11-21" , "Молочный завод №1 г.Самара"); 
insert into products VALUE( 3, "Три поросёнка" , "Пельмени", "2019-05-09" , "2019-05-14", 2, 333, "2020-05-09" , "Мясокомбинат №4 г.Днепропетровск");
insert into products VALUE( 4, "Страна чудес" , "Конфеты", "1819-05-07" , "2019-05-07", 1, 13500, "2045-05-09" , "Шоколадная Фабрика г.Новосибирск");
insert into products VALUE( 5, "Твэрс" , "Лампа настольная", "2014-04-01" , "2016-10-07", 50, 200, "2021-10-07" , "Производственная компания Светорезерв г.Москва");
insert into products VALUE( 6, "Кува" , "Косметика", "2015-07-12" , "2015-08-29", 100, 500, "2016-08-14" , "Фирма Алиса г.Новосибирск");
insert into products VALUE( 7, "Ноггер" , "Мороженое", "2013-05-10" , "2018-05-20", 100, 1500, "2014-05-10" , "Фирма Алиса г.Омск");
insert into products VALUE( 8, "Couleur rose" , "Косметика", "2014-08-23" , "2015-09-15", 50, 4000, "2017-08-23" , "Фирма Алиса г.Тагил");
insert into products VALUE( 9, "Pepsi" , "Напиток", "2016-07-04" , "2016-07-14", 200, 100, "2017-01-04" , "Фирма Артубо г.Махачкала");
insert into products VALUE( 10, "Felix" , "Еда для животных", "2018-02-16" , "2018-02-25", 1000, 70, "2018-03-16" , "Фирма Тешин г.Барнаул") ;