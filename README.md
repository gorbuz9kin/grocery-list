# Start the project

## Step 1: Setup dependencies

Project uses a package manager Npm

- Clone the repo
- Run next commands
  1.  `npm i` - install common dependencies and packages
  2.  `cd ios/`
  3.  `pod-install` - install IOS pods
  4.  `cd ..`

## Step 2: Start the Metro Server

```bash
npm start
```

## Step 3: Start your Application

### For Android

```bash
npm run android
```

### For iOS

```bash
npm run ios
```

### Run local server to mock an API integration

```bash
npm run server-start
```

## Requirements:

### User stories:

- As a user, I can view my grocery list
- As a user, I can add, edit, and delete items to my grocery list
- As a user, I can add an amount to each item in the list
- As a user, I can mark an item as bought. This will cross out the title and mark the checkbox as checked.

### Technical requirements:

- For this task, we want you to use React Native
- Layouts are not strict, but the app should look good. Use Gluestack (https://gluestack.io/) for it. Pay attention how to work with styles in Gluestack.
- Please use JSON-server (https://www.npmjs.com/package/json-server) and React query (https://tanstack.com/query/latest/docs/react/quick-start) to mock an API integration
- Push your code to the git repo and share a link with the finished project

### Not required, but it will be a benefit:

- Multiple build variants for Staging and Production
- Any additional functionality

## Project structure:

- ./src/api/ - core api request class;
- ./src/app/ - main entry point for the application;
- ./src/components/ - UI components, reusable parts;
- ./src/configs/ - configs for colors, fonts, images, constants;
- ./src/containers/ - pages wrapper and main layout container for each page;
- ./src/navigation/ - list of custom routes, navigation config trough the application;
- ./src/store/ - configs for redux stores;
- ./src/utils/ - helper functions for application, reusable functions;
- ./src/types/ - types of the components

## Styles rules:

It is not allowed to use inline styles for containers, all styles must be in separate files.
For components: if styles less then height of your screen it allowed to insert them to the same file.

## Import rules:

1. React, React Native modules
2. Third-party libraries
3. Custom modules (reducers, stores, components, helpers)
4. Constants/configs
5. Types
6. Styles

## GIT Flow:

1. Each feature must be implemented in separate branch.
2. When you create PullRequest target branch is 'dev'.
3. When you implemented a part of the feature you should create a pull request (PR) with comment "in progress" and send a link
   on that PR to another developer.
4. When you completed implementing some feature you should change status/comment of your PR from 'in progress' to 'completed'
   and update another developer about it.

## Naming convention:

1. Features/containers/components/store folders - PascalCase
2. General folders - camelCase
3. Files - camelCase
4. Constants - camelCase
5. Function - camelCase
6. Props - camelCase
   Tutorial: https://github.com/airbnb/javascript/tree/master/react
