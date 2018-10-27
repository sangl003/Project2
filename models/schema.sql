Use apicatalog;

CREATE TABLE apilists
(
    id int PRIMARY key not null auto_increment,
    text VARCHAR(255) not null,
    category VARCHAR(255) not null,
    WebsiteURL VARCHAR(255) not null,
    description varchar(255) not null,
    Authentication VARCHAR(255) not null
    OverallRating int not null,
    Documentation int not null,
    Easy int not null,
);

CREATE TABLE APIratings
(
id int PRIMARY key not null auto_increment,
overall int not null,
documentation int not null,
ease int not null

);