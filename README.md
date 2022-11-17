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
+ Add the People page.
+ Add the Person Details Page.
+ Add Top Billed Cast Card on Movie Detail Page.
+ Full Caching support.
+ Full pagination support.
+ Several extensive data hyperlinkings for individual persons(Acting Movies) and for individual movies(Top Billed Cast)
+ Several parameterized URLs for individual person page(like individual movie page) and for every list pages(home, upcoming and people/person)
+ New lanuage filter.
+ 
+ Other further features are mentioned in the [Independent learning](#independent-learning-if-relevant) part.


## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

+ Discover list of popular people (getPersonPopular) - person
+ Get specific person's basic info (getPerson) - person/:id
+ Get specific person's images (getPersonImages) - person/:id
+ Get specific person's Combined Credit (getPersonCombinedCredit) - person/:id
+ Get specific movie's Cast Credit (getMovieCredits) - movies/:id
+ The api for List Pages now all have a parameter 'page' for Pagination (parameterized endpoint)

## Routing.

+ /person - displays all popular people.
+ /person/:id - displays specific person's info.


[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

### Auto-Deploy to AWS Amplify 
Just follow the instructions from https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/

### Use the ImageListItemBar, Paper, useMediaQuery, useTheme, etc Componments from mui
https://mui.com/zh/material-ui/api/image-list-item-bar/
https://mui.com/zh/material-ui/react-paper/
https://mui.com/system/styles/advanced/

### Pagination
https://mui.com/zh/material-ui/react-pagination/

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).