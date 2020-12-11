# React Book App

A React.js application that displays data about books (Title, picture, author, price and description) which is stored in a separate sql database, displays them on the 
application using a separate rest api server. React was used to take advantage of react router to make the application a single page application.

Uses the Books.js file in the pages folder to display the books from the folder. When a category is selected in the nav bar, it uses a function to display the url as the category that was selected in the navbar and the category that was displayed in the url is then used to search for the category for that category.

*****app folder******
  contains the application itself 
  

****server folder*****
  contains the rest api, which acts as a server for the data stored in the database.
