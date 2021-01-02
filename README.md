# QCObjects Neumorphism

QCObjects Neumorphism App template

[![Deploy on Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/QuickCorp/qcobjects-neumorphism)

## Usage

#### Quick Start

The qcobjects-neumorphism template is a quick start point to build a QCObjects application using Neumorphism design pattern.

```shell
    qcobjects create --custom=qcobjects-neumorphism mynewapp
```


#### Set dependencies

In your package.json file add the following dependencies

```json
  "devDependencies": {
    "eslint": "^6.8.0",
    "jasmine": "^3.5.0",
    "qcobjects": "latest"
  }
```

Also add this scripts in package.json

```json

  "scripts": {
    "sync": "git add . && git commit -am ",
    "test": "(npx eslint *.js js/*.js js/packages/*.js --fix) && jasmine",
    "preversion": "npm cache verify && npm test",
    "postversion": "git push && git push --tags",
    "start": "node app.js"
  },
```

Then install everything

```shell
npm i && npm test
```

#### Launch the application

```shell
> qcobjects launch app
```

Read more:

[QCObjects](https://qcobjects.com)
[Neumorphism in User Interfaces](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6)
