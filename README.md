# Web - Angular Test Assignment (Isidro Moreno)

[![Netlify Status](https://api.netlify.com/api/v1/badges/11df3328-7411-4a89-8686-5d32236b7140/deploy-status)](https://app.netlify.com/sites/wondrous-kitsune-c7984a/deploys) ![Build checks](https://github.com/imorenoservices/isidro-moreno-web/actions/workflows/node.js.yml/badge.svg)

### Test Assignment:

> https://www.notion.so/Web-Angular-ReactJS-Test-Assignment-308d84eaa51c4f22b1f65d60efcd7186

# Features summary;

**First functional feature for searching GitHub users and displaying paginated search results.**

Features released:

- Search input component that triggers API query given a username string input.
- Results component:
  - Display paginated results in a table if input `string` matches a username (Search API `login` field). More info at https://docs.github.com/en/search-github/searching-on-github/searching-users#search-by-account-name-full-name-or-public-email
  - Provide page navigation through custom pagination component (navigation information is retrieved from API response headers - see more in [README](https://github.com/imorenoservices/isidro-moreno-web/blob/v1.0.0-alpha/README.md))

# Project Information

## Tech Approach Overview

The following items describe the main tech guidelines I took in order to share skills and get feedback. I've performed tasks I'm used to performing on a daily basis. For that purpose I followed some steps that emulate real world tasks like:

- setting up an Angular project from scratch
- research and analyze about tools that help accelerate development (ng-zorro / http link header parser lib for GitHub API pagination metadata)
- develop custom components that adjust to API features/restrictions
  - **Besides the fact ng-zorro provides several options for navigation through pages. I took advantage of GitHub's Pagination features and restrictions in order to develop a custom navigation component that fits page navigation metadata provided in GitHub's API response headers. (GitHub docs encourages to use those headers for navigation instead of building a URL on client side)**
- make commits following a unified and simple syntax (check repo history)
- use pull requests and provide relevant information (kept them short for the purpose of the test)
  - Example: check for closed PRs or go to the bottom of this page where I put a screenshot. Thanks!

## High Level Project tasks

### Project Scaffolding from scratch

- Start from a brand new angular project from scratch
- Add Code Quality Tools like Prettier, ESLint and integration of pre-commit hook (lint-staged)
- Use ng-zorro as a main UI components library

### Version Control and CI

#### GitHub:

- Follow "rebase/linear history" workflow though PRs to dev (check closed PRs)
- Enable GitHub Actions for build checks (Code coverage, Unit Tests, Code formatting checks, other Node CI GitHub Actions)
- ![image](https://user-images.githubusercontent.com/30235159/192309668-3ba5883e-55a9-4a22-8ff8-3d7a7ee4483d.png)

#### GitHub Actions CI details:

- ![image](https://user-images.githubusercontent.com/30235159/192310894-9f14698a-2b53-4cba-a62e-74e174660964.png)

#### Netlify:

- Integrate Netlify with repository
- Automatic "Netlify Deploy Previews" for each PR
- Netlify Deployment details integration to PRs as comments
- ![image](https://user-images.githubusercontent.com/30235159/192309537-c34576b8-1f37-48f3-a57e-0f046226ca01.png)

# Development Environment

This project was generated with: [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

### System Requirements

- Node: 16.14.2
- Package Manager: npm 8.5.0

### Tech Stack & Versions

- Angular: 13.3.11
- ng-zorro: 13.4
- Angular CLI: 13.3.9
- rxjs 7.5.6
- typescript 4.6.4

### Code Quality & QA tools

- ESLint
- Prettier
- Jasmine
- lint-staged

### Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/isidro-moreno-web` directory.

### Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/docs/28.x/getting-started).

### Coverage reports in HTML format

Every time tests are run a text report is printed in the console and an [Istanbul](https://istanbul.js.org/) HTML report is stored under:

> `./coverage/lcov-report/isidro-moreno-web/index.html`

# Attachments / Other notes

## Pull Request Example:

![image](https://user-images.githubusercontent.com/30235159/191181699-47870fb1-588b-428b-92aa-811a06deecd4.png)
