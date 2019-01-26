# MERN Project Boilerplate

This tutorial will take you through how to set up a new repo with the boilerplate necessary for a MERN project and how to get it deployed with Heroku.

## Prerequisites

- Before begining, make sure you've created a new repository on Github and clone it down to your local machine. It is probably a good idea to initialize this repository with the Node `.gitignore`, a `README.md`, and a `LICENSE` (i.e. GPLv3).
- Make sure you have the latest version of [Node.js][node] installed. (Minimum: Node 8.10.0)
- Make sure you have a Heroku Account and have installed the [Heroku CLI][heroku]

## React Boilerplate

We will be using Facebook's [Create React App][cra] to help us set up the frontend of our application.

1.  Navigate to the root of your project repository.

2.  Run `Create React App` to create your frontend boilerplate.
    This will automatically download all the code and dependencies that the React App needs.
    It may take a minute!

        ```sh
        npx create-react-app client
        ```

3.  Now you have a `client` folder with all the code for the boilerplate React App.
    Change directory to the React App you just created:

        ```sh
        cd client
        ```

4.  For compatibility with the backend, you need to make the following change.
    Don't worry too much about what it actually does, we will explain this in the future.
    Open `client/package.json` and add the following line before the dependencies: `"proxy": "http://localhost:3001/",`.
    Your `client/package.json` should look something like this (it may have extra fields at the bottom):

    ```json
    {
      "name": "client",
      "version": "0.1.0",
      "proxy": "http://localhost:3001/",
      "dependencies": {
        "react": "16.4.1",
        "react-dom": "16.4.1",
        "react-scripts": "1.1.4"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test - env=jsdom",
        "eject": "react-scripts eject"
      }
    }
    ```

5.  Now we will actually run the React App so you can see the website.
    Start it with the following command:

    ```sh
    npm start
    ```

    Now open [http://localhost:3000/][localhost] in your web browser to see your (simple) web app!

## Express Boilerplate

We will be using the [Express Generator][ex-gen] to quickly create our server skeleton.

1.  In your terminal navigate back to the root of your project repository:

    ```sh
    cd ..
    ```

2.  Use NPM to install the `express-generator` package _globally_ on your machine.

    **Note:** Global install requires **admin** or **sudo** access.

    **Mac / Linux / UNIX:** Just run the following command:

    ```sh
    sudo npm install express-generator -g
    ```

    **Windows:** You need to run your Command Prompt or PowerShell in administrator mode.
    See [this StackOverflow Post][exp-gen-so] for help, or ask one of the instructors!
    Then run this command:

    ```sh
    npm install express-generator -g
    ```

3.  Use `Express Generator` to create your backend boilerplate.
    This is similar to how we used `Create React App` to make the frontend boilerplate.
    It will automatically download the code needed for the backend:

    ```sh
    express --git --no-view server
    ```

4.  You should now see a `server` folder, which has your backend code.
    Unlike `Create React App`, `Express Generator` only downloaded the code.
    It did not install all the dependencies, so we have to do that manually!
    Navigate into the `server` folder, then install all the dependencies:

      ```sh
      cd server
      npm install
      ```

5.  We will also use `nodemon` and `dotenv-cli` to make our workflow a bit nicer.

    ```sh
    npm install --dev nodemon dotenv-cli
    ```

6.  Open the `server/package.json` where we will add a new script `dev`.
    This script will automatically load our environment variables and run our project with `nodemon` to enable **hot reloading** the server code.
    **Hot reloading** allows you to make changes to the code and view them in the browser without having to re-run the code (unlike Java or Python)!
    Change the `scripts` in `server/package.json` to read as follows:

        ```json
        "scripts": {
          "start": "node ./src/bin/www",
          "dev": "PORT=3001 dotenv nodemon ./src/bin/www --watch src --ignore src/logs",
        },
        ```

7.  Create an empty `.env` file in the server directory (i.e. `server/.env`).
    This is where you will put your environment variables.
    `dotenv-cli` will automatically load environment variables from `server/.env` when you run the `npm run dev` command.

8.  Now we need to dive into the `server/app.js` code and set it up so that Express renders our react application properly.

    On line 15 inside the `app.js` file you should see code that looks like this:

    ```javascript
    app.use(express.static(path.join(__dirname, "public")));
    ```

    We want to remove this code as this is telling Express to serve static resources from the `server/public` directory, which is not what we want since we're using React for our frontend.
    At this point you can also completely remove the `server/public` directory as you won't need it if you rely purely on React for your frontend.

    Now we want to re-add the `express.static(...)` statement in the right place to ensure our app works.
    At the very bottom of your file, right before `module.exports = app;`, add the following code:

    ```javascript
    // Render React page
    app.use(express.static(path.join(__dirname, "../client/build/")));
    app.get("/*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
    ```

    This chunk of code will serve static resources out of the `../client/build` folder.
    If you did not use the name `client` in the Create React App part of this tutorial, you'll have to update the name here, too.
    It's vital that `app.get('/*', ...)` goes as the end of the file before the `module.exports` because this is a wildcard route that will match with any URL that did not match with your API routes.
    If you put this higher up, your API routes will not work.

    Changing the `express.static(...)` directory will cause a problem with the express-generator boilerplate in the `server/routes/index.js` file on line 6:

    ```javascript
    res.render("index", { title: "Express" });
    ```

    To fix this bug, simply change the line to read:

    ```javascript
    res.send("this is an API route");
    ```

## Putting Everything Together

Congrats! You've made it through most of the work so far! Now we just need to do a little more work to set up our repo to be deployed to Heroku.

1. Navigate to the root of your project repository.
2. Create an empty `package.json` file in the root of your directory. If you've followed along correctly you shouldn't have one here yet -- there should be one at `client/package.json` and another at `server/package.json`. The `package.json` in the root of the repository will be used so that Heroku knows how to properly build and run our app in production.
3. Once you've created the `package.json` in the project root, copy and paste the following into it:

   ```json
   {
     "name": "YOUR PROJECT NAME",
     "description": "YOUR PROJECT DESCRIPTION",
     "version": "1.0.0",
     "cacheDirectories": ["client/node_modules", "server/node_modules"],
     "scripts": {
       "start": "cd server/ && npm start",
       "install-client": "npm install --prefix client",
       "install-server": "npm install --prefix server",
       "build-client": "cd client/ && npm build",
       "postinstall": "npm run install-client && npm run install-server && npm run build-client"
     },
     "engines": {
       "npm": "THE VERSION OF NPM YOU ARE RUNNING",
       "node": "THE VERSION OF NODE YOU ARE RUNNING"
     }
   }
   ```

4. Now that you have the `package.json` ready, it's time to deploy to heroku! First we need to make make a commit in our git repo. Make sure you are still in your root directory!

   ```sh
     git add .
     git commit -m "add boilerplate"
   ```

5. Before we can connect our project to Heroku, we must sign into the Heroku CLI. You can do this by using the following command then entering your Heroku credentials.

   ```sh
    heroku login
   ```

6. Now that we've committed our changes, we create a Heroku 'app' and deploy our code.

   ```sh
     heroku create your-project-name
     git push heroku master
   ```

   If you wanted to deploy code to heroku from a non-master branch of your local repo (for example, testbranch), use the following syntax:

   ```sh
     git push heroku testbranch:master
   ```

## Wrap Up

That's it! Now you have created all the boilerplate for your MERN project and have deployed it to Heroku! Another thing you may want to look into is [linking up your Heroku instance to auto deploy from github][heroku-auto-deploy] whenever new code gets merged into your master branch.

The idea here is that all the code in your master branch should be error-free and production ready. You should be doing all your development work in seperate feature branches and merging them into master after they've been tested and are ready to be in production. If you follow this practice and set Heroku to auto deploy from your master branch, you will always have a production demo with your code from master ready to show off and test.

[cra]: https://github.com/facebook/create-react-app
[node]: https://nodejs.org/en/
[localhost]: http://localhost:3000/
[ex-gen]: https://expressjs.com/en/starter/generator.html
[heroku]: https://devcenter.heroku.com/articles/heroku-cli
[heroku-auto-deploy]: https://devcenter.heroku.com/articles/github-integration
[exp-gen-so]: https://superuser.com/questions/968214/open-cmd-as-admin-with-windowsr-shortcut
