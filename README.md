# Start project with React, Redux and React Router

## Install

```
$ git clone https://github.com/vicpi/react-redux-start-project.git project-name
$ cd project-name
$ npm install
```

You might have to run `$ npm rebuild node-sass` after install. Sometimes without this you have errors about 'libsass bindings not found' while running `$ npm start`.

## Run in Development environment

During development you should use the command below:
  
  ```
  $ npm start
  ```

It will run locally using hot reloading via webpack dev server. It means page will update automatically when there are changes in your source code. In order to see your project in action, point your browser to http://localhost:3000/.

## Run in Production environment

You can run the app in production using this command:
  
   ```
   $ npm run production
   ```

It will build the app and run the webserver. Production ready files will be served from `build` directory.
App in production environment uses port `80`.
This command may need `sudo` privileges.

## Testing

In order to run tests, simply run the following command:
```
npm test
```

## Test Coverage

You can generate report on test coverage as well. The following command will do the trick:
```
npm run coverage
```
You will see the coverage statistics in command line.
```
=============================== Coverage summary ===============================
Statements   : 100% ( 15/15 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 4/4 )
Lines        : 100% ( 15/15 )
================================================================================
```
Also, coverage report is saved to the `coverage/` directory. Open `coverage/lcov-report/index.html` file in your browser to see the details.
