# Static Content challenge Tech Test

#### Tech-test task
```
The challenge here is to create a node.js application that displays HTML pages at URLs that match the names of the folders in the `content` folder. The content of these pages should come from a combination of the template HTML file and a markdown file containing the content.

For example, for a folder called `about-page`, a request to `/about-page` would return a HTML page created from the `template.html` template and the `about-page/index.md` content file. The `template.html` file contains a `{{content}}` placeholder that would be replaced by the content for each page.

This repository contains a `template.html` template file and a `content` folder with sub-folders containing `index.md` markdown files.

The application should be shipped with three tests:

* one that verifies that requests to valid URLs return a 200 HTTP status code
* one that verifies that requests to valid URLS return a body that contains the HTML generated from the relevant `index.md` markdown file
* one that verifies that requests to URLs that do not match content folders return a 404 HTTP status code

Your application may make use of open-source code libraries. It is entirely up to you how the application performs the challenge.
```
<kbd>![](https://image.ibb.co/hAOQOb/Screen_Shot_2018_01_28_at_12_16_15.png)</kbd>

## How to use
1) Clone the project
```
git clone git@github.com:Vanals/Static-Content-Challenge.git
```
2) Changes into the project directory on ur computer via Terminal
```
cd Static-Content-Challenge
```
3) Install the dependencies
```
Now in your terminal, from the main folder, run 'npm install'
```
4) Run the server
```
In your terminal run 'node index.js'
```
5) Visit the web page
```
In your browser go to
http://localhost:5000/
```

## Approach
* Read carefully the task
* Write a plan about the requirements and a to do-list
![](https://preview.ibb.co/fojh3b/to_do.jpg)
![](https://preview.ibb.co/fgYLpG/PLand_tdd.jpg)

* Step by step develop the app following TDD and committing often.

## Technologies

| Dependencies  |
| ------------- |
| Server: Express|
| Testing: Mocha, @types/mocha and Supertest |
| To Convert md content in html: Gulp + Gulp-markdown|
