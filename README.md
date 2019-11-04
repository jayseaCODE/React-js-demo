# My spin-out demo from learning React.js

Follow the steps below to create your own React.js learning project

## Getting Started

A few years ago, getting your build environment set up would have been a huge pain because it involved manually configuring all the tools we’ve talked about.

Fortunately, the Create React project (https://github.com/facebookincubator/create-react-app) came about and greatly simplified the process of setting up your React environment. 
You just run a few commands on your command line, and your React project is automatically created with all the proper behind-the-scenes configurations.

### Prerequisites

To get started, first make sure you have the latest version of Node installed (https://nodejs.org/). 
Then bring up your favorite command line.
```
If you aren’t too familiar with command lines, don’t worry. 
On Windows, launch either the command prompt or the BASH shell. On Mac, launch the Terminal.
```

### Installing

To start, install the Create-React project by running the following commands:
```
npm install -g create-react-app
```

Navigate to the folder where you want to create your new project—this can be your desktop, a location under Documents, and so on. 
When you’ve navigated to a folder in your command line, enter the following to create a new project at this location:
```
create-react-app helloworld
```
After the command has fully executed, you’ll have a project called helloworld created for you.

Navigate into the newly created project’s helloworld folder by typing the following:
```
cd helloworld
```
If you have yarn installed, Create will prefer it over npm for the install and you’ll see onscreen instructions saying to use yarn start instead of npm start.

Your project will get built, a local web server will get started. 
Then open http://localhost:3000 from your favourite browser.

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

### Creating a production build
So far, we’ve been building this app in development mode. In this mode, our code isn’t minified and some of the things run in a slow/verbose setting so that we can debug issues more easily. When it’s time to send the app live to our real users, we want the fastest and most compact solution possible. For that, we can go back to the command line and enter the following (after stopping the build by pressing Ctrl+C):

```
npm run build
```

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.

## Built With

* [Create React App](https://github.com/facebook/create-react-app) - The tool used to setup this React app

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Joshua Chen** - *Initial work* - [jayseaCODE](https://github.com/jayseaCODE)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

