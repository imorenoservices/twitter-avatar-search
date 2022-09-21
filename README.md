# Web - Angular Test Assignment (Isidro Moreno)

> Test Assignment Description: https://www.notion.so/Web-Angular-ReactJS-Test-Assignment-308d84eaa51c4f22b1f65d60efcd7186

## Tech Approach Overview

The following items describe the main tech guidelines I took in order to share skills and get feedback. I've performed tasks I'm used to perform on a daily basis. For that purpose I followed some steps that emulates real world tasks like:

- setting up an Angular project from scratch
- research and analize about tools that help accelerarate developemt (ng-zorro / http link header parser lib for GitHub API pagination metadata)
- develop custom components that adjusts to API features/restrictions
  - **Besides the fact ng-zorro provides several options for navigation through pages. I took advantage of GitHub's Paginations features and restrictions in order to develop a custom navigation component that fits page navigation metadata provided in GitHub's API response headers. (GitHub docs encourages to use those headers for navigation instead of building a URL on client side)**
- make commits following a unified and simple syntax (check repo history)
- make use of pull requests and provide relevant information (kept them short for the purpose of the test)

## High Level Project tasks

### Project Scaffolding from scratch

- Start from a brand new angular project from scratch
- Add Code Quality Tools like Prettier, ESlint and integration of pre-commit hook (lint-staged)
- Use ng-zorro as a main UI components library

### Version Control and CI

- GitHub:
  - disable direct pushes to 'dev' and 'main' branches
  - Follow "rebase/linear history" workflow though PRs to dev (check closed PRs)
- Netlify:
  - Integrate Netlify with respository
  - Automatic "Netlify Deploy Previews" for each PR
  - Netlify Deployment details integration to PRs as comments

## Tech Stack Version:

- Angular: 13.3.11
- ng-zorro: 13.4
- Angular CLI: 13.3.9
- rxjs 7.5.6
- typescript 4.6.4

### Code Quality tools:

- "eslint": "^8.17.0"
- "jasmine-core": "~4.0.0"
- "lint-staged": "^13.0.3"
- "prettier": "2.7.1"

# Development Environment

This project was generated with: [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## System Requirements:

- Node: 16.14.2
- Package Manager: npm 8.5.0

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
