Use apicatalog;

CREATE TABLE apilists
(
    id int PRIMARY key not null auto_increment,
    apiname VARCHAR(255) not null,
    category VARCHAR(255) not null,
    websiteURL VARCHAR(255) not null,
    shortdescription varchar(255) not null,
    authentication VARCHAR(255) not null
);

CREATE TABLE APIratings
(
id int PRIMARY key not null auto_increment,
overall int not null,
documentation int not null,
ease int not null

);