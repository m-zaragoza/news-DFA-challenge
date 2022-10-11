# News Summary Challenge 
## About this project
First challenge using React.\
The goal is to build a single page application that sends requests to the Guardian API to get Headline and Article data.
I created this project following the Thinking in React methodology.
</br></br>

## Built with
React, Bootstrap and some CSS.
</br></br>

## Getting started
- Clone this project to your machine. 
- Run this command to install all the dependencies:
```
npm install
```
- To view the project on your browser, run this command:
```
npm start
```
</br>

## Problem statement
### User Stories
#### Standard
```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

#### Extended

```
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```

```
As a busy politician
So I can get a few more details about an important story
I can see click a news article summary title which links to the original article
```

```
As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
```

```
As a busy politician
To make my news reading more fun
I can see whizzy animations in the app
```
### Component hierarchy
![Headlines page components](/images/headlines.jpeg)
```
 Blue: AllHeadlines.
 Pink: NewsCard.
 Red: image.
 Green: headline.

 My app will also have a footer and header, not seen on the mock.
 ```
![Article page components](/images/article.jpeg)
```
Blue: Article.
Red: image.
Green: headline.
Orange: body. 

My app will also have a footer and header, not seen on the mock.
```
![Component tree](/images/component-tree.jpeg)
</br></br>

## Review
This felt like a huge step, moving from vanilla JS to React, using an external API. I hit a few walls along the way, but nothing that couldn't be solved with a thorough Google search!\
I think the biggest takeaway from this project is the understanding of data flow, state and how to use it to achieve the desired results.\
\
What I wish I had got to do is testing! At the time, my understanding of React testing wasn't solid, so I was unable to solve this challenge following a TDD approach. If I were to do this challenge again today, that would be my starting point.
