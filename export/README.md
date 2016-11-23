## Exporting React modules as HTML/CSS/JS

In order to export React module, just follow these simple steps.

##### 1. Usage example of your module

Create a file ```/src/js/components/LanguagesSection/usage.jsx```. You can find example of it below.

```js
import React from 'react';
import {LanguagesSection} from './LanguagesSection';

var module = (
  <LanguagesSection languages={languagesFixture()}/>
);

function languagesFixture() {
  return ['Javascript', 'Typescript', 'Elm'];
}

export {module};
```

##### 2. Specify target module

You need to slightly modify ```/export/targetModule.jsx``` and provide path to your newly created ```usage.jsx``` file inside your module. As a result, it should look like this:

```js
import {module} from '../src/js/components/LanguagesSection/usage';

export {module};
```

##### 3. Now run the export command in your terminal.

```sh
$ npm run export
```

##### 4. Explore exported files

After export command finishes running, there will be new folder created inside ```/export/``` called ```build```.
Usually the process takes around 1-2 minutes.

Inside ```build``` directory you will have exported HTML, CSS, and JS files of your module.

- build
    - ```module.html``` - exported HTML
    - ```css```
        - ```app.css``` - exported CSS
    - ```js```
        - ```app.js``` - exported JS
    - ```app.html``` - example HTML page that includes ```css/app.css``` and ```js/app.js```. You can open it in your browser and see how your module looks after export.
