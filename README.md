# GitRepos

A simple github repository tracker, made with React.

The site is deployed [here](https://gitrepo-tracker.netlify.app/)

## Installation & Usage

### Installation

- Clone or download this reposotory
- run `npm install` to install dependencies

### Usage

- `npm run dev` starts the dev server
  - Hosts the client on `localhost:8080`
- `npm run build` creates a production build
  - Outputs to `/build`
- `npm test` runs the testing suites
- `npm run coverage` generates the coverage report

note: there are currently no testing suites, though the setup for tests is there

## Planned Changes/features

- Add testing suite

## Wins & Challenges

### Wins

- Got functioning build fairly quickly
- Retrieved data from API without issues, including getting number of commits via another API call with provided URL
- Managed to achieve similar styling to GitHub's repositories page

### Challenges

- Rate limit of API
  - Had to resort to using mock data while developing
