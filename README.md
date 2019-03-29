# Bright Futures Academy Parent Portal
This is a web app built to manage payroll at [Bright Futures Academy](
http://brightfuturesatl.org/the-program/academy/) in Atlanta.
It provides information for prospective students, and enrolled families
can sign in to manage their students' tuition and other payments. 

## Getting Started
### Prerequisites
You'll need [npm](https://nodejs.org/en/) to run this project.

### Installing
First, install the packages for both the client and server.
```
npm run postinstall
```

## Running the app
You can start a development server at `localhost:5000` like this:
```
npm run server
```
Or just the frontend at `localhost:3000` like this:
```
npm run client
```
Or you can run the full app like this. The server and client can be found at 
`localhost:5000` and `localhost:3000` respectively.
```
npm run dev
```

## Contributing
All issues are kept under the `Projects` tab. If you find anything you'd like to
add or see fixed, add it there. 

To make a pull request:

1. Make a branch off of master by doing `git checkout -b <branch name>`
2. Make your changes and then do `git add .`, `git commit -m "I made xyz changes"`, `git push --set-upstream origin <branch name>`
3. Go back to github and you'll see an option to open up a PR.

Pull requests should be reviewed by at least one active contributor. 
Please include screenshots with any frontend changes.

If you want to test changes that could break prod, we will use a "staging" site that mimics production but won't affect our live site. It is ok if this site is down or breaks as it is used for testing.

1. Log in to Heroku: https://dashboard.heroku.com/
2. Go to bright-futures-academy-staging
3. Go to `deploy`
4. Scroll to the bottom, you should see "Deploy a GitHub branch"
5. Select the branch you'd like to deploy
6. If you want to see logs you can run `heroku login` and put in the credentials and then `heroku logs --tail --app bright-futures-academy-staging` or see the logs in the console
7. If everything goes well you can see your app on https://bright-futures-academy-staging.herokuapp.com/

Don't break prod pls.

## Credits
This project was built by the beautiful members of Bits of Good at Georgia Tech. 