# News Summary Challenge 
To approach this challenge, I tried to follow React methodology. I started by identifying the different components based on the mockups provided and then drew a component tree, to be  able to identify where state would live once I got to that step. Both the mockup and the tree can be seen below (please excuse my very poor handwriting).  

I then built a static version of a header and a footer by simply importing these from bootstrap and got on to create the components that are actually required for the challenge. Based on my tree, I identified I would need 3 components: an AllHeadlines component that would display every headline with it's picture, a NewsCard to arrange each of the headlines with its picture (as a child of AllHeadlines) and a SingleArticle component that would display a headline with it's picture and article body. 
At this stage, I was focusing on the first two component to be able to meet at least the acceptance criteria, and was importing the mock data to the AllHeadlines component to pass as props to it's child component. I later realised it should be App who handles the data as SingleArticle would need it too.  
I struggled with importing the data and asked Lucas for help. 

For this static version, once I passed the responsibility of fetching the data to App, this imported it from the json file and passed it to AllHeadlines and SingleArticle as props. AllHeadlines then maps through the data array and passes to it's child as props the object id as key, thumbnail as image and headline as headline. For NewsCard I took a card structure from bootstrap. Here it deconstructs the props it receives and places them in the right tags to display an item similar to the mockup one.
SingleArticle receives the array as props, maps through it to grab the id as key, bodyText as the article body and headline and image like the headlines component did. I also used a card structure for this component. 
Once AllHeadlines and SingleArticle are rendered from App, this static version is showing on the same screen every news card and every article on the mock data. 
I added the routes tags at this stage, but didn't set them up until later on. 

My next step was to transition to a json server, set news data to be state and pass this down the tree as props. I set my json server to point to the mock data provided, deleted the file import and added state to the App with useState (imported from react). I struggled with setting the async function to fetch the data and used plenty of time rewatching the lessons and researching. Once this worked, news is state that is passed down the tree as props.

I then worked on getting the routes set up and working. I set the headlines in NewsCard to be a link that points to the related article. For this I used `<NavLink>` from react-router-dom. I then set both the main path and the odd one to point to the AllHeadlines element, which was fairly easy to achieve. I then wanted to get the SingleArticle component to display only one article, dependant on which headline had been clicked on AllHeadlines, and I really struggled. I went through the routes lesson a couple of times, revised my notes, did some research and I just couldn't get it to work. Aroosa sent me a tutorial that helped me solve the issues I was having. In SingleArticle I'm using useParams to define routes dependant on an elements parameter. The component filters through the array to find the object with the right id and then maps through it to build the element that will be rendered. 
This part took me hours to achieve. I was trying to use the object's id as id, since it is a unique value in each object, but it wouldn't work (I still don't understand why). In the end I decided to use headline instead. 

At this stage, the app's main screen shows what would be the first mockup and, by clicking on any headline, we it renders the article's page. 

To make the headline in SingleArticle point to the original article, I used the object's webUrl as the href on a HTML a tag. It is my understanding we use `<a>` instead of `<NavLink>` because we are not routing in the app but rather sending the user to an external website.

My next step was to add a little CSS to the project so it would have so device responsiveness. I mainly used bootstrap again. 

Lastly, I switched to using an API to fetch data rather than a json server. I created a key and changed fetch to point to the API address. I then had to make a couple of changes to the setNews() call so it would point to the right part of the response object. 


## Testing

I wrote a test for AllHeadlines where I was testing if it was rendering the right amount of NewsCard components. I did this by using the alt text of the images, which is an empty string, and comparing the length to that of the data array. It passed when importing the json file, but didn't manage to  make it work with the json server. 
At this point I realised I didn't have enough time to revise testing and submit a working app, given I was already struggling with some basic react. 

I would have liked to write snapshot test for the header and footer, as these won't change. 
For AllHeadlines would have used jest to mock it's child component and test it renders the right amount of cards with a similar logic I originally used. 
For SingleArticle and NewsCard I would have written similar tests to check they render the expected data from the articles. 

## Components
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

# News Summary Challenge

### Task

You'll test-drive a single page application in React that send requests to the Guardian API to get Headline and Article data and to the Aylien API to summarise text. 

### Serving your app

You'll use React's toolchain to take care of serving your HTML, CSS and JavaScript files.  

## User Stories

Some of these stories will need decomposing if they seem too large.

### Standard
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

### Extended

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

## Mockups

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

## API

### API request rate limits and stubbing

The Guardian and Aylien text summarisation APIs are severely rate-limited.

**Please stub your tests so you don't exceed the daily limit.  Otherwise, all requests will be rejected and your app will stop working!**

### Guardian API example

**Please stub your tests to avoid exceeding the API rate limit**

If you wanted to get the content of an article from the Guardian API, this is the cURL request you might make.  Notice how it has a query parameter for `api-key`.

```sh
# Search endpoint
curl "https://content.guardianapis.com/search?q=coronavirus&show-fields=body&api-key=API_KEY"
```
```sh
# Single Item endpoint
curl "https://content.guardianapis.com/world/2021/mar/22/link-between-diabetes-and-coronavirus-infections?show-fields=body&api-key=API_KEY"
```

#### Example request data

[Mock Data](./mockNewsData.json) - contains a request to the Guardian API with fields selected that will help you with the challenge.  The actual request made was to:

https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=INSERT_YOUR_KEY_HERE

You will need to replace `INSERT_YOUR_KEY_HERE` with your own Guardian API key.  Use this data whilst developing, serving it from `json-server` - it will help on the request rate limit in the API.

### Aylien text summarisation API example

**Please stub your tests to avoid exceeding the API rate limit**

If you wanted to use the Aylien API to summarise an article by Bret Victor, this is the cURL request you might make.  Notice how it has headers to authenticate with the Aylien API.

```
curl "https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html" \
  -H "X-AYLIEN-TextAPI-Application-ID: APPLICATION_ID" \
  -H "X-AYLIEN-TextAPI-Application-Key: SECRET_APPLICATION_KEY"
```

## Resources

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
