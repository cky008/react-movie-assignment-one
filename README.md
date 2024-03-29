# Assignment 1 - ReactJS app.

Name: Kaiyu Chen

## Overview.

This is a web application based on TMDB API, React, MUI, Firebase and AWS Amplify. It is designed to provide information on movies, TV series and actors through a simple web page. It also supports authentication. This is assignment one for the module Web App Development 2.

### Video Demo  
[Youtube](https://youtu.be/qZVX9r8Ygm0) , [OneDrive](https://1574666-my.sharepoint.com/:v:/g/personal/fa2nica_1574666_onmicrosoft_com/EfYuBTdPG-RJiZWB4ckh8U8BgnrzhY1ILhYbQCUcryANiA?e=x67IXa) or [bilibili](https://www.bilibili.com/video/BV1A3411f7BN/)

### Online Demo
via [aws amplify](https://main.d1ik5o6ucwnt3f.amplifyapp.com/page1) or [fa2nica.tk](fa2nica.tk)
this two links is no longer supported, to visit online demo please visit online demo via [Github](https://cky008.github.io/agile-movie-assignment-one/)

### Features.

+ Change the style of the site header:  
  (Home Favourites Upcoming Option4)  
  to  
  (Home Movies[Favourites Upcoming] People)  
  [] is a drop-down menu.  
+ Add the Top Rated Movies Page.
+ Add the People page.  
+ Add the Person Details Page.  
+ Add Top Billed Cast Card on Movie Detail Page.  
+ Some new [endpoints](#api-endpoints).
+ Full Caching support.  
+ Full pagination support.  
+ Several extensive data hyperlinkings for individual persons(Acting Movies) and for individual movies(Top Billed Cast).  
+ Several parameterized URLs for individual person page(like individual movie page) and for every list pages(home, upcoming and people/person).  
+ New language filter.  
+ Add Firebase Authentication for Log in/Sign Up/Reset and each header.  
+ Auto-Deploy to [AWS Amplify](https://main.d1ik5o6ucwnt3f.amplifyapp.com/page1).  
+ Other further learning parts are mentioned in the [Independent learning](#independent-learning-if-relevant) part.  


## Setup requirements.  

### TMDB API  

In order to run cypress tests you must first create a `.env` file in the project base folder.  
The contents should include the following.  
```
REACT_APP_TMDB_KEY=<YOUR_TMDB_API_KEY>
FAST_REFRESH=false
```
### Build  

In order to install needed package,you need run `npm install` first.
After all done, you can use
`npm start`
to start the server, then you can access the web page by
```
http://localhost:3000/
```

## API endpoints.

Old 
+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Get the user reviews for a movie - /movie/:id/reviews
+ Get the images belong to a movie - /movie/:id/images
+ Movie genres - /genre/movie/list
+ Get a list of upcoming movies - /movie/upcoming

New 
+ Discover list of top rated movies (getTopRatedMovies) - movies/toprated 
+ Discover list of popular people (getPersonPopular) - person 
+ Get specific person's basic info (getPerson) - person/:id 
+ Get specific person's images (getPersonImages) - person/:id 
+ Get specific person's Combined Credit (getPersonCombinedCredit) - person/:id 
+ Get specific movie's Cast Credit (getMovieCredits) - movies/:id 
+ The api for List Pages now all have a parameter 'page' for Pagination   

## Routing.  

Old 
+ / - displays discover movies page.
+ /movies/favourite - displays user's favourite movies.
+ /movies/upcoming - displays upcoming movies.
+ /movies/:id - displays a particular movie's detail.
+ /reviews/form - User can write reviews for their favorite movies.
+ /reviews/:id - displays reviews about a movie.

New 
+ /movies/toprated - displays all movies in rating ranks.
+ /person - displays all popular people.
+ /person/:id - displays specific person's info.
+ /register - for user sign up.
+ /login - for user log in/sign in.
+ /reset - for user reset their password.


## Independent learning (If relevant).

### Auto-Deploy to AWS Amplify 
https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/ . 

### Use the ImageListItemBar, Paper, useMediaQuery, Theme, CssBaseline, Icon and etc. Componments from mui 
https://mui.com/zh/material-ui/api/image-list-item-bar/  
https://mui.com/zh/material-ui/react-paper/  
https://mui.com/system/styles/advanced/  
https://mui.com/material-ui/react-css-baseline/  
https://mui.com/material-ui/material-icons/  
etc, ...

### Pagination 
https://mui.com/zh/material-ui/react-pagination/  

### Firebase Authentication
https://firebase.google.com/docs/auth/where-to-start?authuser=0
