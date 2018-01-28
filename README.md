# Static Content challenge Tech Test

## Brief given by the Client:

The challenge here is to create a node.js application that displays HTML pages at URLs that match the names of the folders in the `content` folder. The content of these pages should come from a combination of the template HTML file and a markdown file containing the content.

For example, for a folder called `about-page`, a request to `/about-page` would return a HTML page created from the `template.html` template and the `about-page/index.md` content file. The `template.html` file contains a `{{content}}` placeholder that would be replaced by the content for each page.

This repository contains a `template.html` template file and a `content` folder with sub-folders containing `index.md` markdown files.

The application should be shipped with three tests:

* one that verifies that requests to valid URLs return a 200 HTTP status code
* one that verifies that requests to valid URLS return a body that contains the HTML generated from the relevant `index.md` markdown file
* one that verifies that requests to URLs that do not match content folders return a 404 HTTP status code

Your application may make use of open-source code libraries. It is entirely up to you how the application performs the challenge.

## My Outcome:

<kbd>![](https://image.ibb.co/hAOQOb/Screen_Shot_2018_01_28_at_12_16_15.png)</kbd>

The first thing I did was to read the task carefully to highlight what was required. From my understanding, I had to create three routes in the node.js application with each route having it's own folder. I came to this conclusion by drafting out a plan for the requirements and setting up a to do list of what had to be done.

![](https://preview.ibb.co/fojh3b/to_do.jpg)
![](https://preview.ibb.co/fgYLpG/PLand_tdd.jpg)

From then onwards, I took steps to develop the app by following the TDD approach and doing often commits.


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

## Technologies Used 

| Dependencies  |
| ------------- |
| Server: Express|
| Testing: Mocha, @types/mocha and Supertest |
| To convert md content to html: Gulp + Gulp-markdown|
