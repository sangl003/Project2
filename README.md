# Project2
Project Title:
IPA - API Catalog

Group Members:
	Jeremy King
	Ravi Mangra
Sharvari Sangle
	Nichole Tester

Project Description:
	Catalog of most commonly used and available APIs for developers with user ability to rate and review the API and its documentation.

Features:
User can search API with a drop down 
User can search API with Advanced search option of category drop down
User can Add a new API 
User can rate an existing API 
User can view the API website in the explorer area by clicking through the list of results 
After a API is added the default status of the API should be Pending and the developers should receive a notification / trigger to review and approve the API details.

Sketch of Final Product:





APIs to be Used:
Rapid API
151 top API - https://www.creativebloq.com/web-design/apis-developers-need-know-121518469

Rough Breakdown of Tasks:
Frontend: 
Public 
Assets 
Css > designs
Bootstrap
materialize
JS > Ajax posts
Html > user interface  
Header & Footer on all three tabs
Home - Fancy Graphic and API Catalog description 
Search Panel Tab  
ADD API Tab 
Rate API tab 

Backend:
Models  
Database Name - APICatalog 
APITable - Primary key ID 
APIRatings - Foreign key ID and Name

( Every time a API is added the API name and ID are added to the Ratings table as well so that it can be used for rating and they will be linked with each other using unique identifier)

Config 
Database Connections my SQL 
with Heroku etc 
API Routes 
Home 
Search 
Search dropdown for API explorer 
Search dropdown for API ratings 
Add API 
Rate API 

Server.js
Initialize the App and database 
Close database connection 


Travis CLI
Travis set-up tutorial : https://docs.travis-ci.com/user/tutorial/
Core concepts: https://docs.travis-ci.com/user/for-beginners/

Categories - search
Language
Open source
For fun
Etc.


User Stories: 

As a developer, I want to be able to access and search APIs in one location without having to visit multiple sites.

As a developer, I want to be able to see how others rate and review the usefulness and documentation of an API before utilizing it.

As a developer, I want to be able to share APIs that I have successfully worked with and/or created so that others can benefit from them, as well.




 