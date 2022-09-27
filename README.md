# Web - Angular Test Assignment (Isidro Moreno)

[![Netlify Status](https://api.netlify.com/api/v1/badges/11df3328-7411-4a89-8686-5d32236b7140/deploy-status)](https://app.netlify.com/sites/wondrous-kitsune-c7984a/deploys) ![Build checks](https://github.com/imorenoservices/isidro-moreno-web/actions/workflows/node.js.yml/badge.svg)

## Test Assignment:

> https://www.notion.so/Web-Angular-ReactJS-Test-Assignment-308d84eaa51c4f22b1f65d60efcd7186

## Environments:

### - Production: https://wondrous-kitsune-c7984a.netlify.app

### - Development: https://dev--wondrous-kitsune-c7984a.netlify.app

## Test Coverage Status:

![image](https://user-images.githubusercontent.com/30235159/192441018-0d969c20-0e5e-4c7b-9bb2-863205a66be3.png)

# Development Environment

This project was generated with: [Angular CLI](https://github.com/angular/angular-cli) version 14.

## System Requirements

- Node: v16
- Package Manager: npm v8.5

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/isidro-moreno-web` directory.

### Running unit tests

Run `npm run test` to execute the unit tests via and [generate reports](https://github.com/imorenoservices/isidro-moreno-web#coverage-reports) via [Jest](https://jestjs.io/docs/28.x/getting-started).

## Coverage Reports Generation:

### Plain text / HTML Report Generation:

> Run `npm run test`

### Coverage reports in HTML format

Every time tests are run a **text report** is printed in the console and an **[Istanbul](https://istanbul.js.org/) HTML report** is stored under:

> `<project_root>/coverage/lcov-report/isidro-moreno-web/index.html`

# Features summary;

Features released:

- Search input component that triggers API query given a `login` string input.
- Results component:
  - Display paginated results in a table if input `string` matches a `login` field. More info [here](https://docs.github.com/en/search-github/searching-on-github/searching-users#search-by-account-name-full-name-or-public-email)
  - Provide page navigation through **custom pagination component** (navigation information is retrieved from [API response headers](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#link-header)
- Loading indicators for:
  - New search
  - Page navigation
- Welcome screen with instructions
- Responsive design compatible with mobile devices
- Error screens for server and client side errors (Unhandled JS exceptions, Network outage, others)

# Project Information

## Project conception, analysis and kick-off

The following items describe the main guidelines I took in order to share skills and get feedback. I've performed tasks I'm used to performing on a daily basis. For that purpose I followed some steps like:

- setting up an Angular project from scratch
- research and analyze about tools that help accelerate development:
  - ng-zorro for UI/UX development
  - [http-link-header](https://github.com/jhermsmeier/node-http-link-header) parser lib for GitHub API pagination metadata provided in response headers)
- develop custom components that adjust to API features/restrictions
  - **The solution needs a component that prevents the user from navigating to a specific page (not included among ng-zorro components) and at the same time yet simple to cover usual navigation requirements:** besides the fact ng-zorro provides several components for navigating through pages, [GitHub's Pagination documentation](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#link-header) suggests to use navigation links provided in response headers for building a URL on client side in order to get pagination data instead of building URLs dynamically. For that purpose:
  - I developed a custom navigation component that fits page navigation metadata provided by GitHub's API response headers
- make commits following a unified and simple syntax (check repo history)
- include common code quality tools as part of development life cycle and CI like **Prettier, ESLint** and integration of **pre-commit hook** (`lint-staged` node package)
- use pull requests and provide relevant information

# Version Control and CI

## GitHub:

- Follow "rebase/linear history" workflow though PRs to dev (check closed PRs)
- Enable GitHub Actions for build checks (Code coverage, Unit Tests, Code formatting checks, other Node CI GitHub Actions)

![image](https://user-images.githubusercontent.com/30235159/192309668-3ba5883e-55a9-4a22-8ff8-3d7a7ee4483d.png)

## GitHub Actions for Continuous Integration checks (example output):

![image](https://user-images.githubusercontent.com/30235159/192310894-9f14698a-2b53-4cba-a62e-74e174660964.png)

## Netlify:

- Integrate `dev` and `main` branches with Netlify Deploys
- Automatic "Netlify Deploy Previews" for each PR
- Netlify Deployment details integration to PRs as comments:

Example:

![image](https://user-images.githubusercontent.com/30235159/192309537-c34576b8-1f37-48f3-a57e-0f046226ca01.png)

# Tech Stack & Versions

- Angular: v14
- ng-zorro: v13
- [http-link-header v1.0.5](https://github.com/jhermsmeier/node-http-link-header)
- Angular CLI: v14
- rxjs v7.5
- typescript v4.6

## Code Quality & QA tools (main dev dependencies)

- ESLint
- Prettier
- Jasmine
- lint-staged
