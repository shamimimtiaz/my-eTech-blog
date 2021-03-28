# my-eTech-blog

# DESCRIPTION
This project built with mysql database and CMS-style Blog built using Model View Controller (MVC) paradigm
to create a blog-style website where users can create an account, edit their information, make posts, edit posts, and 
comment on other user's posts.

#INSTALLATION
Add a .env file to the root of the app with the following details
``` 
DB_NAME='my_etech_blog' 
DB_USER='root' 
DB_PW='password'
```

#USAGE

This site presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in during Users visit the site for the first time.
Users visit the homepage by clicking homepage option, 
Users have options to go to other link either sign up (new user) or sign in (existing user). 
Once Users sign in has option to go for homepage, the dashboard, and the option to log out
Users can see posts that include the post title and the date created at homepage option.
By clicking existing blog post users can see post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
Users can enter a comment and click on the submit button while signed in then the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.
By clicking dashboard option in the navigation users can go to the dashboard and presented with any blog posts previously created and the option to add a new blog post
By clicking on the button to add a new blog postuser can enter both a title and contents for their blog post.
By clicking on the button to create a new blog post then the title and contents of users post are saved and users will taken back to an updated dashboard with my new blog post
By clicking one of the existing posts in the dashboard users can delete or update their post and taken back to an updated dashboard
Users has logout option.
Users can idle on the page for a set time then autometically signed out of the site.

#HEROKU DEPLOY LINK

https://my-etech-blog.herokuapp.com/

#GITHUB REPO

https://github.com/shamimimtiaz/my-eTech-blog.git

#TECHNOLOGY USED 
JavaScript
Node.js
Express.js
dotenv 
MySQL
Sequelize (npm package for integrating MySQL and Node.js)
bcrypt (npm package for password hashing)
handlebars (npm package for a template engine used for html and javascript integration on the front-end)
Heroku (hosting platform)
JawsDB (a Heroku add-on for hosting the MySQL database)

#APPLICATION SCREENSHOT

<img width="670" alt="screenshot" src="https://user-images.githubusercontent.com/75001492/111075643-584d1a00-84bf-11eb-8113-72d56a9ff143.PNG">


#QUESTION AND CONTACT 

If you have any questions, please e-mail me at km_si@ymail.com.



Copyright Shamim Imtiaz. All Rights Reserved.







