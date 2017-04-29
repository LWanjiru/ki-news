# KI-All News

Know It All News: Be in the know of what's happening around the world!
---
### Getting Started
---
These instructions are intended to help you start building a similar project from scratch.

We will be setting up and building a test-driven front-end application that takes advantage of the functionalities NewsAPI provides. The application should be similar to a modern RSS feed that allows you to view all headlines from different news sources and link to the original articles/news on those sources.

Start by creating a local directory for your project, by running `$ mkdir my-project && cd my-project` in the command line.
Then run `$ npm init` to create a `package.json` file (This is the file that helps you manage locally installed npm packages for your project.)

Now we can start installing the requirements for our project.

### Requirements
---
#### ESLint

##### Installing
1. Run:
` $ npm install --save-dev eslint` or use `$ npm install -g eslint` to install the package globally.

2. Running the `$ eslint --init` command allows to configure eslint for your project, through a guided prompt.

For this project, we will use it to configure *Use a popular style guide*, *Airbnb*, *React* and our config file will be in the *JSON* format. 

After following this guide, a `.eslintrc.json` file will be created in our root folder, containing the following configurations;
```javascript
{
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
}
```