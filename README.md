# Assignment 1 - ReactJS app.

Name: Kaiyu Chen

## Overview.

[A brief statement on the content of this repository.]

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
+ Full Caching support.  
+ Full pagination support.  
+ Several extensive data hyperlinkings for individual persons(Acting Movies) and for individual movies(Top Billed Cast).  
+ Several parameterized URLs for individual person page(like individual movie page) and for every list pages(home, upcoming and people/person).  
+ New language filter.  
+ Add Firbase Authentication for Log in/Sign Up/Reset and each header.  
+ Auto-Deploy to [AWS Amplify](https://main.d1ik5o6ucwnt3f.amplifyapp.com/page1).  
+ Other further learning parts are mentioned in the [Independent learning](#independent-learning-if-relevant) part.  


## Setup requirements.  

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.].   

## API endpoints.

+ Discover list of top rated movies (getTopRatedMovies) - movies/toprated 
+ Discover list of popular people (getPersonPopular) - person 
+ Get specific person's basic info (getPerson) - person/:id 
+ Get specific person's images (getPersonImages) - person/:id 
+ Get specific person's Combined Credit (getPersonCombinedCredit) - person/:id 
+ Get specific movie's Cast Credit (getMovieCredits) - movies/:id 
+ The api for List Pages now all have a parameter 'page' for Pagination   

## Routing.

+ /movies/toprated - displays all movies in rating ranks.
+ /person - displays all popular people.
+ /person/:id - displays specific person's info.
+ /register - for user sign up.
+ /login - for user log in/sign in.
+ /reset - for user reset their password.



[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

### Auto-Deploy to AWS Amplify 
https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/ . 

### Use the ImageListItemBar, Paper, useMediaQuery, Theme, CssBaseline, Icon etc Componments from mui 
https://mui.com/zh/material-ui/api/image-list-item-bar/  
https://mui.com/zh/material-ui/react-paper/  
https://mui.com/system/styles/advanced/  
https://mui.com/material-ui/react-css-baseline/  
https://mui.com/material-ui/material-icons/  

### Pagination 
https://mui.com/zh/material-ui/react-pagination/  

### Firbase Authentication
https://firebase.google.com/docs/auth/where-to-start?authuser=0

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).

