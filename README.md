# Would You Rather Project
-----

### Introduction

Would You Rather is a game-themed React/Redux web app that serves as the final assessment project for Udacity's React & Redux course. The design itself was inspired by a previous project design for the same course that was shown as an example however, much of the design and Javascript functionaly was created based on my vision for the app.

### Functionality

* Users can log-in or sign-up to access the site and play the game. 
* View, answer, or create questions as that user. 
* View overall rankings in the leaderboards section.

### Tech Stack

The tech stack will include:

* **ReactJS** 
* **Redux** 
* **Redux-Thunk** 
* **HTML5**, **CSS**, and **Javascript** 

### Main Files: Project Structure

  ```sh
  ├── README.md
  ├── src
    ├── actions 
        ├── authedUser.js
        ├── questions.js
        ├── shared.js
        ├── users.js
    ├── components
        ├── App.js
        ├── Dashboard.js
        ├── Footer.js
        ├── Leaderboards.js
        ├── Login.js
        ├── Nav.js
        ├── NewQuestion.js
        ├── Signup.js
        ├── Title.js
        ├── TitleAnimate.js
     ├── images
         ├── multiple images (PNG format)
     ├── middleware
        ├── index.js
        ├── logger.js
    ├── reducers
        ├── authedUser.js
        ├── index.js
        ├── questions.js
        ├── users.js
    ├── styles
        ├── App.css
        ├── index.css
        ├── font styles (TIFF format)
    ├── utils
        ├── _DATA.js
        ├── Constants.js
        ├── HelperFunctions.js
    ├── App.test.js
    ├── index.js
```

The `_DATA.js` file represents a fake database and methods that let you access the data. Alternatly there is a firebase connection as well to access data (depreciated).

## Data

There are two types of objects stored in the database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
