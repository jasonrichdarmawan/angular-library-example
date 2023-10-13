# How to install

```
$ npx ng build models
$ npx ng build auth
$ npx ng build login-lib
$ npx ng build user-list-ng-select-lib
```

# How to use

```
$ npx ng serve
```

# How to develop a service

Let say you want to only develop the Auth service

```
$ npx ng build auth --watch
$ npx ng serve
```

**Important**:
Always run the `npx ng build auth --watch` command before `npx ng serve`. Otherwise, the compiler will return an error when the authentication library is rebuilt.

```
Cannot find module '@@auth' or its corresponding type declarations.
```

# How to develop a feature

Let say you want to only develop the Login feature

```
$ npx ng build login-lib --watch
$ npx ng serve
```

**Important**:
Always run the `npx ng build login-lib --watch` and not `npx ng build login --watch`. The latter is for `ng serve login`, which is a standalone application.

# Documentation

1. https://dev.to/michaeljota/how-to-split-an-angular-app-into-micro-frontend-apps-1fi9

# Non Priority To Do

`dependencies` instead of `peerDependencies` in `package.json` of a library

in `package.json`
```
{
    "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
    "dest": "../../dist/user-list-ng-select-lib",
    "lib": {
      "entryFile": "src/public-api.ts"
    },
    "allowedNonPeerDependencies": [
      "@ng-select/ng-select"
    ]
  }
```

in `ng-package.json`
```
    "allowedNonPeerDependencies": [
      "@ng-select/ng-select"
    ]
```

`styles.scss` of a library instead of the `styles.scss` of the `my-first-app` application.

in `styles.scss` of a library.
```
@import "~@ng-select/ng-select/themes/material.theme.css";
```

# AppMicro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
