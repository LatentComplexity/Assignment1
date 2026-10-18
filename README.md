# MSR Research Guide

[![CI and Pages](https://github.com/LatentComplexity/Assignment1/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/LatentComplexity/Assignment1/actions/workflows/ci.yml)

A simple web reference for new PhD students studying Mining Software Repositories (MSR).

**[Open the website](https://LatentComplexity.github.io/Assignment1/)** · [Requirements and user stories](docs/requirements.md)[](docs/github-walkthrough.md)

## Run locally

Use Node.js 24 and npm. On macOS with Homebrew:

```sh
brew install node@24
export PATH="$(brew --prefix node@24)/bin:$PATH"
npm ci
npm start
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173).

## Run tests

Stop the preview first: the tests start their own server on port 4173.

```sh
npm ci
npx playwright install chromium
npm test
```

On Linux, use `npx playwright install --with-deps chromium` to install browser system dependencies as well. `npm run test:headed` displays the test browser when a desktop session is available.

## Project plan

| Milestone | Scope | Status |
| --- | --- | --- |
| 1. Page Structure & Navigation | HTML, four tabs, switching, basic styling, testing, and delivery support | Implemented |
| 2. Data Sources Content | Seven source categories, data types, descriptions | Planned |
| 3. Collection Methods Content | Six methods, purposes, pros/cons | Planned |
| 4. Analysis Methods Content | Eight methods, analysis types, use cases | Planned |
| 5. Publication Venues Content | Six conferences and three journals, focus and relevance | Planned |
| 6. Styling & Polish |  Layouts, broader device/browser and accessibility review | Planned |
