# Web - Angular Test Assignment (Isidro Moreno)

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

- GitHub:
  - disable direct pushes to 'dev' and 'main' branches
  - Follow "rebase/linear history" workflow though PRs to dev (check closed PRs)
- Netlify:
  - Integrate Netlify with repository
  - Automatic "Netlify Deploy Previews" for each PR
  - Netlify Deployment details integration to PRs as comments

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

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Attachments / Other notes

## Pull Request Example:

![image](https://user-images.githubusercontent.com/30235159/191181699-47870fb1-588b-428b-92aa-811a06deecd4.png)
