# Reaktor Challenge 2021

#### [Assignment](https://www.reaktor.com/junior-dev-assignment-2021/)

### Overview

The deployed app can be found [here!](https://reaktor-challenge-2021.herokuapp.com) 

I used React for the web frontend and node only to fetch the rules.txt file and serve the static content to client. All text processing is done client side. 

__Note!__ The app is deployed through a node.js/express server in a free dyno Heroku and [the server goes to sleep after 30mins of inactivity](https://devcenter.heroku.com/articles/free-dyno-hours#dyno-sleeping) so the first time opening it takes a while. To see that the content loads fast please refresh the page. Backend [here](https://github.com/LauriKajakko/rulefetcher) but there is nothing interesting there.



### Project structure

Layout and View folder's components are either purely [presentational](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) or the logic and state is separated in hooks. Service fetches data, hooks process and store it in memory and utils help with that.

![Stucture](https://github.com/LauriKajakko/reaktor-challenge-2021/blob/main/Structure.svg)


### Development

After cloning the repository to run:

`
$ npm install
`

`
$ npm start
`

to build:

`$ npm run build`

