# Gopher-2.0 Elevator Pitch

**Gopher 2.0** is an updated version of the **Gopher 1.0** project which was collaboratively created in June 2021.
**Gopher 1.0** was a static webpage which was meant to be an event finder to help users find events in their area that they may be
interested in. **Gopher 2.0** is a social media site used to create and share events made by users nationwide. There is a
**Dashboard that showcases featured events created by users** and a navigation bar that leads to other pages whithin the site.
Users will be able to **sign in and sign up for Gopher in a dedicated login page**. Users will be able to **post, edit and delete original
events from a dashboard page** once they've logged into their account. Users will also be able to **search for events by category**. On every
event post, users will be able to **post Comments and Like/mark as "Going" to events**. There will also be an integrated **google maps** in the
website which users can utilize to get directions to posted events. User credentials will be encrypted using **bcrypt** which "hashes" user
information so their personal information is safe & won't be compromised. The new goal for **Gopher** developers is to make it
safer and easier for event-seekers to **Gopher it.**
<br/>

# Gopher-1.0 (https://github.com/BriagasD98/Gopher)
![Screenshot (58)](https://user-images.githubusercontent.com/83102464/128966994-88bfa217-48d8-4180-bece-a558bd0dc086.png)

## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Deployment](#Deployment)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Questions](#Questions)
  <br/>
  
  ## Installation
  1) clone the repository by entering the following command in the command line: <br/> 
  ```
  git clone git@github.com:BriagasD98/Gopher-2.0.git
  ```
  2) Install the necessary dependencies by entering the following commands into the command line: <br/>
  ```
  npm init -y
  ```
  ```
  npm i mysql2 sequelize
  ```
  ```
  npm i express
  ```
  ```
  npm i dotenv
  ```
  ```
  npm i express-handlebars
  ```
  ```
  npm i express-session
  ```
  ```
  npm i connect-session-sequelize
  ```
  **I have hidden my sql credentials. You must input your own personal mysql user and password into a new .env file on your local computer to use the application!**
  
  <br/>
  
  ## Usage
  **For a video walkthrough, please follow this link:** https://youtu.be/1zZabCIAUrg
  <br/>
  In your **MySQL command line**, enter the following commands to setup the database:
  ```
  SOURCE db/schema.sql;
  ```
  ```
  USE gopher2_db;
  ```
  Once all necessary dependencies have been installed, go to the command line and enter the following commands:
  ```
  npm run seed
  ```
  ```
  npm start
  ```
  <br/>
  
  **npm run seed** will seed data into the database and **npm start** will connect to the database to so users
  may perform RESTful CRUD operations. **Insomnia Core is our testing app of choice!**
  
  <br/>
  
  ![Screenshot (59)](https://user-images.githubusercontent.com/83102464/130361461-04becfc4-2233-4c3f-bf90-d99a65542ab5.png)
  <br/>
  
  ![Screenshot (60)](https://user-images.githubusercontent.com/83102464/130361480-0bd1a21d-090a-449b-8679-8670dd4d0e46.png)
  <br/>
  
  ![Screenshot (61)](https://user-images.githubusercontent.com/83102464/130361504-e5cc8444-9d87-4332-bfdd-9972d43cd7e7.png)
  <br/>
  
  ![Screenshot (62)](https://user-images.githubusercontent.com/83102464/130361513-e56aad51-635e-43cb-ae7c-626e4a289f3a.png)


  <br/>
  
  ![Screenshot (63)](https://user-images.githubusercontent.com/83102464/130361521-83e824af-4e35-465e-9989-8ba519f48bc0.png)
  
  <br/>
  
  ![Screenshot (64)](https://user-images.githubusercontent.com/83102464/130361529-a06716a7-5542-4cce-a933-a2bac42dbd47.png)
  
  <br/>

  ## Deployment
  To see a deployed and live **Gopher 2.0**, please follow this link: <br/>
  https://thawing-fortress-75852.herokuapp.com/
  <br/>
  ## Mobile View of Gopher 2.0
  <br/>
  
 ![Project 1 - Gopher](https://user-images.githubusercontent.com/83102464/130361801-365ee253-4fd9-43f7-9191-57fb545d069b.jpg)

  ## License
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
  For License information, visit:
  [MIT](https://opensource.org/licenses/MIT)
  <br/>
  <br/>
  ## Contributing
  Contact me Via Email or Github for more information on how to contribute!
  <br/>
  <br/>
  
  ## Questions  
  If you have questions about the project you can email me, or you can open an issue in the GitHub repository.
  <br/>
  My GitHub profile is [BriagasD98](https://github.com/BriagasD98)  
    
  My Email: [briagasdavid@yahoo.com](mailto:briagasdavid@yahoo.com).
